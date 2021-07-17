import React from "react";

interface Props {
  text: any;
  cssClass?: string;
  handleClick?: () => void;
}
const Tag: React.FC<Props> = ({ text, cssClass, handleClick }) => {
  return (
    <button onClick={handleClick} className={`tag ${cssClass}`}>
      {text}
    </button>
  );
};

export default Tag;
