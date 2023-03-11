import React,{useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails } from "../action";


export default function Details(props){

const dispatch=useDispatch()

useEffect(()=>{
    dispatch(getDetails(props.match.params.id))
}, [])


 /*Esto me tiene que traer el objeto del pais que solicite,
  procedo a extraer la informacion que necesito en el Maketado*/
const allDetails=useSelector(state=>state.details)||[]

console.log("esto es allDetails",allDetails)



/* debe tener:
    id|| nombre|| imagen|| continente|| capital|| subregion (opcional)
    area|| poblacion || actividade

*/ 
   
    return (
        <div>
<Link to="/home"><button> Atras </button>

</Link>

        <div>

        <h1>{allDetails.name}</h1>
        <img src={allDetails.img}  all="imagen no funciona"/>
        <h3>  Id:   {allDetails.id}</h3>

        </div>

        <div>
        <h3>Capital: <span>{allDetails.Capital}</span></h3>
        <h3>continente: <span>{allDetails.continente}</span></h3>
        <h3>Poblacion: <span>{allDetails.poblacion}</span></h3>
        <h3>Subregion: <span>{allDetails.subregion}</span></h3>

        </div>



        </div>
    )
}