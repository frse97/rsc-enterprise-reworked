import { memo } from "react";
import { RscParticles } from "../../general";
import "./Home.scss";
import { RscSteps, rscStepsStructure } from "../../general/RscSteps";
import { homeParticlesOptions } from "./Home.data";

interface IHomeMainBackground {
  /**
   * Identifier if the home background should have particles
   * @default false
   */
  hasParticles?: boolean;
}

const HomeMainBackground: React.FC<IHomeMainBackground> = (props) => {
  const { hasParticles = false } = props;

  return (
    <div className="home-intro-area">
      <div className="home-bg">
        <div className="rsc-title">
          <span>
            Tailor-made Web3 solution <br /> for businesses and brands
          </span>
        </div>
        {hasParticles && <RscParticles options={homeParticlesOptions} />}
      </div>
    </div>
  );
};

const RscHome: React.FC = () => {
  return (
    <div className="rsc-home">
      <HomeMainBackground />
      <RscSteps steps={rscStepsStructure} />
    </div>
  );
};

export default memo(RscHome);
