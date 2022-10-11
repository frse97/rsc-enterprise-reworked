import { memo } from "react";
import { RscContainer, RscTitle } from "../../design-system";
import "./AboutUs.scss";

/**
 * The `About us` page
 */
const AboutUs: React.FC = () => {
  return (
    <RscContainer type="section" className="rsc-about-us">
      <RscTitle level={1}>About us</RscTitle>
      About us
    </RscContainer>
  );
};

export default memo(AboutUs);
