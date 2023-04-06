import { useState } from "react";
import "./input.css";

interface InputData {
  label?: string;
  type?: string;
}

const Input = ({ label = "", type = "text" }: InputData) => {
  const [focused, toggleFocus] = useState(false);

  function toggleInputFocus() {
    toggleFocus(!focused);
  }

  return (
    <div className="input-field">
      <label className={focused ? "active" : ""}>{label}</label>
      <input
        type={type}
        onFocus={toggleInputFocus}
        onBlur={toggleInputFocus}
      ></input>
    </div>
  );
};
export default Input;
