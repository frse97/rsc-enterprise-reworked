import React, { useEffect, useState } from "react";
import { BrowserRouter as RscRouter } from "react-router-dom";
import { RscFooter, RscHeader, RscMain } from "./components";

// Import styles
import "./styles/theme.scss";

const App: React.FC = () => {
  const [firstRender, setFirstRender] = useState<boolean>(false);

  useEffect(() => {
    if (!firstRender) {
      document.documentElement.setAttribute("data-theme", "light");
    }
    setFirstRender(true);
  }, [firstRender]);

  return (
    <RscRouter>
      <div className="rsc-app">
        <RscHeader />
        <RscMain />
        <RscFooter />
      </div>
    </RscRouter>
  );
};

export default App;
