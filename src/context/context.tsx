import { createContext, FunctionComponent, useState } from 'react';
import { ClickInBlock, ClearAll as ClearAllFunction } from './actions';

import BoardType from '../types/BoardType';
import State, { StateType } from './state';

interface ContextProviderProps {
  board: BoardType;
  dictionary: string[];
}
interface ContextActionProps {
  clickItem: (indexRow: number, indexColumn: number) => void;
  clearAll: () => void;
}

export const BoardContext = createContext<[StateType, ContextActionProps]>([
  State,
  { clickItem: (a, b) => null, clearAll: () => null },
]);

export const BoardContextProvider: FunctionComponent<ContextProviderProps> = ({
  children,
  board,
  dictionary,
}) => {
  State.board = board;
  State.dictionary = dictionary;
  const [state, setState] = useState(State);

  const clickItem = (indexRow: number, indexColumn: number) => {
    //Validations
    if (indexColumn < 0 || indexColumn > 4 || indexRow < 0 || indexRow > 4) {
      return;
    }
    if (
      state.lastIndexRow === indexRow &&
      state.lastindexColumn === indexColumn
    ) {
      return;
    }

    setState(ClickInBlock(state, indexRow, indexColumn));
  };

  const clearAll = () => {
    setState(ClearAllFunction(state));
  };

  return (
    <BoardContext.Provider value={[state, { clickItem, clearAll }]}>
      {children}
    </BoardContext.Provider>
  );
};
