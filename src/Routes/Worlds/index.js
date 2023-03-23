import { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SerchSection from "../../components/serchSection";
import { ApiContextProvider } from "../../context/ApiContext";
import DirectionContext from "../../constants/Directions";
import { WorldWrapper } from "./styles";

function Wolds() {

     return (
          <ApiContextProvider data = {direction} >
               <WorldWrapper>
                    <Header />
                    <SerchSection />
                    <Link to={'/'}>Home</Link>
                    <Footer />
               </WorldWrapper>
          </ApiContextProvider>
     );
}

export default Wolds;