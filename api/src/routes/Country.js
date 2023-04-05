const { Op } = require("sequelize");
const { Router } = require("express");
const { Activity, Country } = require("../db");
// const axios = require("axios");
const router = Router();

    
router.get("/",async(req,res)=>{

       //?---traemos la informacion de la API
       const {name}=req.query;// en caso que recibamos el nombre
       console.log("naaaa",name)
       const dataBase=await Country.findAll(
            {
            include: [{ model: Activity }],
        })

       //? SI recibimos el el name por query 
            if(name){
              
                const allCountries = await Country.findAll({
                    where: { name: { [Op.iLike]: `%${name}%` }
                 }})
                    // console.log("11111",allCountries)
            // const nameDb=await dataBase.find((e)=>e.name===name)
                if(allCountries) return res.status(200).json(allCountries);
                
                return res.status(400).send("no existe ciudad con este nombre")
            }
        //?SI esta vacia la Db
            if(dataBase.length===0){
             try{
                //?guardamos la informacion,de la API en la DB
                
        return res.status(200).send("no esta cargada la abse de datps")     
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