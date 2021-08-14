import { StateType } from './state';

const ClickInBlock = (
  state: StateType,
  indexRow: number,
  indexColumn: number
): StateType => {
  //Change state of box
  const newState = { ...state };
  newState.board.items[indexRow].items[indexColumn].selected = true;
  return newState;
};

export { ClickInBlock };
