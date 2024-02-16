import styles from "./Input.module.css";
import { InputProps } from "../../ts/interfaces";

export const Input = ({ value, onChange, type }: InputProps) => {
  return (
    <input
      className={styles.input}
      type={type || "text"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}