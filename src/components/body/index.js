import { Link } from "react-router-dom";
import Button from "../button";
import { BodyWrapper } from "./styles";

function Body() {
     return (
          <BodyWrapper>
               <Link to={'characters'}>
                    <Button text={'Characters'} />
               </Link>

               <Link to={'worlds'}>
                    <Button text={'Worlds'} />
               </Link>

               <Link to={'ships'}>
                    <Button text={'Ships'} />
               </Link>
          </BodyWrapper>
     );
}

export default Body;