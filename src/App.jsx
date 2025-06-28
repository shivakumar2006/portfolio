import React from "react"; 
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Shiva from "./pages/Shiva";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/shiva/portfolio" element={<Shiva />}/>
            </Routes>
        </>
    )
}

export default App;