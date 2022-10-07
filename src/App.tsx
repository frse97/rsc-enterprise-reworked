import React, { useEffect, useState } from "react";
import { BrowserRouter as RscRouter } from "react-router-dom";
import { RscFooter, RscHeader, RscMain } from "./components";
import { RouteKey } from "./components/shared";

// Import styles
import "./styles/theme.scss";

const App: React.FC = () => {
  const [firstRender, setFirstRender] = useState<boolean>(false);

  // TODO: Initialize value with the current active route from react-dom, otherwise fallback on "home"
  const [activeRoute, setActiveRoute] = useState<RouteKey>("home");

  useEffect(() => {
    if (!firstRender) {
      document.documentElement.setAttribute("data-theme", "light");
    }
    setFirstRender(true);
  }, [firstRender]);

  return (
    <RscRouter>
      <div className="rsc-app">
        <RscHeader activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
        <RscMain />
        <RscFooter />
      </div>
    </RscRouter>
  );
};

export default App;
