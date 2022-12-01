import { CSSProperties, memo } from "react";
import { Link } from "react-router-dom";
import { RscContainer, RscLogo, RscText, RscTitle } from "../../design-system";
import { rscRoutes, rscSocials, utils } from "../../shared";
import "./RscFooter.scss";
import { IRscFooter } from "./RscFooter.types";

const RscFooter: React.FC<IRscFooter> = (props) => {
  const { backgroundColor } = props;

  const mergedStyles: CSSProperties & { "--rsc-footer-bg-color"?: string } = {
    "--rsc-footer-bg-color": backgroundColor as string,
  };

  return (
    <footer className="rsc-footer" style={{ ...mergedStyles }}>
      {/* FIXME: Refactor */}
      <RscContainer type="div" className="rsc-footer-form">
        {}
      </RscContainer>
      <RscContainer type="div" className="rsc-footer-container">
        <RscContainer type="div" className="logo-menu">
          <RscContainer type="div" className="logo-container">
            <RscLogo />
          </RscContainer>
          <RscContainer type="div" className="menu-social">
            <RscContainer type="div" className="menu-container">
              <>
                <RscTitle level={3}>SITEMAP</RscTitle>
                {utils.data.getSitemapEntries(rscRoutes)}
              </>
            </RscContainer>
            <RscContainer type="div" className="social-container">
              <>
                <RscTitle level={3}>SOCIAL NETWORK</RscTitle>
                {utils.data.getSocialConnection(rscSocials)}
              </>
            </RscContainer>
          </RscContainer>
        </RscContainer>
        <RscContainer type="div" className="copyright-container">
          <RscText type="span">Copyright © 2022, All rights reserved</RscText>
          <RscContainer type="div">
            <RscText type="span">
              {/* FIXME: */}
              Made by Sebastian Fries {"("}
              <Link to="https://linktr.ee/sebastianfries">Linktree</Link>
              {")"}
            </RscText>
          </RscContainer>
        </RscContainer>
      </RscContainer>
    </footer>
  );
};

export default memo(RscFooter);
