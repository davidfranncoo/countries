import axios  from "axios"


export function getCountries(){
return async function(dispatch){
    const json= await axios("/countries")
    return dispatch({
        type:"GET_COUNTRIES",
        payload:json.data
       })
}   

}
export function getCountryByName(name){
  
return async function (dispatch){
    try {
         const json= await axios.get("/countries?name="+ name)
    return dispatch({
        type:"COUNTRY_BY_NAME",
        payload:json.data
    })
    } catch (error) {
        return error;
    }
   
}
}
export function getOrderAbc(payload){

        return {
            type:"ORDER_BY_NAME",
            payload
        }       
}
   
export function getFilterByContinent(payload){

    return {
        type:"FILTER_BY_CONTINENT",
        payload,
    }}

//? Agregar activad nueva
export function postActivity(payload){
    return async function(dispatch){

        const response= await axios.post("/activities",payload)
        
        return dispatch({
            type:"POST_ACTIVITY",
            response,
        })
    }
}
export function getDetails(id){
    return async function(dispatch){
        const getDetails=await axios.get("/countries/"+ id)
        return dispatch ({
            type: "ONE_DETAILS",
            payload:getDetails.data,
        })
    }
}
export function getOrderbyCore(payload){
    return{
        type: "ORDER_BY_SCORES",
        payload,
    }}
export function getAllActivity(){
    return async function (dispatch){
        const allActi=await axios("/activities")
    
        return dispatch({
            type:"ALL_ACTIVITY",
        payload:allActi.data
        })
    }
}
export function  filterActivity(payload){


    return {
        type: "FILTER_ACTIVITY",
        payload,
        
    }
}
