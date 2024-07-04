import styles from "./titulo.module.css";


export default function Titulo({titulo}){
    return(
        <h1 className={styles.titulo}>{titulo}</h1>
    )
}