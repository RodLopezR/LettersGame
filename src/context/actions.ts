import { StateType } from './state';
import BoxType from '../types/BoxType';
import RowBoxType from '../types/RowBoxType';

const ClickInBlock = (
  state: StateType,
  indexRow: number,
  indexColumn: number
): StateType => {
  //Change state of box
  const newState = { ...state };
  newState.board.items[indexRow].items[indexColumn].selected = true;

  //Enable nearby neighbors
  newState.board.items.forEach((row: RowBoxType, iRow: number) => {
    row.items.forEach((box: BoxType, iColumn: number) => {
      const maxLimitY = indexRow + 1;
      const minLimitY = indexRow - 1;
      const maxLimitX = indexColumn + 1;
      const minLimitX = indexColumn - 1;

      const isNeighbors =
        iRow <= maxLimitY &&
        iRow >= minLimitY &&
        iColumn <= maxLimitX &&
        iColumn >= minLimitX;
      box.clickeable = isNeighbors;
    });
  });

  //Add letter into historial
  const { letter } = newState.board.items[indexRow].items[indexColumn];
  newState.letters.push(letter);

  //Last value validation
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
  return newState;
};

export { ClickInBlock, ClearAll };
