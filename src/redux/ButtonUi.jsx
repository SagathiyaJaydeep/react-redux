import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decre, incre } from "./CounterSlice";

function ButtonUi() {
  const data = useSelector((state) => state.demo.count);
  const dispatch = useDispatch();
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
      </div>
    </div>
  );
}

export default ButtonUi;
