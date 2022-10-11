import { memo } from "react";
import { RscContainer, RscTitle } from "../../design-system";
import "./EnterpriseBlockchain.scss";

/**
 * The `Enterprise Blockchain` page
 */
const EnterpriseBlockchain: React.FC = () => {
  return (
    <RscContainer type="section" className="rsc-enterprise-blockchain">
      <RscTitle level={1}>Enterprise Blockchain</RscTitle>
    </RscContainer>
  );
};

export default memo(EnterpriseBlockchain);
