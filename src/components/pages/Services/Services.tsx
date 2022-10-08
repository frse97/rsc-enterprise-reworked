import { memo } from "react";
import {
  RscButton,
  RscContainer,
  RscText,
  RscTitle,
} from "../../design-system";
import { CryptoFlowersIcon, NakamotoIcon } from "../../icons";
import "./Services.scss";

/**
 * The `Services` page
 */
const Services: React.FC = () => {
  return (
    <RscContainer type="section" className="rsc-services">
      <RscContainer
        type="div"
        className="service-web3adoption service-container"
      >
        <CryptoFlowersIcon />
        <RscTitle level={1} className="service-title">
          Web3 Adoption
        </RscTitle>
        <RscText type="paragraph" className="service-paragraph">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum
        </RscText>
        <RscButton
          label="Start to adapt!"
          margin={{ top: "xxl", left: "xs", right: "xs" }}
        />
      </RscContainer>
      <RscContainer
        type="div"
        className="service-enterpriseblockchain service-container"
      >
        <NakamotoIcon />
        <RscTitle level={1} className="service-title">
          Enterprise Blockchain
        </RscTitle>
        <RscText type="paragraph" className="service-paragraph">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum
        </RscText>
        <RscButton label="Explore more" />
      </RscContainer>
    </RscContainer>
  );
};

export default memo(Services);
