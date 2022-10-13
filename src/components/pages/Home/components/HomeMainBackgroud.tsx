import { memo } from "react";
import { homeParticlesOptions } from "../../../data";
import { RscButton, RscParticles, RscTitle } from "../../../design-system";
import { colors, rscRoutes } from "../../../shared";
import { IHomeMainBackground } from "../Home.types";

const HomeMainBackground: React.FC<IHomeMainBackground> = (props) => {
  const { hasParticles = false } = props;

  return (
    <div className="home-intro-area">
      <div className="home-bg">
        <div className="home-bg-title">
          <RscTitle level={1}>
            Tailor-made Web3 solution <br /> for businesses and brands
          </RscTitle>
        </div>
        {hasParticles && <RscParticles options={homeParticlesOptions} />}
      </div>
      <div className="rsc-main-cta">
        <RscButton
          label="Discover our services"
          size="lg"
          color={colors.light.callToAction}
          isFilled={false}
          href={rscRoutes.services.url}
        />
      </div>
    </div>
  );
};

export default memo(HomeMainBackground);
