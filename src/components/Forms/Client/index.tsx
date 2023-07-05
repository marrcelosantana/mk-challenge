/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";

import { Button } from "@/components/Button";
import { genders, marital_status } from "@/utils/data";
import { api } from "@/services/api";

import { useSales } from "@/hooks/useSales";
import { useIBGE } from "@/hooks/useIBGE";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Actions,
  BackLink,
  Container,
  Divider,
  FirstSubSection,
  Footer,
  Form,
  Input,
  InputContainer,
  Label,
  Line,
  SearchButton,
  Section,
  Select,
  SubSection,
  Subtitle,
  Title,
} from "./styles";

type FormDataProps = {
  name: string;
  cpf: string;
  rg: string;
  oe: string;
  phone: string;
  cellphone: string | undefined;
  birth_date: string;
  nationality: string;
};

const schema = yup.object({
  name: yup.string().trim().required("Digite o nome"),
  cpf: yup.string().trim().required("Digite o cpf"),
  rg: yup.string().trim().required("Digite o RG ou IE"),
  oe: yup.string().trim().required("Digite o Orgão Emissor"),
  phone: yup.string().trim().required("Digite o número de telefone"),
  cellphone: yup.string(),
  birth_date: yup.string().trim().required("Digite o data de nascimento"),
  nationality: yup.string().trim().required("Digite a nacionalidade"),
});

