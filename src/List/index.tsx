import { About } from "./About";
import { Bee } from "./Bee";
import { Cert } from "./Cert";
import { OpentronsS } from "./OpentronsS";
import { Hawaii } from "./Hawaii";
import { OpentronsSw } from "./OpentronsSw";
import { Publication } from "./Publication";
import type { Generic } from "../types";

export const List = (props: Generic): JSX.Element => {
  const oneHundredPercent = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div id="sw" style={oneHundredPercent}>
        <OpentronsSw onClick={props.onClick} />
      </div>
      <div id="science" style={oneHundredPercent}>
        <OpentronsS onClick={props.onClick} />
      </div>
      <div id="bee" style={oneHundredPercent}>
        <Bee onClick={props.onClick} />
      </div>

      <div id="hawaii" style={oneHundredPercent}>
        <Hawaii onClick={props.onClick} />
      </div>
      <div className="ListLayout">
        <div className="PublicationWidth">
          <Publication onClick={props.onClick} />
        </div>
        <div className="CertWidth">
          <Cert />
        </div>
      </div>
      <div id="AboutMe">
        <About onClick={props.onClick} />
      </div>
    </div>
  );
};
