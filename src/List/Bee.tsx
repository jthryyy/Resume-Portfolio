import "../App.css";
import { Back, Location } from "../Icons";
import { Reveal } from "../Utils/Reveal";
import type { Generic } from "../types";

window.addEventListener("scroll", Reveal);

export const Bee = (props: Generic): JSX.Element => {
  return (
    <div
      className="moveUp"
      style={{
        flexDirection: "column",
        backgroundColor: "#6C97C4",
        height: "28rem",
        margin: "1.5rem 2.5rem",
        borderRadius: "3rem",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        fontSize: "1.2rem",
        color: "black",
        width: "65rem",
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
            className="moveDown"
            style={{
              flexDirection: "row",
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
          <ul style={{ width: "50%", overflow: "scroll" }} className="moveDown">
            <li style={{ marginBottom: "1rem" }}>
              Troubleshooted and analyzed molecular protocols (i.e. mRNA
              extraction, Tag-seq, single cell-seq) adding over a thousand
              unique bee sequences to the lab`s genetic library
            </li>
            <li>
              Advised undergraduate and graduate students in molecular
              protocols, including time at Mpala Research Centre in Nairobi,
              Kenya where I mentored students to sequence over 5 million
              bacterial reads from rhino fecal matter
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
