import React from "react";

function ButtonUi() {
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
      <h1>10</h1>
      <div>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "skyblue",
            borderRadius: "5px",
          }}
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
        >
          DEC
        </button>
      </div>
    </div>
  );
}

export default ButtonUi;
