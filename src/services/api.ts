import axios from "axios"
import { Agent, Expression, Operation } from "../ts/interfaces";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getExpressions = async (): Promise<Expression[]> => {
  const { data } = await axios.get("/expressions");
  return data;
}

export const createExpression = async (name: string): Promise<Expression> => {
  const { data } = await axios.post("/expression", { name });
  return data;
}

export const getOperations = async (): Promise<Operation[]> => {
  const { data } = await axios.get("/operations");
  return data;
}

export const updateOperation = async (operation: Operation): Promise<Operation> => {
  const { data } = await axios.patch("/operation", { operation });
  return data;
}

export const getAgents = async (): Promise<Agent[]> => {
  const { data } = await axios.get("/agents");
  return data;
}