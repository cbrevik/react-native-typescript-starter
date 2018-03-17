import { INCREMENT, DECREMENT } from "./types";

export interface Counter {
  count: number;
}

const initialState = {
  count: 0
};

export default function counterReducer(
  state: Counter = initialState,
  action
): Counter {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
