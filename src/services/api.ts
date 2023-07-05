import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const api_IBGE = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});
