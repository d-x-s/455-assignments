import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from '../actions';

function Counter() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div className="Counter">
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            {!isLogged ? <h3>Boolean state toggle</h3> : ''}
        </div>
    );
  }
  
  export default Counter;
  