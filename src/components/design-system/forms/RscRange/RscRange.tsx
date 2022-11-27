import { memo } from "react";
import { IRscRange } from "./RscRange.types";
import "./RscRange.scss";
import React from "react";

const RscRange = React.forwardRef<HTMLInputElement, IRscRange>((props, ref) => {
  const {
    id,
    label,
    name,
    min,
    minLabel,
    maxLabel,
    value,
    max,
    step,
    onBlur,
    onChange,
  } = props;

  return (
    <div className="rsc-range">
      {label && <label htmlFor={id}>{label}</label>}
      <div className="rsc-range-component">
        <label>{minLabel}</label>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          ref={ref}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label>{maxLabel}</label>
      </div>
    </div>
  );
});

export default memo(RscRange);
