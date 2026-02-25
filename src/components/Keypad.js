// Code Keypad Component Here
import React from "react";

function Keypad() {
  // when the input changes, log a message
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;