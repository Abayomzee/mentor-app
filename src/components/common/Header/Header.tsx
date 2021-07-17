import React from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

interface Props {}
const Header: React.FC<Props> = () => {
  return (
    <header className="header">
      <i className="fas fa-award header__icon m-t-4px"></i>
      <Typography
        Element="h5"
        text={`${6} Suggestions`}
        cssClass="h-4 m-l-20px"
      />
      <Typography
        Element="h5"
        text="Sort By: "
        cssClass="h-5 m-l-40px m-r-5px"
      />
      <Typography
        Element="h5"
        text="Most Upvotes"
        cssClass="color--white pointer"
      />
      <i className="fas fa-angle-down color--white m-l-3px m-t-4px pointer"></i>
      <Button
        cssClass="btn btn--primary btn--icon m-l-auto"
        icon={<i className="fas fa-plus m-r-6px btn-icon"></i>}
        text=" Add Feedback"
      />
    </header>
  );
};

export default Header;
