import { memo } from "react";
import { RscText, RscTitle } from "../../text";
import { RscPdf } from "./components";
import "./RscFileDownloadSection.scss";
import { IRscFileDownloadSection } from "./RscFileDownloadSection.types";

const RscFileDownloadSection: React.FC<IRscFileDownloadSection> = (props) => {
  const { fileList } = props;

  return (
    <section className="rsc-download-section">
      <div className="rsc-download-container">
        <div className="descr">
          <div className="text-container">
            <RscTitle level={4} className="download-title" fontSize="24px">
              You want to know more about the Blockchain?
            </RscTitle>
            <RscText type="span" fontSize="24px">
              Download some of the documents we prepared for you
            </RscText>
          </div>
        </div>
        <div className="download">
          {fileList.map((file, i) => {
            return <RscPdf key={i} name={file.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(RscFileDownloadSection);
