import { Back } from "../Icons";
import { Generic } from "../types";
import { Bee } from "./Bee";

export const List = (props: Generic): JSX.Element => {
  const items = {
    className: "menuItems",
    onClick: props.onClick,
  };
  return (
    <div style={{ flexDirection: "row" }}>
      <Back onClick={props.onClick} />
      <div id="sw" style={{ width: "30rem", backgroundColor: "black" }}>
        software
      </div>
      <div id="science">software</div>

      <div id="bee">
        <Bee onClick={props.onClick} />
      </div>

      <div id="hawaii">software</div>

      <div id="pub">software</div>

      <div id="education">software</div>

      <div id="AboutMe" style={{ width: "30rem", backgroundColor: "black" }}>
        software
      </div>
    </div>
  );
};
