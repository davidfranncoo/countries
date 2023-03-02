const intialState={
    countries:[]
}
export default function rootRecuducer(state=intialState,action){

    switch(action.type){
        case "GET_COUNTRIES":
            return {
                ...state,
                countries:action.payload
            }
            default:
                return state;
    }
    
}