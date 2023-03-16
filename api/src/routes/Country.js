const { Router } = require("express");
const { Activity, Country } = require("../db");
const axios = require("axios");
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
    
 
    
router.get("/",async(req,res)=>{

       //?---traemos la informacion de la API
       const {name}=req.query;// en caso que recibamos el nombre
       const infoApi=await getCountries();
       const dataBase=await Country.findAll(
            {
            include: [{ model: Activity }],
        }
      )

       //? SI recibimos el el name por query 
            if(name){
                const dataBase=await Country.findAll(
                    {
                        include: [{ model: Activity }],
                  }
                  );
                const nameDb=await dataBase.find((e)=>e.name===name)
                if(nameDb) return res.status(200).json(nameDb);
                
                return res.status(400).send("no existe ciudad con este nombre")
            }
        //?SI esta vacia la Db
            if(dataBase.length===0){
             try{
                //?guardamos la informacion,de la API en la DB
                const updateDb = await Country.bulkCreate(infoApi);
                //? aca busc por query
        return res.status(200).json(updateDb)     
            } catch (error) {
                 return error;
            }}else{
        return  res.status(200).json(dataBase);
            }})




    
router.get("/:id", async(req,res)=>{
    //? buscamos por ID e incluimos la Activity
        const {id}=req.params;
        try {

             const getId=await Country.findByPk(id,{include:Activity})
             if(!getId){
                return res.status(400).send({error:"El Id no Existe"})
             }
             return res.status(200).json(getId)
            }catch (error){return error;}
    })
    module.exports=router;