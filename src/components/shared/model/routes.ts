export type RouteKey =
  | "home"
  | "services"
  | "aboutUs"
  | "contactUs"
  | "web3Adoption"
  | "enterpriseBlockchain";

/**
 * A single rsc route
 */
interface IRscRoute {
  // The key of the route
  key: RouteKey;
  // The url of the route
  url: string;
  // The translation key for the route
  name: string;
  // Possible children to the route
  items?: IRscRoute[];
}

/**
 * The rsc routes used in the homepage
 */
interface IRscRoutes {
  home: IRscRoute;
  services: IRscRoute;
  aboutUs: IRscRoute;
  contactUs: IRscRoute;
}

export const rscRoutes: IRscRoutes = {
  // The home route.
  home: {
    key: "home",
    url: "/rsc-enterprise-reworked",
    name: "Home",
  },
  // The route for the services page
  services: {
    key: "services",
    url: "/rsc-enterprise-reworked/services",
    name: "Services",
    items: [
      {
        key: "web3Adoption",
        url: "/rsc-enterprise-reworked/services/web3-adoption",
        name: "Web3 Adoption",
      },
      {
        key: "enterpriseBlockchain",
        url: "/rsc-enterprise-reworked/services/enterprise-blockchain",
        name: "Enterprise Blockchain",
      },
    ],
  },
  // The route for the about us page
  aboutUs: {
    key: "aboutUs",
    url: "/rsc-enterprise-reworked/about-us",
    name: "Who we are",
  },
  // The route for the contact page
  contactUs: {
    key: "contactUs",
    url: "/rsc-enterprise-reworked/contact-us",
    name: "Contact us",
  },
};
