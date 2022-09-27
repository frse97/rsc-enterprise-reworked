import { memo } from "react";
import { DevelopmentIcon } from "../../../../icons";
import "./Development.scss";

const DevelopmentStep: React.FC = () => {
  return (
    <div className="fourth-step">
      <div className="development-img">
        <DevelopmentIcon />
      </div>
      <div className="development">
        <h1 className="title">Development</h1>
        <p className="description">
          Through the realization of a PoC (Proof of Concept) in order to
          validate our solution. What’s left to do now is to develop our
          solution at larger scale. From the Proof of Concept to large-scale
          adoption, we meticulously take care of the details in order to test
          the solution we built and effectively launch it on the market.
        </p>
      </div>
    </div>
  );
};

export default memo(DevelopmentStep);
