import Boton from "../Boton";
import styles from "./Formulario.module.css";
import Input from "../Input";
import iStyles from "../Input/input.module.css"

function Formulario({ citas, setCita}) {
    
    const crearCita = (e) => {
        let pre = e.target;
        if ((pre.nMascota.value === null || pre.nMascota.value.trim() === "" || (pre.nMascota.value.trim()).length === 0) && 
        (pre.nDuenio.value === null || pre.nDuenio.value.trim() === "" || (pre.nDuenio.value.trim()).length === 0) && 
        (pre.fecha.value === null || pre.fecha.value.trim() === "" || (pre.fecha.value.trim()).length === 0) && 
        (pre.hora.value === null || pre.hora.value.trim() === "" || (pre.hora.value.trim()).length === 0)) {
            alert("Carga todos los campos necesarios");
            return false;
          }
          else{
            if (window.confirm("Confirmas que queres agregar esta cita?")) {
                e.preventDefault();
                setCita([...citas, {
                    nMascota: e.target.nMascota.value,
                    nDuenio: e.target.nDuenio.value,
                    fecha: e.target.fecha.value,
                    hora: e.target.hora.value,
                    sintomas: e.target.sintomas.value
                }]);
                }else alert("La cita no ha sido creada");
          }
}
/*
<label>Nombre Mascota</label>
                    <input type="text"  name="nMascota" placeholder="Nombre de tu mascota"/>
*/ 

    return (
            <form className={styles.form} onSubmit={crearCita}>
                <Input iType="text" iPlaceholder="Nombre de tu mascota" iLabel="Nombre mascota" iName="nMascota"></Input>
                <Input iType="text" iPlaceholder="Nombre dueño de la mascota" iLabel="Nombre Dueño" iName="nDuenio"></Input>
                <Input iType="date" iPlaceholder="" iLabel="Fecha" iName="fecha"></Input>
                <Input iType="time" iPlaceholder="" iLabel="Hora" iName="hora"></Input>
                <div className={iStyles.container}>
                    <label className={iStyles.label}>Sintomas</label>
                    <textarea className={iStyles.textarea} name="sintomas"></textarea>
                </div>
                <Boton sendText={"Agregar Cita"} type="secondary"></Boton>
            </form>
        );
}

export default Formulario;