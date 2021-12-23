import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setCounter((previousState) => previousState + 1);
  };

  return (
    <>
      <button onClick={handleButtonClick}>CLICK</button>
      <p>Clicked: {counter} times</p>
    </>
  );
};
