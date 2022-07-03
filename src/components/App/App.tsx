import './App.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as actions from '../../redux/actionCreators/counterAC';
import Counter from '../Counter/Counter';
import CounterInterval from '../CounterInterval/CounterInterval';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const counters = useAppSelector((state) => state.counters);
  const dispatch = useAppDispatch();

  const value = counters.reduce((sum: number, el: { val: number; }) => sum + el.val, 0);

  for (let i = 3; i < counters.length; i += 4) {
  counters[i].id = i;
  } 

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch(actions.addCounter({ str: uuidv4(), val: value }))
        }
      >
        Добавить счетчик
      </button>{' '}
      <button onClick={() => dispatch(actions.deleteCounter())}>
        Удалить счетчик
      </button>
      {counters.map((el: {id: number, str: string, val: number}) =>
      el.id ? <CounterInterval key={uuidv4()} num={el} />: <Counter key={uuidv4()} num={el} />)}
    </div>
  );
}

export default App;
