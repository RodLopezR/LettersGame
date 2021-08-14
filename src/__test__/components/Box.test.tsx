import { mount } from 'enzyme';

import BoxType from '../../types/BoxType';
import BoxComponent from '../../components/Box';
import { StateType } from '../../context/state';
import { GetBoardData, GetDictionary } from '../../services/BoardService';
import { BoardContext } from '../../context/context';

describe('BoxComponent tests', () => {
  test('Normal render and click', () => {
    const box: BoxType = {
      letter: "A",
      clickeable: false,
      selected: false,
    };
    const indexRow = 1;
    const indexColumn = 1;

    const oMounted = mount(
      <BoxComponent box={box} indexRow={indexRow} indexColumn={indexColumn}/>
    );

    const oBox = oMounted.find('.box');
    oBox.simulate("click");
    oMounted.update();

    expect(oBox).not.toBeNull();
  });
  test('Normal render and click into selected box', () => {
    const box: BoxType = {
      letter: "A",
      clickeable: true,
      selected: true,
    };
    const indexRow = 1;
    const indexColumn = 1;

    const oMounted = mount(
      <BoxComponent box={box} indexRow={indexRow} indexColumn={indexColumn}/>
    );

    const oBox = oMounted.find('.box');
    oBox.simulate("click");
    oMounted.update();

    expect(oBox).not.toBeNull();
  });
  test('Normal render and click into neighbor box', () => {
    const box: BoxType = {
      letter: "A",
      clickeable: true,
      selected: false,
    };
    const indexRow = 1;
    const indexColumn = 1;

    const oMounted = mount(
      <BoxComponent box={box} indexRow={indexRow} indexColumn={indexColumn}/>
    );

    const oBox = oMounted.find('.box');
    oBox.simulate("click");
    oMounted.update();

    expect(oBox).not.toBeNull();
  });
});
test('Normal render with letters', () => {
  const actionsMock = {
    clickItem: jest.fn(),
    clearAll: jest.fn(),
  };
  const stateMock:StateType = {
    board: GetBoardData(),
    dictionary: GetDictionary(),
    letters: ["F", "A", "T"],
    lastindexColumn: null,
    lastIndexRow: null,
  }
  const box: BoxType = {
    letter: "A",
    clickeable: true,
    selected: false,
  };
  const indexRow = 1;
  const indexColumn = 1;

  const oMounted = mount(
    <BoardContext.Provider value={[stateMock, actionsMock]}>
      <BoxComponent box={box} indexRow={indexRow} indexColumn={indexColumn}/>
    </BoardContext.Provider>
  );

  const oBox = oMounted.find('.box');
  oBox.simulate("click");
  oMounted.update();

  expect(oBox).not.toBeNull();
});
