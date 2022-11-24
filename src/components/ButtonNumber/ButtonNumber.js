import React from "react";

function ButtonNumber({ item, inputCurrentNumber }) {
  return (
    <button className="grey" onClick={inputCurrentNumber} value={item}>
      {item}
    </button>
  );
}

export default ButtonNumber;
