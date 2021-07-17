import React from "react";
import Typography from "./../Typography/Typography";

interface Props {
  title: string;
  subTitle: string;
}
const Usercard: React.FC<Props> = () => {
  return (
    <div className="user-card">
      <Typography Element="h5" text="frontend mentor" cssClass="h-1" />
      <Typography Element="p" text="feedback board" cssClass="p-1 m-t-5px" />
    </div>
  );
};

export default Usercard;
