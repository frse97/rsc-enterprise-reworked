import { memo } from "react";
import { IRscRadio } from "./RscRadio.types";
import "./RscRadio.scss";

const RscRadio: React.FC<IRscRadio> = (props) => {
  const { id, label, name, value, ref, onBlur, onChange } = props;

  return (
    <div className="rsc-radio">
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        type="radio"
      />
    </div>
  );
};

export default memo(RscRadio);
