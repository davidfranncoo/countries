import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CreatedActivity(){

const  nameCountry= useSelector(state=>state.nameCounties)||[];
const [input,setInput]=useState({
    name:"",
    dificultad:"",
    duracion:"",
    activity:[]

})


function handlerInput(e){
    e.preventDefault()
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
    console.log("nameeee",input)
}
function handlerActivity(e){
    console.log("input",input)
    e.preventDefault()
    const value=e.target.value
    setInput(prevState => ({
        ...prevState,
        activity: [...prevState.activity, value]
    }))

}


    return(
        <div>    
            <Link to="/Home">
                <button>Atras</button>
            </Link>
            <h1>Crear Actividad</h1>
        <form>
            <div>
                <label>Nombre de la Actividad 
                <input 
                type="text" 
                placeholder="name"
                name="name"
                onChange={(e)=>handlerInput(e)}></input></label>
            </div>

            <div>    
                <label>Dificultad
                    <select 
                    name="dificultad"
                    onChange={(e)=>handlerInput(e)}>
                        <option>Facil</option>
                        <option>Intermedio</option>
                        <option>Complejo</option>
                    </select>
                </label>
            </div>

            <div>
                <label>Duracion 
                    <input 
                    type="number" 
                    placeholder="tiempo de la actividad"
                    name="duracion"
                    onChange={(e)=>handlerInput(e)}/>
                </label>
            </div>

            <div>
                <label>Paises 
                    <select 
                    name="activity"
                    onChange={(e)=>handlerActivity(e)}
                   >
                    {/* vamos a mostrar todos los paises y vamos a agregar en e el mostrrador */}
                    {nameCountry.map((e,index)=>{
                        return (
                            <option 
                            key={index} 
                            value={e.id}
                            >{e.name}</option>
                            )})}
                    </select>
                </label>
            </div>
            
           

            <button type="submit">Enviar</button>

            

            </form>
        
        </div>
    )
}

/*-------------PSEUDOCODIGO --------------
------MAKETADO---
* name|| string
* dificultad||
*duracion|| numero  en minutos
* paises || select con los paises 
* temporada|| Vereano Otoño Invierno Primavera

* enviar ||  subtmit

-------LOGICA----
-> Armamos formulario con los input de activodades que tenga: na,e, dificultad, duracion, temporada(otoño verano...)
-> estados: para el selec, para eliminar y para 
-> SELEC con paises que vamos a ir agregando.
-> controlamos el formualrio
-> SUBTMIT si todo esta bien,

*/