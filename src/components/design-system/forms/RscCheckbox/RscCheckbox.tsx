import { memo } from "react";
import { IRscCheckbox } from "./RscCheckbox.types";
import "./RscCheckbox.scss";
import React from "react";

const RscCheckbox = React.forwardRef<HTMLInputElement, IRscCheckbox>(
  (props, ref) => {
    const { label, name, onChange, onBlur } = props;

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
  }
);

export default memo(RscCheckbox);
