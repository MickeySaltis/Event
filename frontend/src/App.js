// import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login";
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
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
