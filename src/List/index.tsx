import { Back } from "../Icons";
import { Generic } from "../types";
import { Bee } from "./Bee";
import { Cert } from "./Cert";
import { OpentronsS } from "./OpentronsS";
import { OpentronsSw } from "./OpentronsSw";
import { Publication } from "./Publication";

export const List = (props: Generic): JSX.Element => {
  const items = {
    className: "menuItems",
    onClick: props.onClick,
  };
  return (
    <div style={{ flexDirection: "row" }}>
      <Back onClick={props.onClick} />
      <div id="sw">
        <OpentronsSw onClick={props.onClick} />
      </div>
      <div id="science">
        <OpentronsS onClick={props.onClick} />
      </div>

      <div id="bee">
        <Bee onClick={props.onClick} />
      </div>

      <div id="hawaii">software</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div id="pub" style={{ width: "60%" }}>
          <Publication onClick={props.onClick} />
        </div>

        <div id="education" style={{ width: "40%" }}>
          <Cert />
        </div>
      </div>
      <div id="AboutMe" style={{ width: "30rem", backgroundColor: "black" }}>
        software
      </div>
    </div>
  );
};
