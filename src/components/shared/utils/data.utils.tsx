import { Link } from "react-router-dom";
import { RscContainer } from "../../design-system";
import { IRscRoute, IRscRoutes, ISocial } from "../model";

export const getSitemapEntries = (rscRoutes: IRscRoutes) => {
  return (
    <RscContainer type="div" className="sitemap-entries">
      {Object.entries(rscRoutes).map((val: [string, IRscRoute]) => {
        return (
          <>
            <div className="entry" key={val[1].name}>
              <Link to={val[1].url}>{val[1].name}</Link>
            </div>
          </>
        );
      })}
    </RscContainer>
  );
};

export const getSocialConnection = (socials: ISocial[]) => {
  return (
    <>
      {socials.map((social, i) => {
        return (
          <a key={i} href={social.url}>
            {social.icon}
          </a>
        );
      })}
    </>
  );
};
