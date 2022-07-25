import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages";
import { rscRoutes } from "../../shared";
import "./RscMain.scss";

const RscMain: React.FC = () => {
  return (
    <main className="rsc-main">
      <Routes>
        <Route path={rscRoutes.home.url} element={<Home />} />
        <Route path={rscRoutes.aboutUs.url} element={<>WHO WE ARE</>} />
        <Route path={rscRoutes.services.url} element={<>OUR SERVICES</>} />
        <Route path={rscRoutes.contactUs.url} element={<>CONTACT US</>} />
      </Routes>
    </main>
  );
};

export default memo(RscMain);
