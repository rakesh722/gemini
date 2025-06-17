import { createContext } from "react";
import main from "../config/gemi";

export const Context = createContext();

const ContextProvider =(props)=>{

const onSent = async(prompt) =>{
   await main(prompt)

}
onSent("what is react")



    const contextValue ={

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvider
