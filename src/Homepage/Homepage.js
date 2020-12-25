import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Choose() {
  return (
    <div className="Choose">
      <div className="container-fluid card-container">
        <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="sign-card-wrapper">
                <Link
                  to="/SignLanguage"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="sign-card">
                    <div className="sign-image"></div>
                    <h2>Hand Gesture Navigation</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="object-card-wrapper">
                <Link
                  to="/ObjectDetection"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="object-card">
                    <div className="object-image"></div>
                    <h2>Object Detection</h2>
                  </div>
                </Link>
              </div>
            </div>
              <div className="col-lg-4 col-sm-12 ">
              <div className="chat-card-wrapper">
                <Link
                  to="/Chatbot"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="chat-card">
                    <div className="chat-image"></div>
                    <h2>Chatbot</h2>
                  </div>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
