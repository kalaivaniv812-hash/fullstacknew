import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Input Focus Task</h2>

      <input type="text" ref={inputRef} placeholder="Enter Name" />

      <br />
      <br />

      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;