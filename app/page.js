import Image from "next/image";
import styles from "./page.module.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Titulo titulo="TU LUGAR"></Titulo>
      <Subtitulo subtitulo="Reserva turno para tu mascota"></Subtitulo>
    </main>
  );
}
