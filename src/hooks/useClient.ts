import { useContext } from "react";
import { ClientContext } from "@/contexts/ClientContext";

export function useClient() {
  const context = useContext(ClientContext);
  return context;
}
