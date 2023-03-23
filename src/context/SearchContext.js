//for change in dates and other thing inside single hotel page
import { createContext, useReducer } from "react";
const INITIAL_STATE={
    city:undefined,
    dates:[],
    options:{
        adult:undefined,
        room:undefined,
        children:undefined
    },
};

export const SearchContext =createContext(INITIAL_STATE)

const searchReducer=(state,action)=>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE
        default:
            return state;
    }
}

export const SearchContextProvider=({children})=>{
    const [state,dispatch]=useReducer(searchReducer,INITIAL_STATE);
    return(
        <SearchContext.Provider value={{city:state.city,dates:state.dates,options:state.options,dispatch}}>
            {children}
        </SearchContext.Provider>
    )
}
//chere children are component


//these will be needed in main page search,search inside hotel and inside single hotel page