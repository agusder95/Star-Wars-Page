import axios from "axios"
import { useEffect, useState } from "react"

 const SerchApi = (url) =>{
     const [apiData, setApiData] = useState([])
     
     

     const getData = async()=>{
          try{
               const response = await axios (url)
               setApiData(response.data)
               
          
          }catch(error){
               console.error(error);
          }
     }

     useEffect(()=>{
          getData().then(()=>{
               console.log('Ok')
          })
     },[url])

     return [apiData]

}

export default SerchApi