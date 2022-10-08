import React, { useEffect, useState } from "react";
import { BrowserRouter as RscRouter, useLocation } from "react-router-dom";
import { RscFooter, RscHeader, RscMain } from "./components";
import { RouteKey, utils } from "./components/shared";

// Import styles
import "./styles/theme.scss";

/**
 * The properties of the `LocationUpdater` component
 */
interface ILocationUpdater {
  /**
   * A method to update the route
   */
  setActiveRoute: React.Dispatch<React.SetStateAction<RouteKey>>;
}

const LocationUpdater: React.FC<ILocationUpdater> = (props) => {
  const { setActiveRoute } = props;
  // Check the current route to set navigation correctly
  const location = useLocation();
  useEffect(() => {
    const lastPath = utils.routing.extractLastPath(location);

    console.log("LAST PATH", lastPath);
    setActiveRoute(lastPath);
  }, [location, setActiveRoute]);
  return <></>;
};

const App: React.FC = () => {
  const [firstRender, setFirstRender] = useState<boolean>(false);

  const [activeRoute, setActiveRoute] = useState<RouteKey>("home");

  useEffect(() => {
    if (!firstRender) {
      document.documentElement.setAttribute("data-theme", "light");
    }
    setFirstRender(true);
  }, [firstRender]);

  return (
    <RscRouter>
      <LocationUpdater setActiveRoute={setActiveRoute} />
      <div className="rsc-app">
        <RscHeader activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
        <RscMain />
        <RscFooter />
      </div>
    </RscRouter>
  );
};

export default App;
