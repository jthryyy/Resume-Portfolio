import "../App.css";
import type { StyleProps } from "../Utils/types";

interface Back extends StyleProps {
  onClick: () => void;
}

export const Back = (props: Back): JSX.Element => {
  return (
    <div
      onClick={props.onClick}
      className="Back"
      style={{ width: "1.5rem", height: "1.5rem" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="11 19 2 12 11 5 11 19"></polygon>
        <polygon points="22 19 13 12 22 5 22 19"></polygon>
      </svg>
    </div>
  );
};
