import { memo } from "react";
import { IRscTextArea } from "./RscTextArea.types";
import "./RscTextArea.scss";

const RscTextArea: React.FC<IRscTextArea> = (props) => {
  const { label, name, ref, onChange, onBlur, rows } = props;

  return (
    <div className="rsc-textarea">
      {label && <label>{label}</label>}
      <textarea
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
      />
    </div>
  );
};

export default memo(RscTextArea);
