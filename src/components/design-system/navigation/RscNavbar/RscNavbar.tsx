import { memo } from "react";
import { Link } from "react-router-dom";
import { IRscNavbar, IRscNavItem } from "./RscNavbar.types";
import "./RscNavbar.scss";

const RscNavItem: React.FC<IRscNavItem> = (props) => {
  const { name, url, active, items } = props;

  return (
    <div className="rsc-nav-item">
      <Link to={url}>{name}</Link>
    </div>
  );
};

const RscNavbar: React.FC<IRscNavbar> = (props) => {
  const { items } = props;

  return (
    <div className="rsc-navigation">
      {items?.map((item) => (
        <RscNavItem {...item} />
      ))}
    </div>
  );
};

export default memo(RscNavbar);
