"use client"

import Input from "../Input";
import Boton from "../Boton";
import styles from "./FormContacto.module.css";
import iStyles from "../input/input.module.css";

export default function Home() {
  const thanks = () => alert("Gracias! Nos estaremos contactanto contigo en la brevedad!");

  return (
    <form className={styles.main} onSubmit={thanks}>
        <Input iType="text" iPlaceholder="¿Como te llamas?" iLabel="Ingresa tu nombre" iName="nombre"></Input>
        <Input iType="text" iPlaceholder="¿Por que nos queres contactar?" iLabel="Asunto" iName="asunto"></Input>
        <div className={iStyles.container}>
            <label className={iStyles.label}>Mensaje</label>
            <textarea className={iStyles.textarea} name="contenido"></textarea>
        </div>
        <Boton sendText="Enviar"/>
    </form>
  );
}
