export type ClientDTO = {
  id: string;
  name: string;

  cpf: string;
  rg: string;
  oe: string;

  phone: string;
  cell_phone?: string;

  birth_date: string;
  birth_state: string;
  birth_city: string;

  nationality: string;
  marital_status: string;
  gender: string;
};
