import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "../../../helpers";

export const Input = ({
  placeholder,
  inputMode,
  onChange,
  autoComplete,
  required,
  type,
}) => (
  <input
    className="input"
    placeholder={capitalize(placeholder)}
    inputMode={inputMode}
    onChange={onChange}
    autoComplete={autoComplete}
    required={required}
    type={type}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  inputMode: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Enter in some text",
  inputMode: "text",
  autoComplete: "text",
  required: false,
  type: "text",
};

export default Input;
