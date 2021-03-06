import React from "react";
import "./WebPage.css";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mypics from "./Asset/mypics.jpeg";

const WebPage = ({ theme, onclick, condition, onshow }) => {
  return (
    <div className="container">
      <div className="li_Div">
        <ul className="Ul">
          <li className="mo">MO</li>
          <li>
            <i>
              <FontAwesomeIcon
                className="icon"
                onClick={onclick}
                style={{ color: "white" }}
                icon={faLightbulb}
              />
              <span className="clickme">Click me</span>
            </i>
          </li>
        </ul>
      </div>
      <div>
        <div className="welcomeNote-Div">
          <p className="welcomeNote">You are welcome to my Page</p>
        </div>
      </div>
      <div className="div_2">
        <div className="name_Div">
          <div className="imageContainer">
            <img src={mypics} alt="mypicture" className="myimage" />
          </div>
          <div className="name">
            <p className="olasode">Mubarak Olasode:MO</p>
          </div>
        </div>
        <div class="href_Div">
          <div className="sub_href">
            <p className="a" onClick={onshow}>
              My Profile
            </p>
            <a className="b" href="https://twitter.com/OlasodeM">
              Twitter
            </a>
            <a className="c" href="https://github.com/B-Alpha-com">
              Github
            </a>
            <a className="d" href="www.twitter.com">
              BlogPost
            </a>
            <a className="e" href="www.twitter.com">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPage;
