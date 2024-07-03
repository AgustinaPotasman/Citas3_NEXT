import Input from "../Input";
import Boton from "../Boton";
import styles from "./FormContacto.module.css";
import iStyles from "../Input/input.module.css";

export default function Home() {
  return (
    <form>
        <Input iType="text" iPlaceholder="¿Como te llamas?" iLabel="Ingresa tu nombre" iName="nombre"></Input>
        <Input iType="text" iPlaceholder="¿Por que nos queres contactar?" iLabel="Asunto" iName="asunto"></Input>
        <div className={iStyles.container}>
            <label>Mensaje</label>
            <textarea className={styles.textarea} name="contenido"></textarea>
        </div>
        <Boton sendText="Enviar"/>
    </form>
  );
}
