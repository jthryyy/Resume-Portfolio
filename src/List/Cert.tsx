import "../App.css";
import { Reveal } from "../Utils/Reveal";

window.addEventListener("scroll", Reveal);

export const Cert = (): JSX.Element => {
  return (
    <div
      className="moveDown certContainer"
      style={{
        flexDirection: "column",
        backgroundColor: "#f7d391",
        height: "24rem",
        borderRadius: "3rem",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        fontSize: "1.2rem",
        color: "black",
        cursor: "default",
        width: "21rem",
      }}
    >
      <div
        className="container reveal"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="moveDown" aria-label="star">
          <svg
            className="badge"
            height="200"
            width="200"
            viewBox="-40 -40 440 440"
          >
            <circle
              className="inner"
              fill="#F2D8D9"
              stroke="black"
              strokeWidth="3"
              cx="180"
              cy="180"
              r="108.3"
            />

            <g className="star">
              <path
                fill="#f7d391"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M180 107.8l16.9 52.1h54.8l-44.3 32.2 16.9 52.1-44.3-32.2-44.3 32.2 16.9-52.1-44.3-32.2h54.8z"
              />
              <circle
                fill="#f7d391"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                cx="180"
                cy="107.8"
                r="4.4"
              />
              <circle
                fill="#f7d391"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                cx="223.7"
                cy="244.2"
                r="4.4"
              />
              <circle
                fill="#f7d391"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                cx="135.5"
                cy="244.2"
                r="4.4"
              />
              <circle
                fill="#f7d391"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                cx="108.3"
                cy="160.4"
                r="4.4"
              />
              <circle
                fill="#f7d391"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                cx="251.7"
                cy="160.4"
                r="4.4"
              />
            </g>
          </svg>
        </div>
        <div
          className="moveUp"
          style={{
            padding: "1.5rem",
            fontSize: "1.2rem",
            color: "black",
            textAlign: "center",
            backgroundColor: "#F2D8D9",
            borderRadius: "3rem",
            margin: "1rem",
            border: "2px solid black",
          }}
        >
          <div className="moveUp" style={{ marginBottom: "0.5rem" }}>
            Reed College 2015 - 2018
          </div>
          <div className="moveDown" style={{ marginBottom: "0.5rem" }}>
            BA in Biology
          </div>
          <div className="moveUp">Thesis: The E.cology of E.coli</div>
        </div>
      </div>
    </div>
  );
};
