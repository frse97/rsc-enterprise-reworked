import { memo } from "react";
import "./Home.scss";
import { HomeMainBackground } from "./components";
import { RscFileDownloadSection, RscSteps } from "../../design-system";
import { pdfList, rscStepsStructure } from "../../data";

const RscHome: React.FC = () => {
  return (
    <div className="rsc-home">
      <HomeMainBackground />
      <RscSteps steps={rscStepsStructure} />
      <RscFileDownloadSection fileList={pdfList} />
    </div>
  );
};

export default memo(RscHome);
