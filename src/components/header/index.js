import Images from "../images";
import { H1, HeaderWrapper, ImgCountainer } from "./styles";

import Banner from '../../styles/pictures/Star_Wars_Logo.svg.png'


function Header() {
     return (
          <HeaderWrapper>
               <ImgCountainer>
                    <Images src={Banner} alt ={'Banner'} />
               </ImgCountainer>

               <H1> Guia Completa </H1>
          </HeaderWrapper>
     );
}

export default Header;