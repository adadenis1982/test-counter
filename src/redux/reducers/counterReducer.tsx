import { CountAction, TypeAddCounter, TypeCount } from "../actionCreators/counterAC";
import { StoreState } from "../types/types";
import { COUNT, DELETE_COUNTER, ADD_COUNTER } from "../actionTypes/counterAT";

export const countReducer = (state: StoreState = { counters: [] }, action: CountAction ): StoreState => {
  switch (action.type) {
    case COUNT:
      const plus = action as TypeCount;
      return { ...state, counters: state.counters.map(el =>  {
        if(el.str === plus.payload.str) {
         return el = plus.payload
        }
        return el;
      })};
    case ADD_COUNTER:
      const data = action as TypeAddCounter;
      return { ...state, counters: [...state.counters, data.payload] };
    case DELETE_COUNTER:
      return { ...state, counters: state.counters.splice(1)};
    default:
      return state;
  }
}
