import styles from "./Boton.module.css";

const getBtn = (type) => {
  if(type == "regular"){
    return (`${styles.myBtn} ${styles.regular}`);
  }else {
    return (`${styles.myBtn} ${styles.secondary}`);
  }
}

function Boton({ sendText, type }) {
  return <button type="submit" className={getBtn(type)}>{ sendText }</button>;
}

export default Boton;