import Titulo from "../components/Titulo";
import styles from "./FAQS.module.css";
import FAQS from "../components/FAQSCard/page";

export default function Home() {
  return (
    <main>
        <Titulo params="FAQS!"></Titulo>
        <FAQS subtitulo="¿A que hora debo llegar?"
        parrafo="Recomendamos llegar 5 minutos previos antes del horario aordado"/>
    </main>
  );
}
