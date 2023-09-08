// import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
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
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
