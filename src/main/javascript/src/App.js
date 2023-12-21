import "./App.css";
import React from "react";
import Board from "./dnd/components/Board";
import Signup from "./components/Signup";
import {Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";

function App() {
    return (
        <Router>

        <Routes>
            <Route path="/signup" Component={Signup}/>
            <Route path="/login" Component={Login}/>
            <Route path="/board" Component={Board}/>
            <Route path="/" Component={Login}/>

        </Routes>
        </Router>


    );
}

export default App;
