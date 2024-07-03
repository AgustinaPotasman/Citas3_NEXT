import Titulo from "../components/Titulo";
import Input from "../components/Input";
import styles from "./FAQS.module.css";

export default function Home() {
  return (
    <main>
        <Titulo params="Bienvenidos!"></Titulo>
        <Input iType="text" iPlaceholder="¿Como te llamas?" iLabel="Ingresa tu nombre"></Input>
    </main>
  );
}
