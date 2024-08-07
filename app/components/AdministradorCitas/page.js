import Card from "../Card/page";
import styles from "./Administrador.module.css";
import Subtitulo from "../Subtitulo/page";

function AdministradorDeCitas({ citas, setCitas }) {
    let i = -1
    return (
            <div className={styles.administradorDeCitas}>
                <Subtitulo subtitulo={"Administra tus citas"}></Subtitulo>
                <div class="cards">
                    {   
                        citas.map(c => {
                        i++
                        return (
                            <Card mascota={c.nMascota}  duenio={c.nDuenio} fecha={c.fecha} hora={c.hora} sintomas={c.sintomas} id={i} setCitas={setCitas} citas={citas}></Card>)
                        })
                    }
                </div>
            </div>
        );
}

export default AdministradorDeCitas;