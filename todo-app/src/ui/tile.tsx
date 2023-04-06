import { MouseEventHandler } from "react";
import "./tile.css";
import { FiEdit } from "react-icons/fi";

interface ITile {
  header: string;
  subHeader: string;
  editMethod?: MouseEventHandler;
  deleteMethod?: MouseEventHandler;
}

const Tile = ({ header, subHeader, editMethod, deleteMethod }: ITile) => (
  <div className="tile-container">
    <h3>{header}</h3>
    <h4>{subHeader}</h4>
    {/**TODO Fix color **/}
    <button onClick={editMethod}>
      <FiEdit />
    </button>
  </div>
);

export default Tile;
