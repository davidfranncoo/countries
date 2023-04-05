const axios = require("axios")
const {Country}=require("../db")

const getApiData = async () => {
    const countries= await axios("https://restcountries.com/v3/all");
    console.log("coun",countries.data[0].name.common)
    
    
    const order=await countries.data.map((e)=>{
        return{
            //traiga strong que es la abreviacion
            id:e.cca3, 
            //string
        name:e.name.common,
        //recibe array con 2 string
        img:e.flags[0],
        //array de un string
        continente:e.continents[0],
        //array de un string
        capital:e.capital ? e.capital[0] : "no tiene capital",
        //array de un string
        subregion:e.continents[0],
        //recibe number
        area:e.area,
        //recibe number
        poblacion:e.population   
    }})        
    
    
        //?guardamos la informacion,de la API en la DB
        //const updateDb = await Country.bulkCreate(order);
 


   await order.map((e)=> Country.create(e))
}

module.exports= getApiData;