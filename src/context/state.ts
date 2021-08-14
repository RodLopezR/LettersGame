import BoardType from '../types/BoardType';

export interface StateType {
  board: BoardType;
  lastIndexRow: any;
  lastindexColumn: any;
}

const State: StateType = {
  board: {
    items: [],
  },
  lastIndexRow: null,
  lastindexColumn: null,
};

export default State;
