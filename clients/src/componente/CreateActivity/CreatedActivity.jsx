import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, postActivity } from "../../action";
import "./CreateActivity.css"

export default function CreatedActivity(){
const dispatch=useDispatch();
const nameCountry= useSelector(state=>state.nameCounties)||[];
const [error,setError]=useState({})
const [input,setInput]=useState({name:"", dificultad:"", duracion:"", temporada:"", countri: []})


useEffect(()=>{
    dispatch(getCountries())
}, [dispatch])

 function validacion(valor){
    let error={}
        if(!/^[a-zA-Z\s]+$/.test(valor.name)) error.name="Debes ingresar solo letras"
        if(!valor.dificultad) error.dificultad=" No debes agregar una Dificultad"
        if(!valor.duracion) error.duracion="Debes agregar una Duracion"
        if(!valor.temporada) error.temporada="Debes agregar una Tempòrada" 
        if(valor.countri==="") error.countri="Debes agregar un pais"    

    return error}

//? funcion para cuando hay cambios en el input.
function handlerInput(e){

    setInput({...input,[e.target.name]:e.target.value})
    setError(validacion({...input,[e.target.name]:e.target.value}))
}

//? funcion para seleccionar los paises que tienen las actividades
function handlerActivity(e){
    console.log("input",input)
    setInput({
        ...input,
        countri: [...input.countri, e.target.value]
    })   
     setError(validacion({...input.countri,countri:e.target.value}))
}

//?funcion para despachar el post
function handlerSubmit(e){
    e.preventDefault()
    dispatch(postActivity(input));
    setInput({name:"", dificultad:"", duracion:"", temporada:"", countri:[]})
    alert("se creo la actividad")}
    
//------------------MAKETADO-------------------------
    return(
        <div>    
            <Link to="/Home">
                <button> Atras </button>
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
                {error.name?<span>{error.name}</span>:""}
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
                {error.dificultad? <span> {error.dificultad}</span>: ""}
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
            {error.temporada? <span>{error.temporada}</span>:  ""}
            </div>

            <div>
                <label>Duracion 
                    <input 
                    type="number" 
                    placeholder="Horas.."
                    name="duracion"
                    value={input.duracion}
                    onChange={(e)=>handlerInput(e)}/>
                </label>
                {error.duracion? <span>{error.duracion}</span>: ""}
            </div>

            <div>
                    {/* vamos a mostrar todos los paises y vamos a agregar en e el mostrrador */}
                <label>Paises 
                    <select 
                name="countri"
                value={input.countri.join(",")}
                onChange={(e)=>handlerActivity(e)}>
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
                    {error.countri===""? <span>{error.countri}</span>: null}

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