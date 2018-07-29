import * as React from "react";
import { Props } from "./GameScreen.props";
import styles from "./GameScreen.styles";
import { BoardLevel } from "../../types/";
import { Level } from "../";

type LevelEntry = [number, BoardLevel];

const renderLevel: React.ComponentType<Object> = (
  levelEntry: LevelEntry
): React.ReactElement<"div"> => {
  return (
    <div
      style={styles[`gameScreen__level${levelEntry[0]}`]}
      key={levelEntry[0]}
    >
      <Level level={levelEntry[1]} />
    </div>
  );
};

const GameScreen: React.ComponentType<Props> = (
  props: Props
): React.ReactElement<"div"> => {
  const boardLevels: Array<LevelEntry> = Array.from(props.board.entries());
  return (
    <div style={styles.gameScreen__ctnr}>{boardLevels.map(renderLevel)}</div>
  );
};

export default GameScreen;
