import { ClickInBlock, ClearAll } from '../../context/actions';
import { StateType } from '../../context/state';
import { GetBoardData, GetDictionary } from '../../services/BoardService';

describe('BoxComponent tests', () => {
  test('Normal render and click', () => {
    const boardData = GetBoardData();
    const dictionaryData = GetDictionary();
    const state: StateType = {
      board: boardData,
      dictionary: dictionaryData,
      lastIndexRow: null,
      lastindexColumn: null,
      letters: [],
    };

    const oResponse = ClickInBlock(state, 1, 1);
    expect(oResponse).not.toBeNull();
  });
  test('Normal render and click', () => {
    const boardData = GetBoardData();
    const dictionaryData = GetDictionary();
    const state: StateType = {
      board: boardData,
      dictionary: dictionaryData,
      lastIndexRow: null,
      lastindexColumn: null,
      letters: [],
    };

    const oResponse = ClearAll(state);
    expect(oResponse).not.toBeNull();
  });
});
