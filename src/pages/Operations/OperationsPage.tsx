import styles from "./OperationPage.module.css";
import { useEffect, useState } from "react";
import { Operation } from "src/ts/interfaces";
import { OperationBlock } from "src/components/OperationBlock/OperationBlock";
import { getOperations, updateOperation } from "src/services/api";
import { toast } from 'react-toastify';

export const OperationsPage = () => {
  const [operations, setOperations] = useState<Operation[]>([]);

  const saveChanges = (newValue: number, operation: Operation) => {
    updateOperation({ ...operation, execution_time: newValue })
      .then(() => {
        toast.success("Success");
        getOperations()
          .then(data => setOperations(data));
      })
      .catch(() => {
        toast.error("Error");
      });
  };

  useEffect(() => {
    getOperations()
      .then(data => setOperations(data));
  }, []);

  return (
    <div className={styles.container}>
      {operations.map(operation => (
        <OperationBlock
          key={operation.id}
          operation={operation}
          saveChanges={(newValue) => saveChanges(newValue, operation)}
        />
      ))}
    </div>
  )
}