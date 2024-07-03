import styles from "./titulo.module.css";


export default function Titulo({params}){
    return(
        <h1 className={styles.titulo}>{params}</h1>
    )
}