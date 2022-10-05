import {
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { Link } from "react-router-dom";
import { RscLogo, RscText } from "../../general";
import { rscRoutes } from "../../shared";
import "./RscFooter.scss";

const RscFooter: React.FC = () => {
  return (
    <>
      <footer className="rsc-footer">
        <div className="container">
          <div className="content">
            <div className="logo-container">
              <RscLogo />
            </div>
            <div className="menu-container">
              <div className="title">
                <RscText type="h2" content={"SITEMAP"} />
              </div>
              <div className="entries">
                <div className="entry">
                  <Link to={rscRoutes.aboutUs.url}>WHO WE ARE</Link>
                </div>
                <div className="entry">
                  <Link to={rscRoutes.services.url}>SERVICES</Link>
                </div>
                <div className="entry">
                  <Link to={rscRoutes.contactUs.url}>CONTACT</Link>
                </div>
              </div>
            </div>
            <div className="social-container">
              <div className="title">
                <RscText type="h2" content={"SOCIAL NETWORK"} />
              </div>
              <div className="socials">
                <div className="row">
                  <a href={"https://www.linkedin.com/company/rscenterprises/"}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href={"https://twitter.com/0xRSC"}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href={"https://www.linkedin.com/company/rscenterprises/"}>
                    <FontAwesomeIcon icon={faMedium} />
                  </a>
                  <a href={"https://www.instagram.com/rsc.enterprises/"}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
            <div className="newsletter"></div>
          </div>
          <div className="bottom-container">
            Copyright © 2022, RSC Enterprises, All rights reserved
            <div className="creator">
              Site made by Sebastian Fries, SF (
              <a href={"https://linktr.ee/sebastianfries"}>Linktree</a>)
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(RscFooter);
