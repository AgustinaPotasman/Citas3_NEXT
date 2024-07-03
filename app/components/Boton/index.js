import styles from "./Boton.module.css";

function Boton({ sendText }) {
  return <button type="submit" className={styles.myBtn}>{ sendText }</button>;
}

export default Boton;