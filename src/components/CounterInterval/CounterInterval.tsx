import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';

export interface Props {
  num: {
    str: string,
    val: number
  }
}

function CounterInterval({ num }: Props) {
  const counters = useAppSelector((state) => state.counters);
 
  const data = counters.find((el: { str: string; }) => el.str === num.str);

  const [value, setValue] = useState(data.val);

  setInterval(() => {
    setValue(value + 1);
  }, 1000);

  useEffect(() => {
    let timer = setInterval(() => {
      setValue(value + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return <h2>{value}</h2>;
}

export default CounterInterval;
