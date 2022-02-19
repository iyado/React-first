import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  inc_by_valAction,
} from "../redux/actions/counterActions";

export default function Counter() {
  const countState = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(countState);
  const handelIncremenet = () => {
    //SetCount(count + 1);
    incrementAction(dispatch);
  };
  const handelDecremenet = () => {
    //SetCount(count - 1);
    decrementAction(dispatch);
  };
  const handelIncremenetByVal = (val) => {
    //SetCount(count - 1);
    (inc_by_valAction(val,dispatch));
  };
  return (
    <div>
      <p>{countState}</p>
      <button onClick={handelIncremenet}>Incremenet</button>
      <button onClick={handelDecremenet}>Decremenet</button>
      <button onClick={() => handelIncremenetByVal(3)}>INC_BY_3</button>
    </div>
  );
}
