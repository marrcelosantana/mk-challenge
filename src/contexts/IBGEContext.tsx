import {
  ChangeEvent,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

import { CityDTO } from "@/models/CityDTO";
import { UFDTO } from "@/models/UFDTO";

import { api_IBGE } from "@/services/api";

export type IBGEContextDataProps = {
  ufs: UFDTO[];
  cities: CityDTO[];
  handleSelectUf: (event: ChangeEvent<HTMLSelectElement>) => void;
};

type IBGEContextProviderProps = {
  children: ReactNode;
};

export const IBGEContext = createContext<IBGEContextDataProps>(
  {} as IBGEContextDataProps
);

export function IBGEContextProvider({ children }: IBGEContextProviderProps) {
  const [ufs, setUfs] = useState<UFDTO[]>([]);
  const [cities, setCities] = useState<CityDTO[]>([]);
  const [ufSelected, setSelectedUf] = useState("0");

  async function fetchUfs() {
    try {
      const response = await api_IBGE.get("/estados");
      setUfs(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCities() {
    if (ufSelected === "0") {
      return;
    }

    try {
      const response = await api_IBGE.get(`/estados/${ufSelected}/municipios`);
      setCities(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  useEffect(() => {
    fetchUfs();
    fetchCities();
  }, [ufSelected]);

  return (
    <IBGEContext.Provider value={{ ufs, cities, handleSelectUf }}>
      {children}
    </IBGEContext.Provider>
  );
}
