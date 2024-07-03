import Boton from "../Boton";
import styles from "./Card.module.css";

function Card({mascota , duenio, fecha, hora, sintomas, id, setCitas, citas}) {
  
  const eliminar = (e) => {
      if (window.confirm("Confirmas que queres eliminar esta cita?")) {
        let citasUpdate = citas;
        citasUpdate.splice(id,1);
        setCitas([...citasUpdate]);
      }else alert("La cita no ha sido eliminada");
    }
    return (
          <div className={styles.card}>
              <ul className={styles.container}>
                <li className={styles.element}><b>Mascota:</b> {mascota}</li>
                <li className={styles.element}><b>Dueño:</b> {duenio}</li>
                <li className={styles.element}><b>Fecha:</b> {fecha}</li>
                <li className={styles.element}><b>Hora:</b> {hora}</li>
                <li className={styles.element}><b>Sintomas:</b> {sintomas}</li>
                <input type="hidden" value={id} name="index" />
              </ul>
              <div onClick={eliminar}>
                <Boton sendText={"Eliminar X"} ></Boton>
              </div>
              
          </div>
      );
}

export default Card;