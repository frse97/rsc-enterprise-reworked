import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { rscRoutes } from "../../shared";

const RscLogo: React.FC = () => {
  const logoAlt = useMemo(() => {
    return `RSC Enterprises Logo`;
  }, []);

  const logoSrc = useMemo(() => {
    return process.env.PUBLIC_URL + "./assets/logo.png";
  }, []);

  return (
    <Link to={rscRoutes.home.url}>
      <img className="rsc-logo" alt={logoAlt} src={logoSrc} />
    </Link>
  );
};

export default memo(RscLogo);
