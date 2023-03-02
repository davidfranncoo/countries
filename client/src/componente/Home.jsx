import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {getCountries} from "../action";
import Card from "./Card/Card"
import Paginado from "./Paginado/Paginado"
import SeachBar from "./SearchBar";
export default function Home(){
    const dispatch=useDispatch()
    const allCountries=useSelector(state=>state.countries) ||[];

    const [current,setCurrent]=useState(1)
    //paginado
    const countryPerPage=10;
    const indexOfLastCountry=current*countryPerPage;
    const indexOfFirtsCountry= indexOfLastCountry-countryPerPage;
    const currentCountry=allCountries.slice(indexOfFirtsCountry,indexOfLastCountry);

const paginado=(numberPage)=>{
    setCurrent(numberPage)
}


//para que se cargue ni bien le levante
useEffect(()=>{
    dispatch(getCountries())

}, [dispatch])

console.log("estooooooo...",allCountries)
    return (
        <div>

            <Link to="/create">
            <button>Crear Actividad</button>
            </Link>
            <h1>home de viaje</h1>
            <div>
              
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="des">Descendente</option>
                </select>
                <select>
                    <option value="asce">pobacion mayAmen</option>
                    <option value="desc">Descendente maenAmay</option>
                </select>
                <select>
                    <option value="con1">continente 1</option>
                    <option value="cont2">continente 2</option>
                  
                </select>
                <select>
                   
                    <option value="act 1">actividad1</option>
                    <option value="act 2"> actividad2</option>
                </select>
            </div>
            <div>
                <Paginado 
                        countryPerPage={countryPerPage}
                        allCountries={allCountries.length}
                        paginado={paginado}
                />
                   <SeachBar/> 
                </div>
                <div>
               {currentCountry?
               currentCountry.map((e,index)=>{
                    return (
                        <Fragment key={index}>

                        <Card city={e.name} image={e.img} continente={e.continente}  />
                        </Fragment>
                        )
                
               })
               : console.log("cargandoooo....")
                }
            </div>
        </div>
    )
}