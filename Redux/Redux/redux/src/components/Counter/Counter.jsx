import React from "react";

import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../../store/counterSlice";

function Counter() {
    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter.counter);

    const show = useSelector((state) => state.counter.showCounter);

    function incrementHandler() {
        // dispatch({ type: "increment" });
        dispatch(counterActions.increment());
    }

    function decrementHandler() {
        // dispatch({ type: "decrement" });
        dispatch(counterActions.decrement());
    }

    function increaseHandler() {
        // dispatch({ type: "increase", amount: 5 });
        dispatch(counterActions.increase(5));
    }

    function decreaseHandler() {
        // dispatch({ type: "decrease", amount: 5 });
        dispatch(counterActions.decrease(5));
    }

    function toggleCounterHandler() {
        // dispatch({ type: "toggle" });
        dispatch(counterActions.toggleCounter());
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decreaseHandler}>Decrease by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
}

export default Counter;
