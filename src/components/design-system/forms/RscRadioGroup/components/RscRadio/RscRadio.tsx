import { memo } from "react";
import { IRscRadio } from "./RscRadio.types";
import "./RscRadio.scss";
import React from "react";

const RscRadio = React.forwardRef<HTMLInputElement, IRscRadio>((props) => {
  const { id, label, name, value, onBlur, onChange } = props;

  return (
    <div className="rsc-radio">
      <input
        onBlur={onBlur}
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        type="radio"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
});

export default memo(RscRadio);
