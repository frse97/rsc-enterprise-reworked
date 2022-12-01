import { memo, useCallback, useState } from "react";
import cs from "classnames";
import { RscContainer } from "../../design-system";
import "./AboutUs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type GoldenCircleFormOptions = "what" | "how" | "why" | undefined;

/**
 * The `About us` page
 */
const AboutUs: React.FC = () => {
  const [clicked, setClicked] = useState<GoldenCircleFormOptions>();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatClicked = useCallback(() => {
    if (!isExpanded) {
      setClicked("what");
      setIsExpanded(true);
    }
  }, [isExpanded]);
  const handleHowClicked = useCallback(() => {
    if (!isExpanded) {
      setClicked("how");
      setIsExpanded(true);
    }
  }, [isExpanded]);
  const handleWhyClicked = useCallback(() => {
    if (!isExpanded) {
      setClicked("why");
      setIsExpanded(true);
    }
  }, [isExpanded]);
  const handleCloseClick = useCallback(() => {
    if (isExpanded) {
      setClicked(undefined);
      setIsExpanded(false);
    }
  }, [isExpanded]);

  const whatClassName = cs("what", {
    "is-clicked": clicked === "what",
    "how-clicked": clicked === "how",
    "why-clicked": clicked === "why",
  });
  const howClassName = cs("how", {
    "is-clicked": clicked === "how",
    "what-clicked": clicked === "what",
    "why-clicked": clicked === "why",
  });
  const whyClassName = cs("why", {
    "is-clicked": clicked === "why",
    "what-clicked": clicked === "what",
    "how-clicked": clicked === "how",
  });

  return (
    <RscContainer type="section" className="rsc-about-us">
      <div className="rsc-about-us-goldencircle">
        <div className="rsc-about-us-goldencircle-form">
          <div className="circle-container">
            <div className={whatClassName} onClick={handleWhatClicked}>
              <div className="title">
                <div className="text">WHAT?</div>
                <div className="close" onClick={handleCloseClick}>
                  <FontAwesomeIcon icon={faClose as IconProp} />
                </div>
              </div>
            </div>
            <div className={howClassName} onClick={handleHowClicked}>
              <div className="title">
                <div className="text">HOW?</div>
                <div className="close" onClick={handleCloseClick}>
                  <FontAwesomeIcon icon={faClose as IconProp} />
                </div>
              </div>
            </div>
            <div className={whyClassName} onClick={handleWhyClicked}>
              <div className="title">
                <div className="text">WHY?</div>
                <div className="close" onClick={handleCloseClick}>
                  <FontAwesomeIcon icon={faClose as IconProp} />
                </div>
              </div>
              <div className="container">
                <div className="description">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rsc-about-us-offset" />
    </RscContainer>
  );
};

export default memo(AboutUs);
