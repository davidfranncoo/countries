const { Router } = require("express");
const { Activity, Country } = require("../db");

const router = Router();


router.post("/", async(req,res)=>{

    //recimos por parametro
     const {
         name,
         dificultad,
         duracion,
         temporada,
         countri //"countri" tiene dentro ids  
     }=req.body; 

     //validamos queesten los datos
    console.log("booooody", req.body)
    if(name&&dificultad&&duracion&&temporada&&countri){
        //creamos la actividad
           const createActivity=await  Activity.create(
                {
                   name:name,
                   dificultad:dificultad,
                   duracion:duracion,
                   temporada:temporada,
           })
           
    //buscamos todos los paises que tengas el id ingresado por body
    console.log("countri",createActivity)
            const findCountri= await Country.findAll({
                where:{
                    id:countri
                }
    })
    console.log("essssss",findCountri)
    //guarda en la tabla de  asociaciones 
             await createActivity.addCountries(findCountri)
            return res.status(200).send("la Avtividad fue creada adecuadamente")

}   return res.status(400).send("faltan datos")
})




router.get("/", async(req,res)=>{
// const data=await Activity.findAll({
//     include:[{
//         //para anilar JOIN junto con el modelo country
//         model:Country,
//         //atributos que van a incluir addCouentris
//         addCountries:["name","dificultad"]
//     }]
// });
const data = await Activity.findAll({
    include: [
      {
        model: Country,
        attributes: ['name'],
      },
    ],
  });
  

return res.status(200).json(data)
})
    

module.exports=router;
