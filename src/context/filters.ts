import { StateType } from './state';

const ClickInBlock = (
  state: StateType,
  indexRow: number,
  indexColumn: number
): StateType => {
  //Change state of box
  const newState = { ...state };
  newState.board.items[indexRow].items[indexColumn].selected = true;

  //Add letter into historial
  const { letter } = newState.board.items[indexRow].items[indexColumn];
  newState.letters.push(letter);

  newState.lastIndexRow = indexRow;
  newState.lastindexColumn = indexColumn;
  return newState;
};

const ClearAll = (state: StateType): StateType => {
  const newState = { ...state };
  newState.board.items.forEach((row) => {
    row.items.forEach((box) => {
      box.selected = false;
      box.clickeable = false;
    });
  });
  newState.letters = [];
  return { ...newState };
};

export { ClickInBlock, ClearAll };
