import "../App.css";
import type { Generic } from "../types";
interface BackProps extends Generic {
  difHover?: boolean;
}

export const Back = (props: BackProps): JSX.Element => {
  return (
    <div
      aria-label={`Back_${
        props.difHover != null && props.difHover
          ? "classNameBackAlt"
          : "classNameBack"
      }`}
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
      </svg>
    </div>
  );
};
