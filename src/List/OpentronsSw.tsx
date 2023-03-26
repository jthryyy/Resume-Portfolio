import React from "react";
import "../App.css";
import { Back, Location } from "../Icons";
import { useInterval } from "../Utils/useInterval";
import { Reveal } from "../Utils/Reveal";
import type { Generic } from "../types";

window.addEventListener("scroll", Reveal);

export const OpentronsSw = (props: Generic): JSX.Element => {
  const [page, setPage] = React.useState<number>(0);
  useInterval(() => {
    if (page === 3) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  }, 3000);

  let setting: JSX.Element = (
    <div className="moveUp" style={{ fontSize: "8rem", textAlign: "center" }}>
      Hello World
    </div>
  );
  if (page === 1) {
    setting = (
      <>
        <div className="moveUp" style={{ fontSize: "1.6rem", padding: "1rem" }}>
          Software Engineer, Opentrons Labworks
        </div>
        <div
          className="moveDown"
          style={{ fontSize: "1.6rem", padding: "1rem" }}
        >
          July 2021 - Present
        </div>
        <div className="moveUp" style={{ fontSize: "1.6rem", padding: "1rem" }}>
          Stuff about the Desktop App for OT-2 and Opentrons Flex
        </div>
      </>
    );
  } else if (page === 2) {
    setting = (
      <div className="moveUp" style={{ fontSize: "1.6rem", padding: "1rem" }}>
        Stuff about Protocol Designer
      </div>
    );
  } else if (page === 3) {
    setting = (
      <div className="moveDown" style={{ fontSize: "1.6rem", padding: "1rem" }}>
        Stuff about modules: Heater-Shaker GEN1 and Thermocycler GEN2
      </div>
    );
  }

  return (
    <div
      className="moveUp osw"
      style={{
        flexDirection: "column",
        margin: "1.5rem 2.5rem",
        borderRadius: "3rem",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        fontSize: "1.6rem",
        color: "black",
        height: "30rem",
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
          className="moveDown"
          style={{
            flexDirection: "row",
            width: "20rem",
            display: "flex",
            backgroundColor: "lightgray",
            padding: "0.5rem",
            borderRadius: "2rem",
            color: "black",
            transform: "rotate(270deg)",
            position: "absolute",
            top: "13rem",
            left: "-7.8rem",
          }}
        >
          <Location />
          <div style={{ marginLeft: "4px", marginBottom: "2px" }}>
            New York City, New York
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "19rem",
          width: "29.2rem",
          position: "absolute",
          left: "18.2rem",
          color: "white",
          top: "5.5rem",
        }}
      >
        {setting}
      </div>
    </div>
  );
};
