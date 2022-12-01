import { memo } from "react";
import { IRscInput } from "./RscInput.types";
import "./RscInput.scss";
import React from "react";

const RscInput = React.forwardRef<HTMLInputElement, IRscInput>((props, ref) => {
  const {
    ariaInvalid,
    label,
    name,
    type = "text",
    onChange,
    onBlur,
    style,
  } = props;

  return (
    <div className="rsc-input" style={style}>
      {label && <label>{label}</label>}
      <input
        aria-invalid={ariaInvalid}
        type={type}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
});

export default memo(RscInput);
