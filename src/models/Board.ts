import {
  BoardLevel as BoardLevelType,
  Cursor as CursorType,
  Board as BoardType
} from "../types";
import { default as moveCursorPure } from "./Board/moveCursor";
import { default as trySetTile } from "./Board/trySetTile";
import { newBoardTile } from "./BoardTile";
import { partial } from "lodash";

const BOARD_WIDTH: number = 5;
const BOARD_HEIGHT: number = 5;

interface MoveCursorDeps {
  setCursor: Function;
  cursor: CursorType;
}
const moveCursor: Function = (deps: MoveCursorDeps, nesw: number): Function =>
  moveCursorPure({ BOARD_HEIGHT, BOARD_WIDTH, ...deps }, nesw);

function getDefaultBoard(): BoardType {
  const a: Function = partial(newBoardTile, " "); //() => newBoardTile(" ");
  const newLevel: Function = (): BoardLevelType => [
    [a(), a(), a(), a(), a()],
    [a(), a(), a(), a(), a()],
    [a(), a(), a(), a(), a()],
    [a(), a(), a(), a(), a()],
    [a(), a(), a(), a(), a()]
  ];
  return new Map([[0, newLevel()], [1, newLevel()], [2, newLevel()]]);
}

export { getDefaultBoard, moveCursor, trySetTile };
