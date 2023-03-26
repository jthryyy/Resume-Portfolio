import React from "react";
import "./StyleSheets/OpentronsS.scss";
import "../App.css";
import { Back, Location } from "../Icons";
import { Reveal } from "../Utils/Reveal";
import type { Generic } from "../types";

window.addEventListener("scroll", Reveal);

export const OpentronsS = (props: Generic): JSX.Element => {
  const [fill, setFill] = React.useState<boolean>(false);
  const [fill2, setFill2] = React.useState<boolean>(false);
  const [fill3, setFill3] = React.useState<boolean>(false);

  return (
    <div
      className="moveUp"
      style={{
        backgroundColor: "#f1d7d8",
        height: "38rem",
        margin: "2.5rem 2.5rem",
        borderRadius: "3rem",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        fontSize: "1.6rem",
        color: "black",
      }}
    >
      <div
        className="container reveal"
        style={{
          padding: "2rem",
          flexDirection: "row",
          display: "flex",
          gridGap: "1rem",
          zIndex: 100,
          position: "absolute",
        }}
      >
        <div className="moveLeft" style={{ marginTop: "2px" }}>
          <Back onClick={props.onClick} />
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            width: "60%",
          }}
        >
          <div className="moveUp">
            Senior Researcher and Research Tech, Opentrons Labworks
          </div>
          <div
            className="moveDown"
            style={{
              flexDirection: "row",
              width: "20rem",
              display: "flex",
              backgroundColor: "lightgray",
              padding: "0.5rem",
              borderRadius: "2rem",
              color: "black",
              marginTop: "1rem",
            }}
          >
            <Location />
            <div style={{ marginLeft: "4px", marginBottom: "2px" }}>
              New York City, New York
            </div>
          </div>
          <div className="moveUp" style={{ marginTop: "1rem" }}>
            October 2019 - July 2021
          </div>
          <ul style={{ width: "80%", overflow: "scroll" }} className="moveDown">
            <li style={{ marginBottom: "1rem" }}>
              Collected extensive extraction data and validated numerous kits
              across 8 manufacturers, leading to several publications, a live
              webinar and outperforming competitor standards
            </li>
            <li>
              Supported 36 different labs with over 360 robots as a science
              consultant during the first year of the COVID-19 pandemic,
              generating record breaking quarterly revenue, three quarters in a
              row
            </li>
          </ul>
        </div>
      </div>
      <div
        className="moveDown container reveal"
        style={{
          fontSize: "1.2rem",
          top: "7rem",
          right: "10rem",
          position: "absolute",
          zIndex: 5,
        }}
      >
        Click to fill up the beakers!
      </div>
      <div
        className="container reveal"
        style={{
          width: "100%",
          height: "100%",
          zIndex: 100,
          position: "absolute",
          right: "-45rem",
          top: "10rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div id="beaker" className="moveUp">
          <div id="liquid">
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
          </div>
          <div id="beaker2" className="moveUp">
            <div id="liquid2">
              <div className="bubble bubble3"></div>
              <div className="bubble bubble4"></div>
            </div>
          </div>
          <div id="beaker3" className="moveUp">
            <div id="liquid3">
              <div className="bubble bubble5"></div>
              <div className="bubble bubble6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
