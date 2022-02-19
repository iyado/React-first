import { DECREMENT, INCREMENT, INC_BY_VAL } from "../actions/types";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INC_BY_VAL:
      return { ...state, count: state.count + action.inc_value };
    default:
      return state;
  }
};

export default counterReducer;
