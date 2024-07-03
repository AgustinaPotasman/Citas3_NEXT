"use client"

import styles from "./Reserva.module.css"
import Titulo from "../components/Titulo";
import CrearCita from "../components/CrearCita/page";
import AdministradorDeCitas from "../components/AdministradorCitas/page";
import { useState } from 'react';

export default function Home() {
  const [citas, setCitas] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Titulo titulo="ADMINISTRADOR DE PACIENTES"></Titulo>
        <div class="mainData">
          <CrearCita citas={citas} setCitas={setCitas}></CrearCita>
          <AdministradorDeCitas citas={citas} setCitas={setCitas}></AdministradorDeCitas>
        </div>
      </header>
    </div>
  );
}

