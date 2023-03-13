import React from "react";
import "./Card.css"
//import { Link } from "react-router-dom";

export default function Card({city,image,continente}){

    return (
        <div className="card">
           <img src={image}
            alt="imagene no funciona"
            width="200px"
            height="250px"></img>
            <h2 className="city">{city}</h2>
           <h3>{continente}</h3>
        </div>
    
    )
    
}