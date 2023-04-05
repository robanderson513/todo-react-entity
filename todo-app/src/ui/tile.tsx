import "./tile.css";

interface ITile {
  header: string;
  subHeader: string;
}

const Tile = ({ header, subHeader }: ITile) => (
  <div className="tile-container">
    <h3>{header}</h3>
    <h4>{subHeader}</h4>
  </div>
);

export default Tile;
