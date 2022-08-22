import React from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import '../../componentsStyle/reserva/reservaExitosa.css'

const ReservaExitosa = ({isOpenCE, close}) => {

    const navigate= useNavigate()

   // const history = useHistory();

    const handleClick = () => {
     //   history.push("/");
     navigate('/')

    }

    if(!isOpenCE) {return null};

    const modalStyles={
        position: "absolute",
        top: '50%',
        left: '50%',
        width: "100vw",
    height: "100vh",
position: "fixed",
top: 0,
left: 0,
background: "rgba(0, 0, 0, 0.8)",
zIndex: "500",
display: "flex",
alignItems: "center",
justifyContent: "center"
    }

    return (
        <div style={modalStyles} className="contenedor-mensajes-exitoso">
            <FontAwesomeIcon className="icono-exitoso" icon={faCalendarCheck} />
            <p className="texto-resaltado">¡Muchas gracias!</p>
            <p className="normal-texto">Su reserva se ha realizado con éxito</p>
            <button type="button" className="ok-boton" onClick={handleClick}>ok</button>
        </div>
    )
}

export default ReservaExitosa;