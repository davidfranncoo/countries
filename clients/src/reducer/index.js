const intialState={
    countries:[],
    suportCountries:[],
    nameCounties:[],
    details:[],
    allActivity:[]
}
export default function rootRecuducer(state=intialState,action){

    switch(action.type){
        case "GET_COUNTRIES":
            return {
                ...state,
                countries:action.payload,
                suportCountries:action.payload,
                nameCounties:action.payload
            }
         
        case "COUNTRY_BY_NAME":
            console.log("reducerrrr",action.payload)
            return{
                ...state,
                countries:action.payload
            }

        case "ORDER_BY_NAME":
            const country2=state.countries;
            const orderCountry= action.payload==="asc"?
            country2.sort((a,b)=>{

                if(a.name<b.name)return -1;
                if(a.name>b.name)return 1;
                return 0;
            }):
            country2.sort((a,b)=>{
                if(a.name>b.name)return -1;
                if(a.name<b.name)return 1;
                return 0;
            })
            return {
                ...state,
                countries:orderCountry
            }
            
        case "FILTER_BY_CONTINENT":
            const continent=state.suportCountries;
            const filter=action.payload==="all"?
            continent:
            continent.filter((e)=>e.continente===action.payload)
            return {
                ...state,
                countries:filter
            }
        case "POST_ACTIVITY":
            return{
                ...state,
            }

        case "ONE_DETAILS":
            return{
                ...state,
                details:action.payload
            }
        case "ORDER_BY_SCORES":
            const Score=state.countries;
            const filter2=action.payload==="asce"?
            Score.sort((a,b)=>{

                if(a.poblacion<b.poblacion)return -1;
                if(a.poblacion>b.poblacion)return 1;
                return 0;
            }):
            Score.sort((a,b)=>{
                if(a.poblacion>b.poblacion)return -1;
                if(a.poblacion<b.poblacion)return 1;
                return 0;
            })
            
            return{
                ...state,
                countries:filter2
            }


            case "ALL_ACTIVITY":
                const allACtiviti=action.payload
                return{ 
                    ...state,
                    allActivity:allACtiviti
                }

            case "FILTER_ACTIVITY":
                const countriAll=state.suportCountries
               
                console.log("action.payload",action.payload)
                const filtroActividad=  action.payload==="all"?
                countriAll.filter((e)=>e.Activities.length>0):
                countriAll.filter((e)=>{
                    return e.Activities.find((c)=>c.name===action.payload)})
                    
                  
             
                // action.payload==="all"?
                //     countriAll.filter((e)=>e.Activities)
                //     :
                //     countriAll.filter((e)=>{e.Activities
                    
                //   &&
                //   e.Activities.map((a)=>a.name===action.payload)
                //   //.include(action.payload)
                //   //.includes(action.payload)
                    
                        

         
            
            // const countriesAll = state.allCountries;
            // const filterActivities =
            //   action.payload === "All"
            //     ? countriesAll.filter((c) => c.activities)
            //     : countriesAll.filter(
                //         (c) =>
                //           c.activities &&
                //           c.activities.map((a) => a.name).includes(action.payload)
                //     //       );
                //     const filterActivities=action.payload
                //    console.log("filete de reducer", filterActivities)
                console.log("fillltro",filtroActividad)
                return {
                    ...state,
                    countries:filtroActividad
                    
                    
                    
                };
               
                default: 
                return state;
            }
    }
    

/*area
: 
"12173"
capital
: 
"{Stanley}"
continente
: 
"South America"
createdAt
: 
"2023-03-09T20:57:11.230Z"
id
: 
"FLK"
img
: 
"https://flagcdn.com/fk.svg"
name
: 
"Falkland Islands"
poblacion
: 
"2563"
subregion
: 
"South America"
updatedAt
: 
"2023-03-09T20:57:11.230Z" */