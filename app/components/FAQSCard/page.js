import styles from "./FCard.module.css"
import Subtitulo from "../Subtitulo/page";
export default function FCard({subtitulo , parrafo} ){

    return(
        <div className={styles.container}>
            <Subtitulo subtitulo={subtitulo}></Subtitulo>
            <p>{parrafo}</p>
        </div>
    );
}
