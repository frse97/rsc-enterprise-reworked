import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FilePdfIcon } from "../../../../icons";
import { IRscPdf } from "../RscFileDownloadSection.types";

export const RscPdf: React.FC<IRscPdf> = (props) => {
  const { name } = props;

  return (
    <div className="rsc-pdf-container">
      <div className="rsc-pdf-form">
        <div className="rsc-pdf-icon">
          <FilePdfIcon />
        </div>
      </div>
      <div className="rsc-pdf-action-container">
        <div className="rsc-pdf-name">{name}</div>
        <div className="rsc-actions">
          <FontAwesomeIcon icon={faCloudArrowDown as IconProp} />
        </div>
      </div>
    </div>
  );
};
