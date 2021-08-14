import BoardType from '../types/BoardType';
import JsonData1 from '../data/test-board-2.json';
import JsonDictionary from '../data/dictionary.json';
import RowBoxType from '../types/RowBoxType';
import BoxType from '../types/BoxType';

const GetBoardData = (): BoardType => {
  if (JsonData1.board.length !== 16) {
    throw new Error('Input data has no correct format');
  }

  const boardData: BoardType = {
    items: [
      { items: [] as BoxType[] } as RowBoxType,
      { items: [] as BoxType[] } as RowBoxType,
      { items: [] as BoxType[] } as RowBoxType,
      { items: [] as BoxType[] } as RowBoxType,
    ] as RowBoxType[],
  };

  let indexRow = 0;
  let indexColumn = 0;
  for (let i = 0; i < JsonData1.board.length; i++) {
    const letter = JsonData1.board[i];
    const boxItem: BoxType = {
      letter,
      selected: false,
      clickeable: false,
    };

    boardData.items[indexRow].items.push(boxItem);

    indexColumn++;
    if (indexColumn === 4) {
      indexRow++;
      indexColumn = 0;
    }
  }
  return boardData;
};

const GetDictionary = (): string[] => {
  return JsonDictionary.words;
};

export { GetBoardData, GetDictionary };
