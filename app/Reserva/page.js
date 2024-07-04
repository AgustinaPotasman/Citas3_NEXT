"use client"

import styles from "./Reserva.module.css"
import Titulo from "../components/Titulo";
import CrearCita from "../components/CrearCita/page";
import AdministradorDeCitas from "../components/AdministradorCitas/page";
import { useState, useEffect } from 'react';

export default function Home() {
  const [citas, setCitas] = useState(localStorage.getItem("citas") ? JSON.parse(localStorage.getItem("citas")) : []);
  useEffect(()=> {
    if(citas){
      localStorage.setItem("citas", JSON.stringify(citas));
    }
  }, [citas])
  return (
    <div className="App">
      <header className={styles.Appheader}>
        <Titulo titulo="Administrador de pacientes"></Titulo>
        <div className={styles.main}>
          <CrearCita citas={citas} setCitas={setCitas}></CrearCita>
          <AdministradorDeCitas citas={citas} setCitas={setCitas}></AdministradorDeCitas>
        </div>
      </header>
    </div>
  );
}

