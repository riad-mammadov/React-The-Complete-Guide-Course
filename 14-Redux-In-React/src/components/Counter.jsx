import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);
  const counter = useSelector((state) => state.counter.counter);

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function incrementByFiveHandler() {
    dispatch(counterActions.increase(5));
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