export function Client() {
  const { clients, fetchClients } = useSales();
  const { ufs, cities, ufSelected, setSelectedUf } = useIBGE();

  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("default");
  const [selectedGender, setSelectedGender] = useState<string>("default");
  const [selectedStatus, setSelectedStatus] = useState<string>("default");

  const { control, setValue, handleSubmit } = useForm<FormDataProps>({
    resolver: yupResolver(schema),
  });

  function handleSearch() {
    const client = clients.find((client) => client.name === selectedClient);

    if (client) {
      setValue("name", client.name);
      setValue("cpf", client.cpf);
      setValue("rg", client.rg);
      setValue("oe", client.oe);
      setValue("phone", client.phone);
      setValue("cellphone", client.cellphone);
      setValue("birth_date", client.birth_date);
      setValue("nationality", client.nationality);

      setSelectedCity(client.city);
      setSelectedUf(client.uf);
      setSelectedGender(client.gender);
      setSelectedStatus(client.status);
    }

    return;
  }

  async function handleUpdate(data: FormDataProps) {
    if (!selectedClient) {
      return;
    }
    try {
      const client = clients.find((item) => item.name === selectedClient);
      const clientId = client?.id;

      const newClient = {
        id: clientId,
        name: data.name,
        cpf: data.cpf,
        rg: data.rg,
        oe: data.oe,
        phone: data.phone,
        cellphone: data.cellphone,
        birth_date: data.birth_date,
        nationality: data.nationality,
        uf: ufSelected,
        city: selectedCity,
        gender: selectedGender,
        status: selectedStatus,
      };

      await api.put(`/clients/${clientId}`, newClient);

      console.log(clientId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Section>
        <Title>Buscar cliente</Title>
        <Line />
        <Subtitle>Buscar cliente</Subtitle>

        <Actions>
          <Select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setSelectedClient(e.target.value)
            }
          >
            <option selected disabled>
              Selecione uma pessoa...
            </option>
            {clients.map((client) => (
              <option key={client.id}>{client.name}</option>
            ))}
          </Select>

          <SearchButton onClick={handleSearch}>Buscar</SearchButton>
          <Button title="Adcionar pessoas" model="primary" />
        </Actions>
      </Section>
      <Divider />

      <Form>
        <Section>
          <FirstSubSection>
            <InputContainer>
              <Label>Nome completo</Label>
              <Controller
                control={control}
                name="name"
                render={({ field: { value, onChange } }) => (
                  <Input
                    style={{ width: "60%" }}
                    placeholder="Nome"
                    value={value}
                    onChange={onChange}
                    type="text"
                  />
                )}
              />
            </InputContainer>
          </FirstSubSection>

          <SubSection>
            <InputContainer>
              <Label>CPF</Label>
              <Controller
                control={control}
                name="cpf"
                render={({ field: { value, onChange } }) => (
                  <Input
                    style={{ width: 149 }}
                    placeholder="000.000.000-00 "
                    value={value}
                    onChange={onChange}
                    type="text"
                  />
                )}
              />
            </InputContainer>

            <InputContainer>
              <Label>IE/RG</Label>
              <Controller
                control={control}
                name="rg"
                render={({ field: { value, onChange } }) => (
                  <Input
                    style={{ width: 128 }}
                    placeholder="IE ou RG"
                    value={value}
                    onChange={onChange}
                    type="text"
                  />
                )}
              />
            </InputContainer>

            <InputContainer>
              <Label>Órgão emissor</Label>
              <Controller
                control={control}
                name="oe"
                render={({ field: { value, onChange } }) => (
                  <Input
                    style={{ width: 107 }}
                    placeholder="OE"
                    value={value}
                    onChange={onChange}
                    type="text"
                  />
                )}
              />
            </InputContainer>
          </SubSection>

          <SubSection>
            <InputContainer>
              <Label>Telefone</Label>
              <Controller
                control={control}
                name="phone"
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="(00) 0000-0000"
                    value={value}
                    onChange={onChange}
                    type="text"
                  />
                )}
              />
            </InputContainer>

            <InputContainer>
              <Label>Celular</Label>
              <Controller
                control={control}
                name="cellphone"
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="(00) 0000-0000"
                    value={value}
                    onChange={onChange}
                    type="text"
                  />
                )}
              />
            </InputContainer>
          </SubSection>
        </Section>
        <Divider />

        <Section>
          <InputContainer>
            <Label>Data de nascimento</Label>
            <Controller
              control={control}
              name="birth_date"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="00/00/00"
                  value={value}
                  onChange={onChange}
                  type="text"
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Label>Nacionalidade</Label>
            <Controller
              control={control}
              name="nationality"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Nacionalidade"
                  value={value}
                  onChange={onChange}
                  type="text"
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Label>Estado de nascimento</Label>
            <Select
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedUf(e.target.value)
              }
              value={ufSelected}
            >
              <option selected disabled value="default">
                Selecione o estado...
              </option>
              {ufs.map((uf) => (
                <option key={uf.id} value={uf.sigla}>
                  {uf.sigla}
                </option>
              ))}
            </Select>
          </InputContainer>

          <InputContainer>
            <Label>Naturalidade (Cidade de nascimento)</Label>
            <Select
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedCity(e.target.value)
              }
              value={selectedCity}
            >
              <option selected disabled value="default">
                Selecione a cidade...
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.nome}>
                  {city.nome}
                </option>
              ))}
            </Select>
          </InputContainer>
        </Section>
        <Divider />

        <Section>
          <InputContainer>
            <Label>Estado civil</Label>
            <Select
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedStatus(e.target.value)
              }
              value={selectedStatus}
            >
              <option selected disabled value="default">
                Selecione o estado civil...
              </option>
              {marital_status.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </InputContainer>

          <InputContainer>
            <Label>Sexo</Label>
            <Select
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedGender(e.target.value)
              }
              value={selectedGender}
            >
              <option selected disabled value="default">
                Selecione o sexo...
              </option>
              {genders.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </InputContainer>
        </Section>
        <Divider />

        <Button
          title="Atualizar"
          model="default"
          disabled={!selectedClient}
          onClick={handleSubmit(handleUpdate)}
        />
        <Divider />

        <Footer>
          <Button title="Continuar" model="secondary" />
          <BackLink>Voltar</BackLink>
        </Footer>
      </Form>
    </Container>
  );
}
