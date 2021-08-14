export const ACTIONS = {
  CLICK: 'CLICK',
};

export const actionClickInBox = (
  indexRow: number,
  indexColumn: number
): any => ({
  type: ACTIONS.CLICK,
  payload: { indexRow, indexColumn },
});
