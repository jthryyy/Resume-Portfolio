import "../App.css";
import "./StyleSheets/Publication.css";
import { Back } from "../Icons";
import { Reveal } from "../Utils/Reveal";
import type { Generic } from "../types";

window.addEventListener("scroll", Reveal);

export const Publication = (props: Generic): JSX.Element => {
  return (
    <div
      className="moveUp"
      style={{
        flexDirection: "column",
        backgroundColor: "#EFAA94",
        height: "33rem",
        margin: "1.5rem",
        borderRadius: "3rem",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        fontSize: "1.6rem",
        color: "black",
        width: "44rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="moveLeft" style={{ padding: "2rem 2rem 1rem" }}>
        <Back onClick={props.onClick} />
      </div>
      <div id="container" aria-label="book">
        <div id="page-flip">
          <div id="r1">
            <div id="p1">
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div id="p2">
            <div></div>
          </div>
          <div id="r3">
            <div id="p3">
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="s">
            <div id="s3">
              <div id="sp3"></div>
            </div>
          </div>
          <div className="s" id="s4">
            <div id="s2">
              <div id="sp2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
