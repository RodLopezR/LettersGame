import BoardType from '../types/BoardType';

export interface StateType {
  board: BoardType;
  lastIndexRow: any;
  lastindexColumn: any;
  letters: string[];
}

const State: StateType = {
  board: {
    items: [],
  },
  lastIndexRow: null,
  lastindexColumn: null,
  letters: [],
};

export default State;
