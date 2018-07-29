import { moveCursor, trySetTile } from "../models/Board";
import { Cursor as CursorType } from "../types/Cursor";
import { Board as BoardType } from "../types/Board";

interface HandleKeyProps {
  setCursor: Function;
  cursor: CursorType;
  setBoard: Function;
  board: BoardType;
}

export default function handleKey(props: HandleKeyProps, event: KeyboardEvent) {
  if (event.code === "ArrowLeft") {
    moveCursor(props, -1)();
  } else if (event.code === "ArrowRight") {
    moveCursor(props, 1)();
  } else if (event.code === "ArrowDown") {
    moveCursor(props, 2)();
  } else if (event.code === "ArrowUp") {
    moveCursor(props, -2)();
  } else if (
    (event.keyCode >= 65 && event.keyCode <= 90) || // a-z
    (event.keyCode >= 48 && event.keyCode <= 57) // 0-9
    //   (event.keyCode >= 186 && event.keyCode <= 192) // 0-9
    //   (event.keyCode >= 219 && event.keyCode <= 222) // 0-9
    // (event.keyCode >= 111 && event.keyCode <= 222) // 0-9
  ) {
    trySetTile(props.board)(props, event.key)();

    // todo: different keyboard mappings will have different shift-modified things
    // 32 = space, 8 = bsp, 46 del
    // 33 = pgup, 34 = pgdn
  }
}

/**
semi-colon	186
equal sign	187
comma	188
dash	189
period	190
forward slash	191
grave accent	192
open bracket	219
back slash	220
close braket	221
single quote	222
 */
