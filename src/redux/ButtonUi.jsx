import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decre, incre, incBy5, setInputValue } from "./CounterSlice";

function ButtonUi() {
  const data = useSelector((state) => state.demo.count); // Read data from the store
  const InputData = useSelector((state) => state.demo.inputValue); // Read data from the store
  const dispatch = useDispatch(); // Get All Action(Functions) from the store

  console.log(data);
  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
        justifyContent: "center",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      <h1>{data}</h1>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Enter Value"
        value={InputData}
        onChange={(e) => dispatch(setInputValue(Number(e.target.value) || 0))}
      />
      <div>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "skyblue",
            borderRadius: "5px",
          }}
          onClick={() => dispatch(incre())}
        >
          INC
        </button>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "skyblue",
            borderRadius: "5px",
          }}
          onClick={() => dispatch(decre())}
        >
          DEC
        </button>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "skyblue",
            borderRadius: "5px",
          }}
          onClick={() => dispatch(incBy5(Number(InputData)))}
        >
          INCBY5
        </button>
      </div>
    </div>
  );
}

export default ButtonUi;
