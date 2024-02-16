import { useEffect, useState } from "react";
import { Agent } from "../../ts/interfaces";
import { getAgents } from "../../services/api";

export const AgentsPage = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    getAgents().then(data => setAgents(data));
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