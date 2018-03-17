import { combineReducers } from "redux";
import counter, { Counter } from "./counter/reducer";
import { Dispatch as ReduxDispatch } from "redux";

export interface AppState {
  counter: Counter;
}

export type Dispatch = ReduxDispatch<AppState>;

// Add more
const appReducer = combineReducers<AppState>({
  counter
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = action.type === "RESET" ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
