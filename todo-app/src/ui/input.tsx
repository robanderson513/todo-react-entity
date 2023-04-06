import { useState, ChangeEventHandler } from "react";
import "./input.css";

interface InputData {
  label?: string;
  type?: string;
  required?: boolean;
  onChange: ChangeEventHandler;
}

const Input = ({
  label = "",
  type = "text",
  required = false,
  onChange,
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
        required={required}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={(event) => onBlur(event.target.value)}
      ></input>
    </div>
  );
};
export default Input;
