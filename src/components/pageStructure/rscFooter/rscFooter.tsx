import { memo } from "react";
import "./RscFooter.scss";

const RscFooter: React.FC = () => {
  return (
    <footer className="rsc-footer">
      {/* <div className="connections">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faMedium} />
      </div> */}
    </footer>
  );
};

export default memo(RscFooter);
