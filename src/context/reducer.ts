import { ClickInBlock } from './filters';
import { ACTIONS } from './actions';
import initialState, { StateType } from './state';

interface ActionProp {
  type: string;
  payload: any;
}

const reducer = (state = initialState, action: ActionProp): StateType => {
  switch (action.type) {
    case ACTIONS.CLICK:
      const { indexColumn, indexRow } = action.payload;
      if (indexColumn < 0 || indexColumn > 4 || indexRow < 0 || indexRow > 4) {
        return state;
      }
      if (
        state.lastIndexRow === indexRow &&
        state.lastindexColumn === indexColumn
      ) {
        return state;
      }
      return ClickInBlock(state, indexRow, indexColumn);
    default:
      throw new Error();
  }
};

export default reducer;
