import "../App.css";
import type { StyleProps } from "../Utils/types";

interface Back extends StyleProps {
  onClick: () => void;
  difHover?: boolean;
}

export const Back = (props: Back): JSX.Element => {
  return (
    <div
      onClick={props.onClick}
      className={props.difHover ? "BackAlt" : "Back"}
      style={{ width: "1.5rem", height: "1.5rem" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
      </svg>
    </div>
  );
};
