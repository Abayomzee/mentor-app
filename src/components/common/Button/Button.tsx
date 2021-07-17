import React from "react";

interface Props {
  text?: string | JSX.Element;
  cssClass: string;
  icon?: HTMLElement | any;
  handleClick?: () => void;
}
const Button: React.FC<Props> = ({ text, cssClass, icon, handleClick }) => {
  return (
    <button className={`btn ${cssClass}`} onClick={handleClick}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
