import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { useState } from "react";

type CityDTO = {
  id: string;
  nome: string;
};

describe("fetchCities", () => {
  it("should fetch cities and set the state", async () => {
    const UF = "CE";
    const responseMock: CityDTO[] = [
      { id: "1", nome: "Fortaleza" },
      { id: "2", nome: "Quixadá" },
    ];
    jest.spyOn(axios, "get").mockResolvedValueOnce({ data: responseMock });

    const IBGEContext = () => {
      const [cities, setCities] = useState<CityDTO[]>([]);

      const fetchCities = async () => {
        const response = await axios.get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`
        );
        setCities(response.data);
      };

      return (
        <div>
          <button onClick={fetchCities}>Fetch Cities</button>
          <ul>
            {cities.map((city) => (
              <li key={city.id}>{city.nome}</li>
            ))}
          </ul>
        </div>
      );
    };

    render(<IBGEContext />);

    fireEvent.click(screen.getByText("Fetch Cities"));

    await waitFor(() =>
      expect(screen.getByText("Fortaleza")).toBeInTheDocument()
    );
    expect(screen.getByText("Quixadá")).toBeInTheDocument();
  });
});
