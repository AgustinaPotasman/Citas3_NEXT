"use client"

import { useEffect } from "react";
import Subtitulo from "../Subtitulo/page";
import Image from 'next/image'
import styles from "./InfoSobreNosotros.module.css"

export default function Info({subtitulo, desc}){
    return(
        <div className={styles.card}>
            <Subtitulo subtitulo={subtitulo}></Subtitulo>
            <Image width={100} height={119} src="/cheto.png"/>
            <p>{desc}</p>
        </div>
    )
}