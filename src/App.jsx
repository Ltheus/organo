import Banner from "./components/Banner";
import TextInput from "./components/TextInput";

function App() {
  return (
    <>
      <Banner />
      <TextInput label="Nome" placeholder="Digite seu nome" />
      <TextInput label="Cargo" placeholder="Digite seu cargo" />
      <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
    </>
  );
}

export default App;
