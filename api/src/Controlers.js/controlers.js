const axios = require("axios")
const {Country}=require("../db")

const getApiData = async () => {
    const countries= await axios("https://restcountries.com/v3/all");
    console.log("coun",countries.data[0])
    
//    await countries.data.map((e)=>{
//         let total={

//             //traiga strong que es la abreviacion
//             id:e.cca3, 
//             //string
//             name:e.name.common,
//             //recibe array con 2 string
//             img:e.flags[0],
//             //array de un string
//             continente:e.continents[0],
//             //array de un string
//             capital:e.capital,
//             //array de un string
//             subregion:e.continents[0],
//             //recibe number
//             area:e.area,
//             //recibe number
//             poblacion:e.population   
//         }
//         Country.findOrCreate({ where: total });
//         })        
        //?guardamos la informacion,de la API en la DB
        //const updateDb = await Country.bulkCreate(order);
   
}

module.exports= getApiData;