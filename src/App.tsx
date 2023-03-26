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
        <div {...props}>
          <a href="#AboutMe" style={{ zIndex: 5 }}>
            <img
              className="Objects"
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
        <div {...props}>
          <a href="#hawaii">
            <img
              src={spam}
              className="Objects"
              style={{
                position: "absolute",
                transform: "translate(650px, 406px)",
                width: "3rem",
                height: "5rem",
              }}
            />
          </a>
        </div>
        <div {...props}>
          <a href="#sw">
            <img
              src={laptop}
              className="Objects"
              style={{
                position: "absolute",
                transform: "translate(650px, 406px)",
                width: "8rem",
                height: "8rem",
              }}
            />
          </a>
        </div>
        <div {...props}>
          <a href="#pub">
            <img
              src={book}
              className="Objects"
              style={{
                position: "absolute",
                transform: "translate(650px, 406px)",
                width: "5rem",
                height: "5rem",
              }}
            />
          </a>
        </div>
        <div {...props}>
          <a href="#science">
            <img
              src={science}
              className="Objects"
              style={{
                position: "absolute",
                transform: "translate(250px, 406px)",
                width: "5rem",
                height: "5rem",
              }}
            />
          </a>
        </div>
        <div {...props}>
          <a href="#education">
            <img
              src={cert}
              className="Objects"
              style={{
                position: "absolute",
                transform: "translate(450px, 406px)",
                width: "5rem",
                height: "5rem",
              }}
            />
          </a>
        </div>
        <div onClick={() => console.log("download resume")}>
          <img
            src={resume}
            className="Objects"
            style={{
              position: "absolute",
              transform: "translate(450px, 406px)",
              width: "5rem",
              height: "5rem",
            }}
          />
        </div>
        <div {...props}>
          <a href="#bee">
            <img
              src={bee}
              className="Objects"
              style={{
                position: "absolute",
                transform: "translate(150px, 106px)",
                width: "5rem",
                height: "5rem",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
