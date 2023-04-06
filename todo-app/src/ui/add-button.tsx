import { MouseEventHandler } from "react";
import { HiPlus } from "react-icons/hi";
import "./add-button.css";

interface AddButtonEvent {
  handleClick: MouseEventHandler;
}

const AddButton = ({ handleClick }: AddButtonEvent) => {
  return (
    <button className="add-button" onClick={handleClick}>
      <HiPlus />
    </button>
  );
};
export default AddButton;
