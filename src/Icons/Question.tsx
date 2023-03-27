import "../App.css";
import type { StyleProps } from "../Utils/types";

interface Question extends StyleProps {
  onClick: () => void;
}

export const Question = (props: Question): JSX.Element => {
  return (
    <div
      onClick={props.onClick}
      className="Question"
      style={{ width: "1.5rem", height: "1.5rem" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="#679A99"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    </div>
  );
};
