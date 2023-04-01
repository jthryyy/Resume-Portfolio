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
import { QuestionMenu } from "./Components/QuestionMenu";
import { Question } from "./Icons";
import { List } from "./List";

function App() {
  const [menu, setMenu] = React.useState<boolean>(false);
  const [list, setList] = React.useState<boolean>(false);
  const handleClick = (): void => {
    setList(true);
    setMenu(false);
  };
  const props = {
    onClick: handleClick,
  };

  const handleListClick = (): void => {
    setList(false);
  };
  return list ? (
    <List onClick={handleListClick} />
  ) : (
    <div
      id="home"
      className="App"
      style={{
        justifyContent: "center",
      }}
    >
      <div
        className="name"
        style={{
          position: "absolute",
        }}
      >
        Jet Rader - Developer
      </div>
      <div className="Background" style={{ marginTop: "1.5rem" }}>
        {menu ? <QuestionMenu onClick={handleClick} /> : null}
        <div className="QuestionBack" style={{ position: "absolute" }}>
          <Question onClick={() => setMenu(menu ? false : true)} />
        </div>
        <div {...props} className="Objects" aria-label="AboutMe">
          <a href="#AboutMe" style={{ zIndex: 5 }}>
            <img
              alt="Portrait"
              src={portrait}
              className="plz Portrait"
              style={{
                position: "absolute",
              }}
            />
          </a>
        </div>

        <div {...props} className="Objects">
          <a href="#sw">
            <img
              alt="Labtop"
              className="plz Laptop"
              src={laptop}
              style={{
                position: "absolute",
              }}
            />
          </a>
        </div>
        <div {...props} className="Objects" style={{ zIndex: 100 }}>
          <a href="#hawaii">
            <img
              alt="Spam masubi"
              className="plz spam"
              src={spam}
              style={{
                position: "absolute",
              }}
            />
          </a>
        </div>
        <div {...props} className="Objects">
          <a href="#pub">
            <img
              alt="Book"
              className="plz book"
              src={book}
              style={{
                position: "absolute",
              }}
            />
          </a>
        </div>
        <div {...props} className="Objects">
          <a href="#science">
            <img
              alt="Test tubes"
              className="plz science"
              src={science}
              style={{
                position: "absolute",
              }}
            />
          </a>
        </div>
        <div {...props} className="Objects">
          <a href="#education">
            <img
              alt="Diploma"
              className="plz diploma"
              src={cert}
              style={{
                position: "absolute",
              }}
            />
          </a>
        </div>
        <div className="Objects">
          <a
            href="https://d3ancx11zq5pzk.cloudfront.net/JetRaderResume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={resume}
              alt="Resume"
              className="plz res"
              style={{
                position: "absolute",
              }}
            />
          </a>
        </div>
        <div {...props} className="Objects">
          <a href="#bee">
            <img
              alt="Bee"
              className="plz b"
              src={bee}
              style={{
                position: "absolute",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
