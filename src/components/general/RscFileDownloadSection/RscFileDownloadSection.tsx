import { memo } from "react";
import { RscText } from "../text";
import "./RscFileDownloadSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

/**
 * The properties of the `RscFileDownloadSection` component
 */
interface IRscFileDownloadSection {}

/**
 * The properties of a single `RscPdf` file component
 */
interface IRscPdf {
  /**
   * The name of the Pdf
   */
  name?: string;
  /**
   * The url to download the Pdf
   */
  url?: string;
}

const RscPdf: React.FC<IRscPdf> = (props) => {
  const { name } = props;

  return (
    <div className="rsc-pdf-container">
      <div className="rsc-pdf-form">
        <div className="rsc-pdf-icon">
          <FontAwesomeIcon icon={faFilePdf as IconProp} />
        </div>
      </div>
      <div className="rsc-pdf-action-container">
        <div className="rsc-pdf-name">{name}</div>
        <div className="rsc-actions">
          <FontAwesomeIcon icon={faFileDownload as IconProp} />
        </div>
      </div>
    </div>
  );
};

const RscFileDownloadSection: React.FC<IRscFileDownloadSection> = (props) => {
  const pdfList: IRscPdf[] = [
    {
      name: "Most asked questions",
    },
    {
      name: "The profits of adopting the blockchain",
    },
    {
      name: "Genuine use cases for the blockchain",
    },
  ];

  return (
    <section className="rsc-download-section">
      <div className="rsc-download-container">
        <div className="descr">
          <div className="text-container">
            <RscText
              className="download-title"
              type="h4"
              fontSize="24px"
              content="You want to know more about the Blockchain?"
            />
            <RscText
              type="span"
              fontSize="24px"
              content="Download some of the documents we prepared for you"
            />
          </div>
        </div>
        <div className="download">
          {pdfList.map((pdf) => {
            return <RscPdf name={pdf.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(RscFileDownloadSection);
