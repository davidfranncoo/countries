import React from "react";
import {Link} from "react-router-dom";
import "./LandiPage.css"

export default function LandiPage(){
    return (
        <div className="inicio">
            
                <h1 className="inicio2">
                    Viajando Ando
                </h1>
                <Link  to="/home">
                    <button className="ingresar">Bienvenido</button>
                </Link>
            
        </div>
   
   )
}