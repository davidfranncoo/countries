import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {getCountries, 
    getOrderAbc, 
    getFilterByContinent, 
    filterActivity,
    getAllActivity,
    getOrderbyCore} from "../../action";
import Card from "../Card/Card"
import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado"
import SeachBar from "../SeachBar/SearchBar";
import "./Home.css";
import "../LandiPage/LandiPage.css"



export default function Home(){
    const dispatch=useDispatch() 
    const allCountries=useSelector(state=>state.countries) || [];
    console.log("allcountries",allCountries)
    const actividad = useSelector(state =>state.allActivity)|| [];
//    console.log("actividades",actividad)

    const [current,setCurrent]=useState(1)
    //paginado
    const countryPerPage=10;
    const indexOfLastCountry=current*countryPerPage;//10
    const indexOfFirtsCountry= indexOfLastCountry-countryPerPage;//0
   //ordenar alfabeticamente
   const[,setOrder]=useState("")//!entender el porque para que funcione
    const currentCountry=allCountries.slice(indexOfFirtsCountry,indexOfLastCountry);
    const [loading, setLoading] = useState(true)

const paginado=(numberPage)=>{
    setCurrent(numberPage)
}

function handlerRefresh(e){
    e.preventDefault()
    dispatch(getCountries())
}
function handlerOrder(e){
    e.preventDefault()
    dispatch(getOrderAbc(e.target.value))
    setCurrent(1);
    setOrder(`${e.target.value}`)

}
function handlerFilterByContinent(e){
    dispatch(getFilterByContinent(e.target.value))    
}
function handlerCores(e){
    e.preventDefault()
    dispatch(getOrderbyCore(e.target.value))
    setCurrent(1);
    setOrder(`${e.target.value}`)
}
function handleFilterActivity(e){
    // setCurrentPage(1);
    dispatch(filterActivity(e.target.value))
    // console.log("eeeee",e.target.value)
}

//para que se cargue ni bien le levante
// useEffect(()=>{
//     dispatch(getCountries())


// }, [dispatch])
   
useEffect(() => {
    setLoading(true);
    dispatch(getCountries()).then(() => setLoading(false));
    dispatch(getAllActivity())

  }, [dispatch]);


    return (
        <div>   
            <h1>PAISES DEL MUNDO</h1>
                <Link to="/create">
                <button className="boton">Crear Actividad</button>
                </Link>
                <button className="icon-recargar" onClick={(e)=>handlerRefresh(e)}>↺</button>
           <SeachBar/> 
            <div className="select-conteiner">
              

                <select onChange={(e)=>handlerOrder(e)}>
                    <option  value="">Orden Alfabetico</option>
                    <option value="asc">A - Z</option>
                    <option value="des">Z - A</option>
                </select>
                <select onChange={(e)=>handlerCores(e)}>
                <option  value="">Orden Poblacional</option>
                    <option value="asce">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select onChange={(e)=>handlerFilterByContinent(e)}>
                    <option value="all">Todos Los Continentes</option>
                    <option value="Europe">Europeo</option>
                    <option value="Africa">Africano</option>
                    <option value="Oceania">Oceanico</option>
                    <option value="North America">Norteamericano</option>
                    <option value="South America">Suramericano</option>
                    <option value="Antarctica">Antartico</option>
                  
                </select>

               

                <select
                 onChange={(e) => handleFilterActivity(e)}
                >
            <option value="">Actividades</option>
 
            {actividad?.map((e) => {
                return (
                <option id={e.id} key={e.id} value={e.name}>
                    {e.name}
                </option>
                );
  })}
</select>

            </div>
            <div>
                
                <Paginado 
                        countryPerPage={countryPerPage}
                        allCountries={allCountries.length}
                        paginado={paginado}
                />
                </div>
                <div>
               {loading?
               <Loading/>
           
               : currentCountry.map((e,index)=>{
                    return (
                        <Fragment key={index}>
                            <Link to={"/home/" + e.id}>
                            <Card city={e.name} image={e.img} continente={e.continente}  />
                            </Link>
                        </Fragment>
                        )
                
               })
                }
            </div>
        </div>
    )
}