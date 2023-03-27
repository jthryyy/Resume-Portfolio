import React from "react";
import portrait from "./Images/image0.png";
import spam from "./Images/image1.png";
import laptop from "./Images/image2.png";
import book from "./Images/image3.png";
import science from "./Images/image4.png";
import cert from "./Images/image5.png";
import resume from "./Images/image6.png";
import bee from "./Images/image7.png";
import "./App.css";
import { Question } from "./Icons";
import { QuestionMenu } from "./Components/QuestionMenu";
import { List } from "./List";

function App() {
  const [menu, setMenu] = React.useState<boolean>(false);
  const [list, setList] = React.useState<boolean>(false);
  const props = {
    onClick: () => setList(true),
  };
  return list ? (
    <List onClick={() => setList(false)} />
  ) : (
    <div
      className="App"
      style={{
        justifyContent: "center",
      }}
    >
      <div className="Background">
        {menu ? <QuestionMenu onClick={() => setList(true)} /> : null}
        <div
          style={{ position: "absolute", transform: "translate(890px, 200px)" }}
        >
          <Question onClick={() => setMenu(menu ? false : true)} />
        </div>
        <div {...props} className="Objects">
          <a href="#AboutMe" style={{ zIndex: 5 }}>
            <img
              src={portrait}
              style={{
                position: "absolute",
                transform: "translate(100px, 296px)",
                width: "10rem",
                height: "13rem",
              }}
            />
          </a>
        </div>

        <div {...props} className="Objects">
          <a href="#sw">
            <img
              src={laptop}
              style={{
                position: "absolute",
                transform: "translate(645px, 456px)",
                width: "8rem",
                height: "8rem",
              }}
            />
          </a>
        </div>
        <div {...props} className="Objects" style={{ zIndex: 100 }}>
          <a href="#hawaii">
            <img
              src={spam}
              style={{
                position: "absolute",
                transform: "translate(650px, 456px) rotate(-5deg)",
                width: "2.8rem",
                height: "2.8rem",
              }}
            />
          </a>
        </div>
        <div {...props} className="Objects">
          <a href="#pub">
            <img
              src={book}
              style={{
                position: "absolute",
                transform: "translate(200px, 456px)",
                width: "5rem",
                height: "5rem",
              }}
            />
          </a>
        </div>
        <div {...props} className="Objects">
          <a href="#science">
            <img
              src={science}
              style={{
                position: "absolute",
                transform: "translate(368px, 250px)",
                width: "5rem",
                height: "5rem",
              }}
            />
          </a>
        </div>
        <div {...props} className="Objects">
          <a href="#education">
            <img
              src={cert}
              style={{
                position: "absolute",
                transform: "translate(540px, 240px) rotate(1deg)",
                width: "5.8rem",
                height: "5.8rem",
              }}
            />
          </a>
        </div>
        <div className="Objects" onClick={() => console.log("download resume")}>
          <img
            src={resume}
            style={{
              position: "absolute",
              transform: "translate(310px, 536px) rotate(2deg)",
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        </div>
        <div {...props} className="Objects">
          <a href="#bee">
            <img
              src={bee}
              style={{
                position: "absolute",
                transform: "translate(730px, 356px)",
                width: "2.7rem",
                height: "2.7rem",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
