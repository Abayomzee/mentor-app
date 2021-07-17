import React from "react";
import Typography from "./../Typography/Typography";

interface Props {
  title?: any;
  value?: any;
  type?: string;
}
const RoadMap: React.FC<Props> = ({ title, value, type }) => {
  return (
    <div className="road-map">
      <div className={`road-map-bagde ${type}`}></div>
      <Typography Element="h5" text={title} cssClass="h-3 m-l-10px" />
      <Typography Element="p" text={value} cssClass="p-2 m-l-auto" />
    </div>
  );
};

export default RoadMap;
