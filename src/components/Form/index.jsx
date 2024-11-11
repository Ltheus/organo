import "./Form.css";
import TextInput from "../TextInput";
import Dropdown from "../Dropdown";

const Form = () => {
  const teams = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX & Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="formContainer">
      <form>
        <h2>Preencha o formulário com os dados do colaborador: </h2>
        <TextInput label="Nome" placeholder="Digite seu nome" />
        <TextInput label="Cargo" placeholder="Digite seu cargo" />
        <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown label="Time" list={teams} />
      </form>
    </section>
  );
};

export default Form;
