import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../button";
import { BodyWrapper } from "./styles";

function Body() {


     return (
          <BodyWrapper>
               <Link to={'character'}>
                    <Button text='Characters'  />
               </Link>

               
                    
                    
          </BodyWrapper>

     );
}

export default Body;