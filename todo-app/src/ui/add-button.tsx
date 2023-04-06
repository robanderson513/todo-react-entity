import { MouseEventHandler } from "react";
import { HiPlus } from "react-icons/hi";
import "./add-button.css";

interface AddButtonEvent {
  handleClick: MouseEventHandler;
}

const AddButton = ({ handleClick }: AddButtonEvent) => (
  <button className="add-button primary" onClick={handleClick}>
    <HiPlus />
  </button>
);
export default AddButton;
