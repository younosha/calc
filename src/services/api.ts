import axios from "axios"
import { Operation } from "../ts/interfaces";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getExpressions = async () => {
  const data = await axios.get("/expressions");
  console.log(data);
  return data;
}

export const createExpressions = async (name: string) => {
  const data = await axios.post("/expression", { name });
  console.log(data);
  return data;
}

export const getOperations = async () => {
  const data = await axios.get("/operations");
  console.log(data);
  return data;
}

export const updateOperations = async (operation: Operation) => {
  const data = await axios.patch("/operation", { operation });
  console.log(data);
  return data;
}

export const getAgents = async () => {
  const data = await axios.get("/agents");
  console.log(data);
  return data;
}