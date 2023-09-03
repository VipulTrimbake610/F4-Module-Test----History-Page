
import Navbar from "./Components/Navbar/Navbar";
import History from "./Components/History/History";
import Home from "./Components/Home/Home";
import { Routes,Route } from "react-router-dom";
import Details from "./Components/Details/Details";
import { useState } from "react";


function App() {
  let [linkValue, setLinkValue] = useState("");
  return (
   <>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/history" element={<History setLinkValue={setLinkValue}/>}/>
      <Route path={"/word/"+linkValue} element={<Details linkValue={linkValue}/>}/>
      <Route/> 
    </Routes>
    {/* <Home/> */}
   </>
  );
}

export default App;
