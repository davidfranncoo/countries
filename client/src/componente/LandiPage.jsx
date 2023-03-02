import React from "react";
import {Link} from "react-router-dom";

export default function LandiPage(){
    return (
        <div>
            <div className="conteiner">
                <h1 className="inicio">
                    Viajando Ando
                </h1>
                <Link  to="/home">
                    <button className="ingresar">Bienvenido</button>
                </Link>
            </div>
        </div>
   
   )
}