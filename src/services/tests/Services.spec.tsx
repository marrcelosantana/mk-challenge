import axios, { AxiosInstance, AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";

export const api_IBGE: AxiosInstance = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

describe("api_IBGE", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(api_IBGE);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should have the correct baseURL", () => {
    expect(api_IBGE.defaults.baseURL).toBe(
      "https://servicodados.ibge.gov.br/api/v1/localidades"
    );
  });

  it("should make a successful GET request", async () => {
    const responseData = { data: "response" };
    mock.onGet("/ibge-endpoint").reply(200, responseData);

    const response: AxiosResponse = await api_IBGE.get("/ibge-endpoint");

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });

  it("should handle a failed GET request", async () => {
    mock.onGet("/ibge-endpoint").reply(404);

    await expect(api_IBGE.get("/ibge-endpoint")).rejects.toThrow();
  });
});

describe("api", () => {
  it("should have the correct base URL", () => {
    const api = axios.create({
      baseURL: "http://localhost:3333",
    });

    expect(api.defaults.baseURL).toBe("http://localhost:3333");
  });
});
