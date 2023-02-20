import { Route, Routes } from "react-router-dom";
import { AppWrapper } from "./AppStyle";
import Characters from "./Routes/Characters";
import Home from "./Routes/Home";



function App() {
  return (
    <AppWrapper>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />} />

        
      </Routes>
    </AppWrapper>    
  );
}

export default App;
