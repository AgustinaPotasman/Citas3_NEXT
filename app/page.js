import Image from "next/image";
import styles from "./page.module.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo/page";
import Boton from "./components/Boton";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Titulo titulo="Reserva un turno para tus amigos caninos!"></Titulo>
      <Subtitulo subtitulo="Te asesoramos y atendemos en cualquier inquitud que tengas."></Subtitulo>
      <div className={styles.container}>
        <Link href="/Reserva"><Boton sendText={"¡Empeza aca!"} type={"secondary"}></Boton></Link>
      </div>
    </main>
  );
}
