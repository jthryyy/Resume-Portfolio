import { Generic } from "../types";

export const QuestionMenu = (props: Generic): JSX.Element => {
  const items = {
    className: "menuItems",
    onClick: props.onClick,
  };
  return (
    <div
      className="m"
      style={{
        whiteSpace: "nowrap",
        zIndex: 10,
        borderRadius: "4px 4px 0px 0px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        position: "absolute",
        backgroundColor: "white",
        flexDirection: "row",
        border: "3px solid #679A99",
      }}
    >
      <div {...items} aria-label="opentronsSw">
        <a href="#sw" className="text">
          Opentrons Software
        </a>
      </div>
      <div {...items}>
        <a href="#science" className="text">
          Opentrons Science
        </a>
      </div>
      <div {...items}>
        <a href="#bee" className="text">
          Princeton Lab
        </a>
      </div>
      <div {...items}>
        <a href="#hawaii" className="text">
          YMCA of Honolulu
        </a>
      </div>
      <div {...items}>
        <a href="#pub" className="text">
          Publications
        </a>
      </div>
      <div {...items}>
        <a href="#education" className="text">
          Education
        </a>
      </div>
      <div {...items}>
        <a href="#AboutMe" className="text">
          About me
        </a>
      </div>
      <div
        className="menuItems"
        onClick={() => console.log("download resume")}
        style={{ cursor: "pointer" }}
      >
        <div className="text">Resume</div>
      </div>
    </div>
  );
};
