import styles from "./SobreNosotros.module.css";
import Texto from "../components/Texto/page";
import Info from "../components/InforSobreNosotros/page";

export default function Home() {
  return (
    <main>
        <Texto params="Nosotras somos Valentina y Agustina"></Texto>
        <Info subtitulo="Agus Poti" desc="Super pro!"></Info>
        <Info subtitulo="Valen Vugin" desc="Una capa!!"></Info>
    </main>
  );
}




