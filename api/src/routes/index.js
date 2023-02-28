const { Router } = require('express');
const{default:axios}=require("axios");
const {Country, Activity} = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const getCountries=async()=>{
const countries= await axios("https://restcountries.com/v3/all");

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
    capital:e.capital,
    //array de un string
    subregion:e.continents[0],
    //recibe number
    area:e.area,
    //recibe number
    poblacion:e.population   
}})        
//?guardamos la informacion,de la API en la DB
//const updateDb = await Country.bulkCreate(order);

return order;
}

router.get("/countries",async(req,res)=>{
   //?---traemos la informacion de la API
   const infoApi=await getCountries();
   const {name}=req.query;
   const dataBase=await Country.findAll()
        if(name){
            const dataBase=await Country.findAll();
            const nameDb=await dataBase.find((e)=>e.name===name)
            if(nameDb) return res.status(200).json(nameDb);
            return res.status(400).send("no existe ciudad con este nombre")
        }
        if(dataBase.length===0){
         try{
            //?guardamos la informacion,de la API en la DB
            const updateDb = await Country.bulkCreate(infoApi);
            //? aca busc por query
    return res.status(200).json(updateDb)     
        } catch (error) {
             console.log("error")
        }}else{
    return  res.status(200).json(dataBase);
        }})

router.get("/countries/:id", async(req,res)=>{
    const {id}=req.params;
    const t=await Country.findAll()
     console.log(t)
    try {
   const city = t.find((e)=>e.id===id)
        if (!city ) { 
         return res.status(404).json({ message: 'Receta no encontrada' });
        }
       const cityDetails = {
         id: city .id,
         name: city .name,
         image: city .image,
         continente:city.continente,
         capital:city.capital,
         subregion:city.subregion,
         area:city.area,
         poblacion:city.poblacion,
         //activities
        
       };
        return res.status(200).json(cityDetails);
      } catch (error) {
       
        return res.status(500).json({ message: 'Error interno del servidor' });
      }




})
router.post("/activities", async(req,res)=>{
    
    const {
        name,
        dificultad,
        duracion,
        temporada
    }=req.body;

        console.log(name)
        
if(name&&dificultad&&duracion&&temporada){
    Activity.findOrCreate({where:{
        name:name,
        dificultad:dificultad,
        duracion:duracion,
        temporada:temporada,
    }})
    return res.status(200).send("la Avtividad fue creada adecuadamente")
}
return res.status(400).send("faltan datos")
})


router.get("/activities", async(req,res)=>{
const data=await Activity.findAll();
console.log(data)
const arreglo= await data.map((e)=>{
    return {
        name:e.name,
        dificultad:e.dificultad,
        duracion:e.duracion,
        remporada:e.temporada}
})
console.log(arreglo)
return res.status(200).json(arreglo)
})
    

module.exports = router;



