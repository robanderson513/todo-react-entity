import { useState } from "react";
import "./input.css";

interface InputData {
  label?: string;
  type?: string;
  required?: boolean;
  value?: string;
  valueChanged: (value: string) => void;
}

const Input = ({
  label = "",
  type = "text",
  required = false,
  value,
  valueChanged,
}: InputData) => {
  const [focused, toggleFocus] = useState(false);
  const [invalid, toggleInvalid] = useState(false);

  function onFocus() {
    toggleFocus(!focused);
  }

  function onBlur(value: string) {
    toggleFocus(!focused);
    toggleInvalid(required && !value);
  }

  return (
    <div className={`input-field ${invalid ? "invalid" : ""}`}>
      <label className={focused ? "active" : ""}>
        {label}
        {required ? "*" : ""}
      </label>
      <input
        type={type}
        defaultValue={value}
        required={required}
        onFocus={onFocus}
        onChange={(event) => valueChanged(event.target.value)}
        onBlur={(event) => onBlur(event.target.value)}
      ></input>
    </div>
  );
};
export default Input;
