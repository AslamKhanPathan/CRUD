import * as React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Login } from "./Login";
import { Registation } from "./Registaion";
import { Services } from "./Services";
import "../Project/allcssproject/nav.css";
import { Navbarline } from "./Navbarline";

function Routing() {
  return (
    <BrowserRouter>
      <Navbarline />
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
