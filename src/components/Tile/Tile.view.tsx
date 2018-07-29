import * as React from "react";
// import { Props } from "./Level.props";
import styles from "./Tile.styles";
import { BoardTile } from "../../types/";

type Props = {
  tile: BoardTile;
};

const Tile: React.ComponentType<Props> = ({
  tile
}: Props): React.ReactElement<"span"> => {
  const useChr: string = tile.chr === " " ? " " : tile.chr;
  return <span style={styles.tile}>{useChr}</span>;
};

export default Tile;
