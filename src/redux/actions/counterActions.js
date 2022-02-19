import { DECREMENT, INCREMENT, INC_BY_VAL } from "./types";

export const incrementAction = (dispatch) => {
  return dispatch({
    type: INCREMENT,
  });
};

export const decrementAction = (dispatch) => {
  return dispatch({
    type: DECREMENT,
  });
};
export const inc_by_valAction = (val, dispatch) => {
  return dispatch({
    type: INC_BY_VAL,
    inc_value: val,
  });
};
