import { useReducer, createContext, FunctionComponent } from 'react';
import BoardType from '../types/BoardType';
import reducer from './reducer';
import State, { StateType } from './state';

export const BoardContext = createContext<[StateType, any]>([State, {}]);

interface ContextProps {
  board: BoardType;
}

export const BoardContextProvider: FunctionComponent<ContextProps> = ({
  children,
  board,
}) => {
  State.board = board;
  const [state, dispatch] = useReducer(reducer, State);
  return (
    <BoardContext.Provider value={[state, dispatch]}>
      {children}
    </BoardContext.Provider>
  );
};
