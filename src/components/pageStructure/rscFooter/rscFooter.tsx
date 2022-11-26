import { CSSProperties, memo } from "react";
import { Link } from "react-router-dom";
import { RscContainer, RscLogo, RscText, RscTitle } from "../../design-system";
import {
  IRscRoute,
  IRscRoutes,
  ISocial,
  rscRoutes,
  rscSocials,
} from "../../shared";
import "./RscFooter.scss";
import { IRscFooter } from "./RscFooter.types";

export const getSitemapEntries = (rscRoutes: IRscRoutes) => {
  return (
    <RscContainer type="div" className="sitemap-entries">
      {Object.entries(rscRoutes).map((val: [string, IRscRoute]) => {
        return (
          <>
            <div className="entry">
              <Link to={val[1].url}>{val[1].name}</Link>
            </div>
          </>
        );
      })}
    </RscContainer>
  );
};

const getSocialConnection = (socials: ISocial[]) => {
  return (
    <>
      {socials.map((social) => {
        return <a href={social.url}>{social.icon}</a>;
      })}
    </>
  );
};

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
                {getSitemapEntries(rscRoutes)}
              </>
            </RscContainer>
            <RscContainer type="div" className="social-container">
              <>
                <RscTitle level={3}>SOCIAL NETWORK</RscTitle>
                {getSocialConnection(rscSocials)}
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
