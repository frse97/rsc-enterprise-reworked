import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  EnterpriseBlockchain,
  Home,
  Services,
  Web3Adoption,
} from "../../pages";
import { rscRoutes } from "../../shared";
import "./RscMain.scss";

const RscMain: React.FC = () => {
  return (
    <main className="rsc-main">
      <Routes>
        <Route path={rscRoutes.home.url} element={<Home />} />
        <Route path={rscRoutes.services.url} element={<Services />} />
        {rscRoutes.services.items && (
          <>
            <Route
              path={rscRoutes.services.items[0].url}
              element={<Web3Adoption />}
            />
            <Route
              path={rscRoutes.services.items[1].url}
              element={<EnterpriseBlockchain />}
            />
          </>
        )}
        <Route path={rscRoutes.services.url} element={<Services />} />
        <Route path={rscRoutes.aboutUs.url} element={<AboutUs />} />
        <Route path={rscRoutes.contactUs.url} element={<ContactUs />} />
      </Routes>
    </main>
  );
};

export default memo(RscMain);
