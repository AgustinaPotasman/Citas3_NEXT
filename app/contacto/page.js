import Titulo from "../components/Titulo";
import styles from "./Contacto.module.css";
import Form from "../components/FormContacto";

export default function Home() {
  return (
    <div className={styles.container}>
      <Titulo titulo="Contactanos!"></Titulo>
      <Form></Form>
    </div>
  );
}
