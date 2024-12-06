import "./Form.css";
import TextInput from "../TextInput";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";
import { teamList } from "../../utils/data/teams";

const Form = ({ onAddEmployee }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [team, setTeam] = useState("");

  const teams = teamList;

  const submitForm = (event) => {
    event.preventDefault();
    onAddEmployee({
      name,
      position,
      imageUrl,
      team,
    });
    setName("");
    setPosition("");
    setImageUrl("");
    setTeam("");
  };

  return (
    <section className="formContainer">
      <form onSubmit={submitForm}>
        <h2>Preencha o formulário com os dados do colaborador: </h2>
        <TextInput
          required
          label="Nome"
          placeholder="Digite o nome do colaborador"
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextInput
          required
          label="Cargo"
          placeholder="Digite o cargo do colaborador"
          value={position}
          onChange={(value) => setPosition(value)}
        />
        <TextInput
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imageUrl}
          onChange={(value) => setImageUrl(value)}
        />
        <Dropdown
          required
          label="Time"
          list={teams}
          value={team}
          onChange={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
