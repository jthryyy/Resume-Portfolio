import "../App.css";
import { Back, Location } from "../Icons";
import { Reveal } from "../Utils/Reveal";
import type { Generic } from "../types";

window.addEventListener("scroll", Reveal);

export const Bee = (props: Generic): JSX.Element => {
  return (
    <div
      className="moveUp beeBack"
      style={{
        flexDirection: "column",
        backgroundColor: "#6C97C4",
        borderRadius: "3rem",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        fontSize: "1.2rem",
        color: "black",
        width: "95%",
        cursor: "default",
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
          <a href="#home">
            <Back onClick={props.onClick} />
          </a>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div className="moveUp">Lab Technician, Princeton University</div>
          <div
            className="moveDown location"
            style={{
              width: "15rem",
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
              Princeton, New Jersey
            </div>
          </div>
          <div className="moveUp" style={{ marginTop: "1rem" }}>
            October 2018 - October 2019
          </div>
          <ul
            style={{
              width: "50%",
              overflow: "scroll",
              height: "16rem",
              marginBottom: "1.5rem",
            }}
            className="moveDown"
          >
            <li style={{ marginBottom: "1rem" }}>
              Analyzed and troubleshot various molecular protocols, such as mRNA
              extraction, Tag-seq, and single cell-seq, resulting in the
              successful addition of over a thousand unique bee sequences to the
              lab`s genetic library
            </li>
            <li>
              Mentored undergraduate and graduate students in molecular
              protocols, including leading a group at Mpala Research Centre in
              Nairobi, Kenya, where we sequenced over 5 million bacterial reads
              from rhino fecal matter and analyzed the resulting data
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="wrap2" aria-label="bee">
          <div className="body"></div>
          <div className="wing1"></div>
          <div className="wing2"></div>
          <div className="stinger"></div>
          <div className="eyes">
            <div className="pupil"></div>
          </div>
        </div>
        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>
      </div>
    </div>
  );
};
