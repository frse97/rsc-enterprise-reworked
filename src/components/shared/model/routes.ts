export type RouteKey =
  | "home"
  | "services"
  | "about-us"
  | "contact-us"
  | "web3-adoption"
  | "enterprise-blockchain";

/**
 * A single rsc route
 */
export interface IRscRoute {
  // The key of the route
  itemKey: RouteKey;
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
export interface IRscRoutes {
  home: IRscRoute;
  services: IRscRoute;
  aboutUs: IRscRoute;
  contactUs: IRscRoute;
}

export const rscRoutes: IRscRoutes = {
  // The home route.
  home: {
    itemKey: "home",
    url: "/rsc-enterprise-reworked",
    name: "Home",
  },
  // The route for the services page
  services: {
    itemKey: "services",
    url: "/rsc-enterprise-reworked/services",
    name: "Services",
    items: [
      {
        itemKey: "web3-adoption",
        url: "/rsc-enterprise-reworked/services/web3-adoption",
        name: "Web3 Adoption",
      },
      {
        itemKey: "enterprise-blockchain",
        url: "/rsc-enterprise-reworked/services/enterprise-blockchain",
        name: "Enterprise Blockchain",
      },
    ],
  },
  // The route for the about us page
  aboutUs: {
    itemKey: "about-us",
    url: "/rsc-enterprise-reworked/about-us",
    name: "Who we are",
  },
  // The route for the contact page
  contactUs: {
    itemKey: "contact-us",
    url: "/rsc-enterprise-reworked/contact-us",
    name: "Contact us",
  },
};
