import {
  DesignIcon,
  DevelopmentIcon,
  PowerHouseIcon,
  ProductIcon,
  SecurityIcon,
} from "../../icons";
import { IRscStep } from "./RscSteps";

export const rscStepsStructure: IRscStep[] = [
  {
    title: "Powerhouse",
    description:
      " The blockchain technology has a wide variety of possible applications. We will guide you through them to find the one that best fits your needs.",
    image: <PowerHouseIcon />,
    orientation: "left",
    verLineDirection: "verticalRight",
  },
  {
    title: "Design",
    description:
      "We spot and design the most suitable and profitable blockchain solutions for you, your business and your stakeholders.",
    image: <DesignIcon />,
    orientation: "right",
    horLineDirection: "right",
    verLineDirection: "verticalLeft",
  },
  {
    title: "Product - Market fit",
    description:
      "A lot of ideas look great until they’re tested on the market. We mix our knowledge of the technology with your aspirations and needs and a strong vision for the future in order to deliver a high quality, effective solution/product.",
    image: <ProductIcon />,
    orientation: "left",
    verLineDirection: "verticalRight",
  },
  {
    title: "Development",
    description:
      "Through the realization of a PoC (Proof of Concept) in order to validate our solution. What’s left to do now is to develop our solution at larger scale. From the Proof of Concept to large-scale adoption, we meticulously take care of the details in order to test the solution we built and effectively launch it on the market.",
    image: <DevelopmentIcon />,
    orientation: "right",
    horLineDirection: "right",
    verLineDirection: "verticalLeft",
  },
  {
    title: "Security",
    description:
      "The safety of your data and assets is an essential part of the solution we developed together. RSC will provide the best cybersecurity solutions for you and your blockchain related products.",
    image: <SecurityIcon />,
    orientation: "left",
    isVerticalLineDisplayed: false,
  },
];
