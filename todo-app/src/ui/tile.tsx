import { MouseEventHandler } from "react";
import "./tile.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface ITile {
  header: string;
  subHeader: string;
  onEdit?: MouseEventHandler;
  onDelete?: MouseEventHandler;
}

const Tile = ({ header, subHeader, onEdit, onDelete }: ITile) => (
  <div className="tile-container">
    <h3>{header}</h3>
    <h4>{subHeader}</h4>
    <button onClick={onEdit}>
      <FiEdit />
    </button>
    <button onClick={onDelete}>
      <FiTrash2 />
    </button>
  </div>
);

export default Tile;
