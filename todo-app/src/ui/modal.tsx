import { MouseEventHandler, ReactElement } from "react";
import "./modal.css";

interface ModalData {
  toggleDialog: MouseEventHandler;
  header: string;
  children: ReactElement[];
}

const Modal = ({ toggleDialog, header, children }: ModalData) => {
  function getComponent(key: string) {
    return children.filter((comp) => comp.key === key);
  }

  return (
    <div>
      <div className="dialog-background" onClick={toggleDialog}></div>
      <div className="dialog-container">
        <h5 className="dialog-header">{header}</h5>
        <div className="dialog-content">{getComponent("content")}</div>
        <hr />
        <div className="dialog-actions">{getComponent("actions")}</div>
      </div>
    </div>
  );
};
export default Modal;
