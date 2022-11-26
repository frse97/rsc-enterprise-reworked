import { memo } from "react";
import cs from "classnames";
import { RscRadio } from "./components";
import { IRscRadioGroup } from "./RscRadioGroup.types";
import "./RscRadioGroup.scss";

const RscRadioGroup: React.FC<IRscRadioGroup> = (props) => {
  const {
    id,
    name,
    label,
    options,
    onChange,
    onBlur,
    ref,
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
            name={name}
            value={option.value}
            id={option.id}
            label={option.label}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        ))}
      </>
    </div>
  );
};

export default memo(RscRadioGroup);
