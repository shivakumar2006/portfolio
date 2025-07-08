import React from "react"; 
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Shiva from "./pages/Shiva";
import Ajay from "./pages/Ajay";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/shiva/portfolio" element={<Shiva />}/>
                <Route path="/ajay/portfolio" element={<Ajay />}/>
            </Routes>
        </>
    )
}

export default App;