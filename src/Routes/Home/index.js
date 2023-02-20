import Body from "../../components/body";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { HomeWrapper } from "./styles";

function Home() {
     return (
          <HomeWrapper>
               <Header />
               <Body />
               <Footer />
          </HomeWrapper>
     );
}

export default Home;