import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decre, incre, incBy5, setInputValue } from "./CounterSlice";

function ButtonUi() {
  const data = useSelector((state) => state.demo.count); // Read data from the store
  const InputData = useSelector((state) => state.demo.inputValue); // Read data from the store
  const dispatch = useDispatch(); // Get All Action(Functions) from the store
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
        placeholder="Enter Value"
        value={InputData}
        onChange={(e) => dispatch(setInputValue(Number(e.target.value) || 0))}
      />
      <div>
        <button style={buttonStyle} onClick={() => dispatch(incre())}>
          INC
        </button>
        <button style={buttonStyle} onClick={() => dispatch(decre())}>
          DEC
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch(incBy5(Number(InputData)))}
        >
          IncByValue
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "skyblue",
  borderRadius: "5px",
};

export default ButtonUi;
