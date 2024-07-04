import Formulario from '../Formulario';
import styles from "./CrearCita.module.css";
import Subtitulo from '../Subtitulo/page';

function CrearCita( { citas, setCitas } ) {
  return (
    <div className={styles.main}>
        <Subtitulo subtitulo={"Crear mi cita"}></Subtitulo>
        <Formulario citas={citas} setCita={ setCitas }></Formulario>
    </div>
    );
}

export default CrearCita;