import { createContext, ReactNode, useEffect, useState } from "react";

import { ClientDTO } from "@/models/ClientDTO";
import { api } from "@/services/api";

export type SalesContextDataProps = {
  clients: ClientDTO[];
};

type SalesContextProviderProps = {
  children: ReactNode;
};

export const SalesContext = createContext<SalesContextDataProps>(
  {} as SalesContextDataProps
);

export function SalesContextProvider({ children }: SalesContextProviderProps) {
  const [clients, setClients] = useState<ClientDTO[]>([]);

  async function fetchClients() {
    try {
      const response = await api.get("/clients");
      setClients(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <SalesContext.Provider value={{ clients }}>
      {children}
    </SalesContext.Provider>
  );
}
