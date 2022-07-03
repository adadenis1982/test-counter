import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { countReducer } from './reducers/counterReducer'
import { StoreState } from "./types/types";
import { CountAction } from "./actionCreators/counterAC";

export const store = createStore<StoreState, CountAction, any, any>(countReducer, composeWithDevTools());

