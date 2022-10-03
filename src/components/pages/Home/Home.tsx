import { memo } from "react";
import { RscContainer, RscParticles } from "../../general";
import "./Home.scss";
import { RscSteps, rscStepsStructure } from "../../general/RscSteps";
import { homeParticlesOptions } from "./Home.data";
import { RscButton } from "../../general/button";
import { rscRoutes } from "../../shared";
import { RscLinearGradientText, RscText } from "../../general/text";
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
          <RscText
            type="span"
            content={
              <>
                Tailor-made Web3 solution <br /> for businesses and brands
              </>
            }
          />
        </div>
        {hasParticles && <RscParticles options={homeParticlesOptions} />}
      </div>
      <div className="rsc-main-cta">
        <RscContainer
          type="section"
          content={
            <RscText
              type="h2"
              fontSize="24px"
              textTransform="uppercase"
              content={
                <>
                  The{" "}
                  <RscLinearGradientText
                    type="span"
                    fontSize="24px"
                    fontWeight="bolder"
                    angle={45}
                    opacity={80}
                    color1={"#0015ff"}
                    color2={"#00dbce"}
                    content={<>blockchain technology</>}
                  />{" "}
                  is revolutionizing the way we do business
                </>
              }
            />
          }
        />

        <RscButton
          label="Discover our services"
          size="lg"
          color="mainBlue"
          isFilled={false}
          href={rscRoutes.services.name}
        />
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
