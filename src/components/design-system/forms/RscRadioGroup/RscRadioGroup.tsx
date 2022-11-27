import { memo } from "react";
import cs from "classnames";
import { RscRadio } from "./components";
import { IRscRadioGroup } from "./RscRadioGroup.types";
import "./RscRadioGroup.scss";
import React from "react";

const RscRadioGroup = React.forwardRef<HTMLInputElement, IRscRadioGroup>(
  (props, ref) => {
    const {
      id,
      name,
      label,
      options,
      onChange,
      onBlur,
      orientation = "vertical",
    } = props;

    const className = cs(
      "rsc-radio-group",
      orientation === "horizontal"
        ? "radio-group-horizontal"
        : "radio-group-vertical"
    );

    return (
      <div id={id} className={className}>
        {label && <label htmlFor={id}>{label}</label>}
        <>
          {options?.map((option) => (
            <RscRadio
              ref={ref}
              key={option.id}
              name={name}
              value={option.value}
              id={option.id}
              label={option.label}
              onChange={onChange}
              onBlur={onBlur}
            />
          ))}
        </>
      </div>
    );
  }
);

export default memo(RscRadioGroup);
