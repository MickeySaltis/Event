// import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Nav from './components/header/Nav';
import Home from "./components/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Categories from "./components/event/categorie/Categories";
import EvenementsParDate from './components/event/evenement/EvenementsParDate';
import EvenementNew from './components/event/evenement/EvenementNew';

// --------------------------------
// import axios from "axios";

// if (window.location.origin === "http://localhost:3000") {
//   axios.defaults.baseURL = "http://127.0.0.1:8000";
// } else {
//   axios.defaults.baseURL = window.location.origin;
// }

class App extends Component {
  render() 
  {
    return (
      <div>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/evenementdujour" element={<EvenementsParDate />} />
            <Route path="/evenementnouveau" element={<EvenementNew />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
