import React from "react";
import "../App.css";
import background from "../Images/SpamBackground.jpeg";
import spam from "../Images/SpamFull.png";
import spam2 from "../Images/spam2.png";
import spam3 from "../Images/Spam3.png";
import spam4 from "../Images/Spam4.png";
import spam5 from "../Images/spam5.png";
import spam6 from "../Images/spam6.png";
import spam7 from "../Images/spam7.png";
import spam8 from "../Images/spam8.png";
import spam9 from "../Images/spam9.png";
import { Back, Location } from "../Icons";
import { Reveal } from "../Utils/Reveal";
import type { Generic } from "../types";

window.addEventListener("scroll", Reveal);

export const Hawaii = (props: Generic): JSX.Element => {
  const [eatMe, setEatMe] = React.useState<number>(0);
  let src: string = spam;
  if (eatMe === 1) {
    src = spam2;
  } else if (eatMe === 2) {
    src = spam3;
  } else if (eatMe === 3) {
    src = spam4;
  } else if (eatMe === 4) {
    src = spam5;
  } else if (eatMe === 5) {
    src = spam6;
  } else if (eatMe === 6) {
    src = spam7;
  } else if (eatMe === 7) {
    src = spam8;
  } else if (eatMe === 8) {
    src = spam9;
  }
  return (
    <div
      className="moveUp"
      style={{
        flexDirection: "row",
        backgroundColor: "#A89BC6",
        height: "25rem",
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
          <div className="moveUp">Group Leader, YMCA of Honolulu</div>
          <div
            className="moveDown"
            style={{
              flexDirection: "row",
              width: "12rem",
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
              Honolulu, Hawai`i
            </div>
          </div>
          <div className="moveUp" style={{ marginTop: "1rem" }}>
            May 2018 - August 2018
          </div>
          <ul style={{ overflow: "scroll" }} className="moveDown">
            <li>
              Directed and motivated 4th and 5th grade students, organizing
              daily educational activities to achieve a productive summer
            </li>
          </ul>
        </div>
        <div>
          <div style={{ position: "relative" }}>
            <img
              alt="background"
              src={background}
              width="500"
              height="300"
              style={{
                borderRadius: "3rem",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          <div
            aria-label={`spamContainer_${eatMe}`}
            className="moveDown"
            onClick={() => setEatMe(eatMe === 8 ? 0 : eatMe + 1)}
            style={{
              position: "absolute",
              top: "-4rem",
              zIndex: 100,
              cursor: eatMe === 8 ? "default" : "pointer",
            }}
          >
            <img
              src={src}
              alt={`Spam Masubi_${eatMe}`}
              width="500"
              height="500"
            />
          </div>
          {eatMe === 8 ? (
            <div
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "1.5rem",
                left: "25rem",
                zIndex: 10000,
              }}
              onClick={() => setEatMe(0)}
              className="thought moveUp"
            >
              Still hungry? Eat again!
            </div>
          ) : null}
          {eatMe === 0 ? (
            <div
              className="thought movedDown"
              style={{ position: "absolute", top: "1.5rem", left: "25rem" }}
            >
              Hungry? Click on the spam masubi to eat it!
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
