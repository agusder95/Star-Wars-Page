import { Route, RouterProvider, Routes } from "react-router-dom";
import { AppWrapper } from "./AppStyle";

import Character from "./Routes/Characters";
import Home from "./Routes/Home";



function App() {
  return (

      <AppWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='character' element={<Character />} />
          
        </Routes>
      </AppWrapper>

    
  );
}

export default App;
