import React from "react";
//import { Link } from "react-router-dom";

export default function Card({city,image,continente}){

    return (
        <div >
           <h2>{city}</h2>
           <img src={image}
            alt="imagene no funciona"
            width="200px"
            height="250px"></img>
           <h3>{continente}</h3>


        </div>
    
    )
    
}