/**
 * A single rsc route
 */
interface IRscRoute {
  // The url of the route
  url: string;
  // The translation key for the route
  name: string;
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
    url: "/",
    name: "home",
  },
  // The route for the services page
  services: {
    url: "/services",
    name: "services",
  },
  // The route for the about us page
  aboutUs: {
    url: "/about-us",
    name: "about-us",
  },
  // The route for the contact page
  contactUs: {
    url: "/contact-us",
    name: "contact-us",
  },
};
