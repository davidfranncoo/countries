import React from "react";
import "./Paginado.css"

export default function Paginado({allCountries,countryPerPage, paginado}){


       //aca estaran los numerp de las pagina 
       const pageNumbers=[]
      
       for (let i=0; i< Math.ceil(allCountries/countryPerPage); i++){
           pageNumbers.push(i+1)
       }
       //pregunto si hay paginas, si haho click al numero de pagina, me inca cual es
       return (
           <nav>
           <ul className="paginado">
               {pageNumbers &&
               pageNumbers.map(number=>(
                   <div  key={number}>
                       <button className="number" onClick={() =>paginado(number)}>{number}</button>
                   </div>
            ))}
           </ul>
       </nav>
   )
}