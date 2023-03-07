const intialState={
    countries:[],
    suportCountries:[],
    nameCounties:[]
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

            default:
                return state;
    }
    
}