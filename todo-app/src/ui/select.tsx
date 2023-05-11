import { useState, ChangeEventHandler } from "react";
import { KeyDescription } from "../interfaces/key-description.interface";
import "./select.css";

interface SelectData {
  label?: string;
  required?: boolean;
  value?: string;
  data: KeyDescription[];
  onChange: ChangeEventHandler;
}

const Select = ({
  label = "",
  required = false,
  value,
  data,
  onChange,
}: SelectData) => {
  const [invalid, toggleInvalid] = useState(false);
  const [showDropdown, toggleDropdown] = useState(false);

  return (
    <div>
      <div className={`select-field ${invalid ? "invalid" : ""}`}>
        <label className={showDropdown ? "active" : ""}>
          {label}
          {required ? "*" : ""}
        </label>
        <div
          className="select-container"
          onClick={() => toggleDropdown(!showDropdown)}
        >
          <span>{value}</span>
          <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false">
            <path
              d="M7 10l5 5 5-5z"
              fill={`${showDropdown ? "#61dafb" : "#fafafa"}`}
            ></path>
          </svg>
        </div>
        <div className={`dropdown ${showDropdown ? "active" : ""}`}>
          {data.map((option) => (
            <option value={option.key}>{option.description}</option>
          ))}
        </div>
      </div>

      <div
        className={`${showDropdown ? "select-backdrop" : ""} `}
        onClick={() => toggleDropdown(!showDropdown)}
      ></div>
    </div>
  );
};
export default Select;
