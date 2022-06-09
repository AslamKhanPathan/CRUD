import * as React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
 
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Login } from "./Login";
import { Registation } from "./Registaion";
import { Services } from "./Services";
import "../Project/allcssproject/nav.css";


function Routing() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div className="bottonclick" style={{ width: "90%" }}></div>
        <div id="click" className="bottonclick" style={{ width: "10%" }}>
          botton
        </div>
      </div>

      <nav id="nav" className="navigationcss">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <Link to="/Services" className="link">
          Services
        </Link>
        <Link to="/about" className="link">
          about
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/registation" className="link">
          registation
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registation" element={<Registation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

