import { createContext, ReactNode, useEffect, useState } from "react";

import { ClientDTO } from "@/models/ClientDTO";
import { api } from "@/services/api";

export type ClientContextDataProps = {
  clients: ClientDTO[];
};

type ClientContextProviderProps = {
  children: ReactNode;
};

export const ClientContext = createContext<ClientContextDataProps>(
  {} as ClientContextDataProps
);

export function ClientContextProvider({
  children,
}: ClientContextProviderProps) {
  const [clients, setClients] = useState<ClientDTO[]>([]);

  async function fetchClients() {
    try {
      const response = await api.get("/clients");
      setClients(response.data);
      console.log(clients);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientContext.Provider value={{ clients }}>
      {children}
    </ClientContext.Provider>
  );
}
