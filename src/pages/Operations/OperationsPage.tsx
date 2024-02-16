import styles from "./OperationPage.module.css";
import { useEffect, useState } from "react";
import { Operation } from "../../ts/interfaces";
import { OperationBlock } from "../../components/OperationBlock/OperationBlock";

const DATA = [
  {
    id: "1",
    operation_type: "operation_type 1",
    execution_time: 1,
  },
  {
    id: "2",
    operation_type: "operation_type 2",
    execution_time: 2,
  },
];

export const OperationsPage = () => {
  const [operations, setOperations] = useState<Operation[]>([]);

  useEffect(() => {
    // запрос на получение списка operations
    setOperations(DATA);
  }, []);

  return (
    <div className={styles.container}>
      {operations.map(operation => (
        <OperationBlock
          key={operation.id}
          operation={operation}
        />
      ))}
    </div>
  )
}