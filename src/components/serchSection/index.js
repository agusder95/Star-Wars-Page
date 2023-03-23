import { useEffect, useState } from "react";
import { Direction } from "../../constants/Directions";
import SerchApi from "../../constants/SerchApi";
import Button from "../button";


import { ButtonContainer, LI, SerchSectionWrapper, UL } from "./styles";

function SerchSection() {
     
     const[url, setUrl] = useState(Direction.people)
     const [names, setNames] = useState([])
     const [data] = SerchApi(url)

     const carga = () =>{
          setNames(data.results)
          console.log(data.next)
     }

     useEffect(()=>{
          carga()
     })
     
     return (
          <SerchSectionWrapper>
               <UL>
                    {
                         !names?'Cargando...':
                         names.flatMap((item, index)=>(
                              <LI key={index}>
                                   <p> {item.name} </p>
                              </LI>
                         ))
                    }
               </UL>
               <ButtonContainer>
                    <Button action={()=>{
                         if(data.previous != null){
                              setUrl(data.previous)
                         }
                    }} text={'Previous'} />

                    <Button action={()=>{
                         if(data.next != null){
                              setUrl(data.next)
                         }
                    }} text={'Next'} />
               </ButtonContainer>
          </SerchSectionWrapper>
     );
}

export default SerchSection;