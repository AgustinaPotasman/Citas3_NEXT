
import Titulo from "../components/Titulo";
import Input from "../components/input";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
        <Titulo params="Bienvenidos!"></Titulo>
        <Input iType="text" iPlaceholder="¿Como te llamas?" iLabel="Ingresa tu nombre"></Input>
    </main>
  );
}
