import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, postActivity } from "../action";

export default function CreatedActivity(){
const dispatch=useDispatch();
const  nameCountry= useSelector(state=>state.nameCounties)||[];
const [input,setInput]=useState({
    name:"",
    dificultad:"",
    duracion:"",
    temporada:"",
    countri: [],

})
useEffect(()=>{
    dispatch(getCountries())
}, [dispatch])
//? funcion para cuando hay cambios en el input.
function handlerInput(e){
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
    console.log("nameeee",input)
}

//? funcion para seleccionar los paises que tienen las aactividades
function handlerActivity(e){
    console.log("input",input)
    setInput(({
        ...input,
        countri: [...input.countri, e.target.value]
    }))

}
//?funcion para despachar el post
function handlerSubmit(e){
    e.preventDefault()

    dispatch(postActivity(input));

    setInput({
        name:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        countri:[],
    
})
alert("se creo la actividad")}


    return(
        <div>    
            <Link to="/Home">
                <button>Atras</button>
            </Link>
            <h1>Crear Actividad</h1>
        <form onSubmit={(e)=>handlerSubmit(e)}> 
            <div>
                <label>Nombre de la Actividad 
                <input 
                type="text" 
                placeholder="name"
                name="name"
                value={input.name}
                onChange={(e)=>handlerInput(e)}></input></label>
            </div>

            <div>    
                <label>Dificultad
                    <select 
                    name="dificultad"
                    value={input.dificultad}
                    onChange={(e)=>handlerInput(e)}>
                        <option value=""></option>
                        <option value="Facil">Facil</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Complejo">Complejo</option>
                    </select>
                </label>
            </div>
            <div>    
                <label>Temporada
                    <select 
                    name="temporada"
                    value={input.temporada}
                    onChange={(e)=>handlerInput(e)}>
                        <option  value=""></option>

                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Primavera">Primavera</option>
                        <option value="invierno">invierno</option>
                    </select>
                </label>
            </div>

            <div>
                <label>Duracion 
                    <input 
                    type="number" 
                    placeholder="tiempo de la actividad"
                    name="duracion"
                    value={input.duracion}
                    onChange={(e)=>handlerInput(e)}/>
                </label>
                
            </div>

            <div>
                    {/* vamos a mostrar todos los paises y vamos a agregar en e el mostrrador */}
                <label>Paises 
                    <select 
                    name="countri"
                   value={input.countri}
                   onChange={(e)=>handlerActivity(e)}
                   >
                    <option value=""> </option>
                    {nameCountry.map((e,index)=>{
                        return (
                            <option 
                            key={index} 
                            value={e.id}
                            >{e.name}</option>
                            )})}
                    </select>
                </label>

                {/* nomstrar en pantalla */}
                <ul>
                    {
                        input.countri.map((e,index)=>{
                            return( <li key={index}> {e}</li>)
                        })
                    }
                </ul>
            </div>
            
           

            <button type="submit" >Enviar</button>

            

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