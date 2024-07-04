"use client"

import { useEffect } from "react";
import Subtitulo from "../Subtitulo/page";
import Image from 'next/image'

export default function Info({subtitulo, desc}){
    return(
        <div>
            <Subtitulo subtitulo= {subtitulo}></Subtitulo>
            <p>{desc}</p>
            <Image width={60} height={69} src="/cheto.png"/>
        </div>
    )
}