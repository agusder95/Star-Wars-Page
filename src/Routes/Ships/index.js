import { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SerchSection from "../../components/serchSection";
import { ApiContextProvider } from "../../context/ApiContext";
import DirectionContext from "../../constants/Directions";
import { ShipsWrapper } from "./styles";

function Ships() {
     return (
          <ApiContextProvider data = {direction}>
               <ShipsWrapper>
                    <Header />
                    <SerchSection />
                    <Link to={'/'}>Home</Link>
                    <Footer />
               </ShipsWrapper>
          </ApiContextProvider>               
     );
}

export default Ships;