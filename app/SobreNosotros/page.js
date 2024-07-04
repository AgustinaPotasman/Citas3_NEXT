import styles from "./SobreNosotros.module.css";
import Texto from "../components/Texto";
import Info from "../components/InforSobreNosotros/page";

export default function Home() {
  return (
    <main className={styles.main}>
        <Info subtitulo="Agus Poti" 
        desc={`Desde Caballito para el mundo, la mejor programadora posible \n Super pro!`} />
        <Info subtitulo="Valen Vugin" desc="Una capa!!"></Info>
    </main>
  );
}




