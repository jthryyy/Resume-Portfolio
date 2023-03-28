import "../App.css";
import portrait from "../Images/meAndHop.jpeg";
import { Insta, LinkedIn, Github, Back } from "../Icons";
import type { Generic } from "../types";

export const About = (props: Generic): JSX.Element => {
  return (
    <div
      className="moveUp"
      style={{
        backgroundColor: "#679A99",
        height: "13rem",
        marginTop: "1.5rem",
        borderRadius: "3rem 3rem 0rem 0rem",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        fontSize: "1.6rem",
        color: "black",
        padding: "2rem",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{ marginLeft: "1.2rem", marginBottom: "0.8rem" }}
          className="moveLeft"
        >
          <Back onClick={props.onClick} />
        </div>
        <a
          href="https://www.instagram.com/hopiathefloof/"
          className="moveLeft"
          aria-label="InstaLink"
        >
          <div className="socialMed">
            <Insta />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jethary-rader-5ab428153/"
          className="moveLeft"
          aria-label="LinkedInLink"
        >
          <div className="socialMed">
            <LinkedIn />
          </div>
        </a>
        <a
          href="https://github.com/jthryyy"
          className="moveLeft"
          aria-label="GithubLink"
        >
          <div className="socialMed">
            <Github />
          </div>
        </a>
      </div>
      <div
        style={{ margin: "0 2rem", alignSelf: "center" }}
        className="moveDown"
      >
        <img
          alt="portrait"
          src={portrait}
          width="170px"
          style={{
            borderRadius: "3rem",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "10rem", marginTop: "1rem" }}>
          <div
            className="typewriter moveUp"
            style={{
              width: "11rem",
              fontSize: "1.6rem",
              display: "flex",
              fontWeight: 600,
              cursor: "default",
            }}
          >
            <div>hi, I`m jet!</div>
          </div>
        </div>
        <div
          className="moveDown"
          style={{ marginTop: "2rem", fontSize: "1.2rem" }}
        >
          I am a developer who enjoys making clean, user-friendly, beautiful UI.
        </div>
        <div
          className="moveUp"
          style={{ marginTop: "1rem", fontSize: "1.2rem" }}
        >
          Reach out if you want to talk about code or my dog, Hopia.
        </div>
      </div>
    </div>
  );
};
