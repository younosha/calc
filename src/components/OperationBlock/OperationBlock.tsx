import styles from "./OperationBlock.module.css";
import { OperationBlockProps } from "../../ts/interfaces"
import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const OperationBlock = ({ operation }: OperationBlockProps) => {
  const [operationName, setOperationName] = useState(operation.execution_time);
  const isChanged = operationName !== operation.execution_time;

  const saveChanges = () => {
    // запрос на сохранение изменений и после этого запрос на обновление данных
  };

  return (
    <div>
      <p className={styles.title}>{operation.operation_type}</p>
      <div className={styles.block}>
        <Input
          type="number"
          value={operationName}
          onChange={(e) => setOperationName(Number(e))}
        />
        <Button
          title="Save"
          disabled={!isChanged}
          onClick={saveChanges}
        />
      </div>
    </div>
  )
}