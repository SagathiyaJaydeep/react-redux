import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decre, incre, incBy5 } from "./CounterSlice";

function ButtonUi() {
  const data = useSelector((state) => state.demo.count); // Read data from the store
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
          onClick={() => dispatch(incBy5(100))}
        >
          INCBY5
        </button>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Enter Value :</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Value"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ButtonUi;
