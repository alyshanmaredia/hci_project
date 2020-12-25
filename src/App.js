import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavLink} from "reactstrap";
import Homepage from "./Homepage/Homepage";
import SignLanguage from "./SignLanguage/SignLanguage";
import ObjectDetection from "./ObjectDetection/ObjectDetection";
import Chatbot from "./Chatbot/Chatbot";

export default function App() {
  return (
    <div className="App">
       <Navbar className="navbar">
          <div className="container">
            <NavbarBrand href="/home">SMART DETECTOR</NavbarBrand>
            <Nav className="mr-auto">
            <NavLink href="/home">Home</NavLink>
            </Nav>
            <Nav>
              <NavLink href="">Contact</NavLink>
              <NavLink eventKey={2} href="#aboutus">
                About Us
              </NavLink>
            </Nav>
          </div>
      </Navbar>
      <Router>
        <Route exact path="/home" component={Homepage} />
        <Route path="/SignLanguage" component={SignLanguage} />
        <Route path="/ObjectDetection" component={ObjectDetection} />
        <Route path="/Chatbot" component={Chatbot} />
      </Router>
    </div>
  );
}
