import React from "react";

interface Props {
  Element: any;
  cssClass?: string;
  text: string;
}

const Typography: React.FC<Props> = ({ Element, cssClass, text, children }) => {
  return <Element className={cssClass}>{text ? text : children}</Element>;
};

export default Typography;
