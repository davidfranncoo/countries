import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {getCountries, getOrderAbc, getFilterByContinent} from "../../action";
import Card from "../Card/Card"
import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado"
import SeachBar from "../SeachBar/SearchBar";
import "./Home.css";
import "../LandiPage/LandiPage.css"



export default function Home(){
    const dispatch=useDispatch()
    const allCountries=useSelector(state=>state.countries) ||[];

    const [current,setCurrent]=useState(1)
    //paginado
    const countryPerPage=10;
    const indexOfLastCountry=current*countryPerPage;//10
    const indexOfFirtsCountry= indexOfLastCountry-countryPerPage;//9
   //ordenar alfabeticamente
   const[order,setOrder]=useState("")//!entender el porque para que funcione
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

//para que se cargue ni bien le levante
// useEffect(()=>{
//     dispatch(getCountries())


// }, [dispatch])
useEffect(() => {
    setLoading(true);
    dispatch(getCountries()).then(() => setLoading(false));
  }, [dispatch]);


    return (
        <div>   
            <h1>PAISES DEL MUNDO</h1>
                <Link to="/create">
                <button className="boton">Crear Actividad</button>
                </Link>
                <button className="icon-recargar" onClick={(e)=>handlerRefresh(e)}>↺</button>
            <div className="select-conteiner">
              

                <select onChange={(e)=>handlerOrder(e)}>
                    <option value="asc">Ascendente</option>
                    <option value="des">Descendente</option>
                </select>
              
            
                <select>
                    <option value="asce">pobacion mayAmen</option>
                    <option value="desc">Descendente maenAmay</option>
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
                <select>
                   
                    <option value="act 1">actividad1</option>
                    <option value="act 2"> actividad2</option>
                </select>
            </div>
            <div>
                <SeachBar/> 
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