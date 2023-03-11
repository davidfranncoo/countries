const intialState={
    countries:[],
    suportCountries:[],
    nameCounties:[],
    details:[]
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
            return{
                ...state,
                countries:[action.payload]
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