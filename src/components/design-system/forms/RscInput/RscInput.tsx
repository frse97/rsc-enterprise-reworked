import { memo } from "react";
import { IRscInput } from "./RscInput.types";
import "./RscInput.scss";

const RscInput: React.FC<IRscInput> = (props) => {
  const { label, name, ref, type = "text", onChange, onBlur } = props;

  return (
    <div className="rsc-input">
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default memo(RscInput);
