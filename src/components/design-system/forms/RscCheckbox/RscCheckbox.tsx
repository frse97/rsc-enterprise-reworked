import { memo } from "react";
import { IRscCheckbox } from "./RscCheckbox.types";
import "./RscCheckbox.scss";

const RscCheckbox: React.FC<IRscCheckbox> = (props) => {
  const { label, name, ref, onChange, onBlur } = props;

  return (
    <div className="rsc-checkbox">
      <input
        type="checkbox"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {label && <label>{label}</label>}
    </div>
  );
};

export default memo(RscCheckbox);
