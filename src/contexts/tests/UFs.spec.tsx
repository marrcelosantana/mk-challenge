import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { useState } from "react";

type UFDTO = {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
};

describe("fetchUfs", () => {
  test("should fetch UFs and set the state", async () => {
    const responseMock: UFDTO[] = [
      {
        id: 1,
        sigla: "SP",
        nome: "São Paulo",
        regiao: {
          id: 1,
          sigla: "SE",
          nome: "Sudeste",
        },
      },
      {
        id: 2,
        sigla: "RJ",
        nome: "Rio de Janeiro",
        regiao: {
          id: 1,
          sigla: "SE",
          nome: "Sudeste",
        },
      },
    ];
    jest.spyOn(axios, "get").mockResolvedValueOnce({ data: responseMock });

    const IBGEComponent = () => {
      const [ufs, setUfs] = useState<UFDTO[]>([]);

      const fetchUfs = async () => {
        const response = await axios.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        setUfs(response.data);
      };

      return (
        <div>
          <button onClick={fetchUfs}>Fetch UFs</button>
          <ul>
            {ufs.map((uf) => (
              <li key={uf.id}>{uf.nome}</li>
            ))}
          </ul>
        </div>
      );
    };

    render(<IBGEComponent />);

    fireEvent.click(screen.getByText("Fetch UFs"));

    await waitFor(() =>
      expect(screen.getByText("São Paulo")).toBeInTheDocument()
    );
    expect(screen.getByText("Rio de Janeiro")).toBeInTheDocument();
  });
});
