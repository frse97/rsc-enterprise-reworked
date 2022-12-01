import { memo } from "react";
import {
  ContactUsForm,
  RscContainer,
  RscText,
  RscTitle,
} from "../../design-system";
import { rscSocials, utils } from "../../shared";
import "./ContactUs.scss";

/**
 * The `Contact us` page
 */
const ContactUs: React.FC = () => {
  return (
    <RscContainer type="section" className="rsc-contact-us">
      <div className="rsc-contact-us-title">
        <RscTitle level={1} noMargin={{ top: true }}>
          Let's connect!
        </RscTitle>
        <RscText type="span">We'd love to start collaborating with you</RscText>
      </div>
      <div className="rsc-contact-us-contacts">
        <div className="rsc-contact-us-contacts-form">
          <ContactUsForm />
        </div>
        <div className="rsc-contact-us-contacts-social">
          <RscTitle level={1} noMargin>
            Find us on social media
          </RscTitle>
          <div className="social">
            {utils.data.getSocialConnection(rscSocials)}
          </div>
        </div>
      </div>
    </RscContainer>
  );
};

export default memo(ContactUs);
