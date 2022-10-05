import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { homeParticlesOptions } from "../../../data";
import { RscButton, RscParticles, RscTitle } from "../../../design-system";
import { rscRoutes } from "../../../shared";
import { IHomeMainBackground } from "../Home.types";

const HomeMainBackground: React.FC<IHomeMainBackground> = (props) => {
  const { hasParticles = false } = props;

  return (
    <div className="home-intro-area">
      <div className="home-bg">
        <div className="rsc-title">
          <RscTitle level={1} fontSize="48px">
            Tailor-made Web3 solution <br /> for businesses and brands
          </RscTitle>
        </div>
        {hasParticles && <RscParticles options={homeParticlesOptions} />}
      </div>
      <div className="rsc-main-cta">
        <RscButton
          label="Discover our services"
          size="lg"
          color="mainBlue"
          isFilled={false}
          href={rscRoutes.services.url}
          icon={<FontAwesomeIcon icon={faBolt as IconProp} />}
        />
      </div>
    </div>
  );
};

export default memo(HomeMainBackground);
