import { memo } from "react";
import { RscContainer } from "../../container";
import { RscText, RscTitle } from "../../text";
import { RscPdf } from "./components";
import "./RscFileDownloadSection.scss";
import { IRscFileDownloadSection } from "./RscFileDownloadSection.types";

const RscFileDownloadSection: React.FC<IRscFileDownloadSection> = (props) => {
  const { fileList } = props;

  return (
    <RscContainer
      type="section"
      className="rsc-download-section"
      flex
      alignCenter
    >
      <RscContainer
        type="div"
        className="download-description"
        flex
        direction="vertical"
        justifyContentCenter
      >
        <RscContainer type="div" className="text">
          <RscTitle level={4} className="download-title" fontSize="16px">
            You want to know more about the Blockchain?
          </RscTitle>
          <RscText type="span" fontSize="14px">
            Download some of the documents we prepared for you
          </RscText>
        </RscContainer>
      </RscContainer>
      <RscContainer
        type="div"
        flex
        flexGrow
        justifyContentCenter
        alignCenter
        className="download-actions"
      >
        {fileList.map((file, i) => {
          return <RscPdf key={i} name={file.name} />;
        })}
      </RscContainer>
    </RscContainer>
  );
};

export default memo(RscFileDownloadSection);
