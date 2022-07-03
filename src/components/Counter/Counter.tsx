import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import * as actions from '../../redux/actionCreators/counterAC';

export interface Props {
  num: {
    str: string;
    val: number;
  };
}

function Counter({ num }: Props) {
  const counters = useAppSelector((state) => state.counters);
  const dispatch = useAppDispatch();

  const data = counters.find((el: { str: string }) => el.str === num.str);

  const [value, setValue] = useState(data.val);

  const increment = () => {
    for (let i = 0; i < counters.length; i += 1) {
      if (num.str === counters[i].str) {
        counters[i].val += 1;
        dispatch(actions.getCount(counters[i]));
        setValue(counters[i].val);
      }
    }
  };

  const decrement = () => {
    for (let i = 0; i < counters.length; i += 1) {
      if (num.str === counters[i].str) {
        counters[i].val -= 1;
        dispatch(actions.getCount(counters[i]));
        setValue(counters[i].val);
      }
    }
  };

  return (
    <>
      <h2>{value}</h2>
      <button onClick={increment}>+</button>{' '}
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Counter;
