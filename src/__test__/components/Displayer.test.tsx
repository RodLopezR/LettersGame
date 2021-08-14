import { mount } from 'enzyme';
import Displayer from '../../components/Displayer';
import { BoardContext } from '../../context/context';
import { StateType } from '../../context/state';
import { GetBoardData, GetDictionary } from '../../services/BoardService';

describe('Displayer tests', () => {
  test('Normal render', () => {
    const actionsMock = {
      clickItem: jest.fn(),
      clearAll: jest.fn(),
    };
    const stateMock: StateType = {
      board: GetBoardData(),
      dictionary: GetDictionary(),
      letters: [],
      lastindexColumn: null,
      lastIndexRow: null,
    };

    const oMounted = mount(
      <BoardContext.Provider value={[stateMock, actionsMock]}>
        <Displayer />
      </BoardContext.Provider>
    );

    const oContainer = oMounted.find('.container');

    expect(oContainer).not.toBeNull();
  });
  test('Normal render with letters', () => {
    const actionsMock = {
      clickItem: jest.fn(),
      clearAll: jest.fn(),
    };
    const stateMock: StateType = {
      board: GetBoardData(),
      dictionary: GetDictionary(),
      letters: ['a', 'V'],
      lastindexColumn: null,
      lastIndexRow: null,
    };

    const oMounted = mount(
      <BoardContext.Provider value={[stateMock, actionsMock]}>
        <Displayer />
      </BoardContext.Provider>
    );

    const oContainer = oMounted.find('.container');

    expect(oContainer).not.toBeNull();
  });
  test('Normal render with letters and validate', () => {
    const actionsMock = {
      clickItem: jest.fn(),
      clearAll: jest.fn(),
    };
    const stateMock: StateType = {
      board: GetBoardData(),
      dictionary: GetDictionary(),
      letters: ['F', 'A', 'T'],
      lastindexColumn: null,
      lastIndexRow: null,
    };

    const oMounted = mount(
      <BoardContext.Provider value={[stateMock, actionsMock]}>
        <Displayer />
      </BoardContext.Provider>
    );

    const oContainer = oMounted.find('.container');
    expect(oContainer).not.toBeNull();
  });
});
