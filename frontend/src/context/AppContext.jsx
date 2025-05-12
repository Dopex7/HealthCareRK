import { createContext } from "react";


// importimi i listes se doktorreve nga assets.js
import { doctors } from "../assets/assets";

//createContext  eshte nje funksion ne react qe na lejon te krijojm global state apo shared data 
// qe mund ti perdorim ne qfardo componenti
export const AppContext = createContext()

const AppContextProvider = (props)=> {

    const currencySymbol = '€'
    //data qe dota sharim ne komponente tjera
    const value = {
        doctors,currencySymbol
    }
    
    return (
        <AppContext.Provider value={value}>
            {/* Te gjithe komponentet children munen me perdor this data pa pater nevoj mi dergu si props gjithmon */}
            {props.children} 
        </AppContext.Provider>
    )
}

export default AppContextProvider