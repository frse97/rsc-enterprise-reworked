import { memo } from "react";
import {
  DesignStep,
  DevelopmentStep,
  PowerhouseStep,
  ProductStep,
  SecurityStep,
} from "./components";

import "./RscSteps.scss";

const RscSteps: React.FC = () => {
  return (
    <div className="rsc-steps-container">
      <PowerhouseStep />
      <DesignStep />
      <ProductStep />
      <DevelopmentStep />
      <SecurityStep />
    </div>
  );
};

export default memo(RscSteps);
