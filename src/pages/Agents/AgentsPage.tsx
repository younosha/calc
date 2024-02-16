import { useEffect, useState } from "react";
import { Agent } from "../../ts/interfaces";

const DATA = [
  {
    id: "1",
    number_of_parallel_calculations: 1,
    last_ping: "last_ping 1",
    status: "status 1",
    created_at: "created_at 1",
  },
  {
    id: "2",
    number_of_parallel_calculations: 2,
    last_ping: "last_ping 2",
    status: "status 2",
    created_at: "created_at 2",
  },
];

export const AgentsPage = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    // запрос на получение списка agents
    setAgents(DATA);
  }, []);

  return (
    <>
      {agents.map(agent => {
        return (
          <div key={agent.id}>
            <p>{agent.last_ping}</p>
          </div>
        )
      })}
    </>
  )
}