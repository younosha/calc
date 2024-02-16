import { ROUTES } from "./enums";

export interface Expression {
  id: string,
  created_at: string,
  updated_at: string,
  data: string,
  status: string,
  parse_date: string,
  result: number,
  is_ready: boolean,
}

export interface Operation {
  id: string,
  operation_type: string,
  execution_time: number,
}

export interface Agent {
  id: string,
  number_of_parallel_calculations: number,
  last_ping: string,
  status: string,
  created_at: string,
}

export interface HeaderProps {
  activePage: ROUTES | string,
  setActivePage: (value: ROUTES) => void,
}

export interface OperationBlockProps {
  operation: Operation,
  saveChanges: (value: number) => void;
}

export interface ButtonProps {
  title: string,
  onClick: () => void,
  disabled?: boolean,
}

export interface InputProps {
  value: string | number,
  onChange: (value: string) => void,
  type?: string;
}