import { About } from "./About";
import { Bee } from "./Bee";
import { Cert } from "./Cert";
import { OpentronsS } from "./OpentronsS";
import { OpentronsSw } from "./OpentronsSw";
import { Publication } from "./Publication";
import type { Generic } from "../types";
import { Hawaii } from "./Hawaii";

export const List = (props: Generic): JSX.Element => {
  return (
    <div
      style={{
        flexDirection: "row",

        justifyContent: "center",
      }}
    >
      <div id="sw">
        <OpentronsSw onClick={props.onClick} />
      </div>
      <div id="science">
        <OpentronsS onClick={props.onClick} />
      </div>
      <div id="bee">
        <Bee onClick={props.onClick} />
      </div>

      <div id="hawaii">
        <Hawaii onClick={props.onClick} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div id="pub" style={{ width: "65%" }}>
          <Publication onClick={props.onClick} />
        </div>

        <div id="education" style={{ width: "35%" }}>
          <Cert />
        </div>
      </div>
      <div id="AboutMe">
        <About onClick={props.onClick} />
      </div>
    </div>
  );
};
