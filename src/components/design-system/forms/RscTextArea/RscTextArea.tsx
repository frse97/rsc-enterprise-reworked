import { memo } from "react";
import { IRscTextArea } from "./RscTextArea.types";
import "./RscTextArea.scss";
import React from "react";

const RscTextArea = React.forwardRef<HTMLTextAreaElement, IRscTextArea>(
  (props, ref) => {
    const { label, name, onChange, onBlur, rows } = props;

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
  }
);

export default memo(RscTextArea);
