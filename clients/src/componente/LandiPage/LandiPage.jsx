import React from "react";
import {Link} from "react-router-dom";
import "./LandiPage.css"
import "../../img/paises.jpg"
import paises from "../../img/paises.jpg"


export default function LandiPage(){
    return (
        <div className="conteiner">

        <div className="inicio">
            
                <h1 className="inicio2">
                    HENRY COUNTRY
                </h1>
                <Link  to="/home">
                    <button className="boton">Bienvenido</button>
                </Link>
            
        </div>
        <img className="landi" src={paises} alt="paises"/>
   
        </div>
   )
}