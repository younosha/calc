import styles from "./ExpressionsPage.module.css";
import { useEffect, useState } from "react";
import { Expression } from "../../ts/interfaces";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

const DATA = [
  {
    id: "1",
    created_at: "created_at",
    updated_at: "updated_at",
    data: "2 + 2",
    status: "status",
  },
  {
    id: "2",
    created_at: "created_at",
    updated_at: "updated_at",
    data: "3 + 3",
    status: "status",
  },
];

export const ExpressionsPage = () => {
  const [expressions, setExpressions] = useState<Expression[]>([]);
  const [newExpression, setNewExpression] = useState<string>("");

  const createExpression = () => {
    // запрос на создание expression
    // запрос на получение списка после успешного создания
    setExpressions(prev => (
      [
        ...prev,
        { ...DATA[0], id: String(expressions.length + 1), data: newExpression }
      ]
    ))
    setNewExpression("");
  }

  useEffect(() => {
    // запрос на получение списка expressions
    setExpressions(DATA);
  }, []);

  return (
    <div>
      <div className={styles.actionsBlock}>
        <Input
          value={newExpression}
          onChange={(e) => setNewExpression(e)}
        />
        <Button
          onClick={createExpression}
          disabled={!newExpression.length}
          title="Create"
        />
      </div>
      {expressions.map(expression => {
        return (
          <p key={expression.id}>{expression.data}</p>
        )
      })}
    </div>
  )
}