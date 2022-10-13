import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FilePdfIcon } from "../../../../icons";
import { colors } from "../../../../shared";
import { RscButton } from "../../../button";
import { RscContainer } from "../../../container";
import { IRscPdf } from "../RscFileDownloadSection.types";

export const RscPdf: React.FC<IRscPdf> = (props) => {
  const { name } = props;

  return (
    <RscContainer
      type="div"
      className="rsc-pdf-container"
      flex
      direction="vertical"
      alignCenter
    >
      <RscContainer type="div" className="rsc-pdf-icon">
        <FilePdfIcon />
      </RscContainer>
      <RscContainer type="div" className="rsc-pdf-name">
        {name}
      </RscContainer>
      <RscContainer type="div" className="rsc-pdf-actions">
        <RscButton
          color={colors.light.callToAction}
          icon={<FontAwesomeIcon icon={faCloudArrowDown as IconProp} />}
          onClick={() => {}}
        />
      </RscContainer>
    </RscContainer>
  );
};
