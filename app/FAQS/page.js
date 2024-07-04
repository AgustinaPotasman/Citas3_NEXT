import Titulo from "../components/Titulo";
import styles from "./FAQS.module.css";
import FAQS from "../components/FAQSCard/page";

export default function Home() {
  return (
    <main className={styles.main}>
        <Titulo titulo="Frequent Asked Questions"></Titulo>
        <div className={styles.faqs}>
          <FAQS subtitulo="¿A qué hora debo llegar?"
            parrafo={`Recomendamos llegar 5 minutos 
                  previos antes del horario acordado`}/>
          <FAQS subtitulo="¿Son people friendly?"
              parrafo={`Sí! Pero tus mascotas siempre 
              son nuestra prioridad :)`}/>
        </div>
    </main>
  );
}
