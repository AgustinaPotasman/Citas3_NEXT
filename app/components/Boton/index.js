import styles from "./Boton.module.css";

function Boton({ sendText }) {
  return <button type="submit" class="allMayus myBtn">{ sendText }</button>;
}

export default Boton;