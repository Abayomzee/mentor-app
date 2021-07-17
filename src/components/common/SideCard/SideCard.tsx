import React from "react";

interface Props {
  // children?: JSX.Element | HTMLElement;
}
const SideCard: React.FC<Props> = ({ children }) => {
  return <div className="side-card">{children}</div>;
};

export default SideCard;
