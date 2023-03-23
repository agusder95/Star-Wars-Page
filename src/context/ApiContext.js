import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../constants";


/* Crear bajada de API con dato entrada, cte importada y Axios */

const ApiContext = createContext({});

export const ApiContextProvider = ({children,data}) => {
     const [apiData, setApiData] = useState([])
     
     

     const getData = async() =>{
          const response = await axios (`${API_URL}${data}`)
          setApiData(response.data.results)
     }
     
     useEffect(()=>{
          getData()
     },[])

     return(
          <ApiContext.Provider value={{
               apiData,
               setApiData
          }}>
               {children}
          </ApiContext.Provider>
     )
}

export default ApiContext;