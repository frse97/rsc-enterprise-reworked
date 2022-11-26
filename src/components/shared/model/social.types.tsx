import {
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

export interface ISocial {
  /**
   * The link to the social media connection
   */
  url?: string;
  /**
   * The icon of the social media connection
   */
  icon?: ReactNode;
}

export const rscSocials: ISocial[] = [
  {
    url: "https://www.linkedin.com/company/rscenterprises/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    url: "https://twitter.com/0xRSC",
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    url: "https://www.linkedin.com/company/rscenterprises/",
    icon: <FontAwesomeIcon icon={faMedium} />,
  },
  {
    url: "https://www.instagram.com/rsc.enterprises/",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
];
