import { memo } from "react";
import { RscText } from "../../text";
import { IFormErrorView } from "./FormErrorView.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./FormErrorView.scss";

const FormErrorView: React.FC<IFormErrorView> = (props) => {
  const { message } = props;

  return (
    <div className="rsc-form-error">
      <FontAwesomeIcon
        className="form-error-icon"
        icon={faCircleExclamation as IconProp}
      />
      <RscText type="span">{message}</RscText>
    </div>
  );
};

export default memo(FormErrorView);
