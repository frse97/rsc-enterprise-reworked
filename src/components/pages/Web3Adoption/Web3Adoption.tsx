import { memo } from "react";
import { RscContainer, RscTitle } from "../../design-system";
import "./Web3Adoption.scss";

/**
 * The `Web3 adoption` page
 */
const Web3Adoption: React.FC = () => {
  return (
    <RscContainer type="section" className="rsc-web3-adoption">
      <RscTitle level={1}>Web3 Adoption</RscTitle>
    </RscContainer>
  );
};

export default memo(Web3Adoption);
