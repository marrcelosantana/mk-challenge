import { useContext } from "react";
import { IBGEContext } from "@/contexts/IBGEContext";

export function useIBGE() {
  const context = useContext(IBGEContext);
  return context;
}
