import { Link } from "react-router-dom";
import Header from "../../components/header";
import { CharacterWrapper } from "./styles";
import Footer from '../../components/footer'

import SerchSection from "../../components/serchSection";

function Character() {
     

     return (
          
          <CharacterWrapper>
               <Header />
               <SerchSection />
               <Link to={'/'}>Home</Link>
               <Footer />
          </CharacterWrapper>
     );
}

export default Character;