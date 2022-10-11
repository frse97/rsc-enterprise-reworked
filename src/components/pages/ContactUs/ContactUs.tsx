import { memo } from "react";
import { RscContainer, RscTitle } from "../../design-system";
import "./ContactUs.scss";

/**
 * The `Contact us` page
 */
const ContactUs: React.FC = () => {
  return (
    <RscContainer type="section" className="rsc-contact-us">
      <RscTitle level={1}>Contact us</RscTitle>
    </RscContainer>
  );
};

export default memo(ContactUs);
