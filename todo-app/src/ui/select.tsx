import { useEffect, useState } from "react";
import { KeyDescription } from "../interfaces/key-description.interface";
import "./select.css";

interface SelectData {
  label?: string;
  required?: boolean;
  value?: string;
  data: KeyDescription[];
  optionSelected: (option: KeyDescription) => void;
}

const Select = ({
  label = "",
  required = false,
  value = "",
  data,
  optionSelected,
}: SelectData) => {
  const [activeValue, changeValue] = useState("");
  const [invalid, toggleInvalid] = useState(false);
  const [showDropdown, toggleDropdown] = useState(false);

  useEffect(() => {
    changeValue(value);
  }, []);

  const selectOption = (option: KeyDescription) => {
    changeValue(option.key);
    optionSelected(option);
    toggleDropdown(false);
  };

  return (
    <div>
      {data.length > 0 && (
        <div>
          <div
            className={`select-field ${invalid ? "invalid" : ""}
        ${showDropdown ? "active" : ""}`}
          >
            <label>
              {label}
              {required ? "*" : ""}
            </label>
            <div
              className="select-container"
              onClick={() => toggleDropdown(!showDropdown)}
            >
              <span>
                {data.find((option) => option.key === activeValue)?.description}
              </span>
              <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                focusable="false"
              >
                <path
                  d="M7 10l5 5 5-5z"
                  fill={`${showDropdown ? "#61dafb" : "#fafafa"}`}
                ></path>
              </svg>
            </div>
            <div className={`dropdown ${showDropdown ? "active" : ""}`}>
              {data.map((option) => (
                <span
                  key={option.key}
                  className={`option ${
                    activeValue === option.key ? "selected" : ""
                  }`}
                  onClick={() => selectOption(option)}
                >
                  {option.description}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`${showDropdown ? "select-backdrop" : ""} `}
            onClick={() => toggleDropdown(!showDropdown)}
          ></div>
        </div>
      )}
    </div>
  );
};
export default Select;
