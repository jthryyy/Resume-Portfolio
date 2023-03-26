import { Back, Location } from "../Icons";
import "../App.css";
import { Generic } from "../types";

export const Bee = (props: Generic): JSX.Element => {
  const items = {
    className: "menuItems",
    onClick: props.onClick,
  };
  return (
    <div
      style={{
        flexDirection: "column",
        backgroundColor: "#6C97C4",
        height: "30rem",
        margin: "1.5rem 2.5rem",
        borderRadius: "3rem",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        fontSize: "1.6rem",
        color: "lightgray",
      }}
    >
      <div
        style={{
          padding: "2rem",
          flexDirection: "row",
          display: "flex",
          gridGap: "1rem",
          zIndex: 100,
          position: "absolute",
        }}
      >
        <Back onClick={props.onClick} />
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            gridGap: "1rem",
          }}
        >
          <div>Lab Technician, Princeton University</div>
          <div
            style={{
              flexDirection: "row",
              width: "18rem",
              display: "flex",
              backgroundColor: "lightgray",
              padding: "0.5rem",
              borderRadius: "2rem",
              color: "black",
            }}
          >
            <Location />

            <div style={{ marginLeft: "4px", marginBottom: "2px" }}>
              Princeton, New Jersey
            </div>
          </div>
          <ul style={{ width: "50%" }}>
            <li>
              Troubleshooted and analyzed molecular protocols (i.e. mRNA
              extraction, Tag-seq, single cell-seq) adding over a thousand
              unique bee sequences to the lab's genetic library
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="wrap2">
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
