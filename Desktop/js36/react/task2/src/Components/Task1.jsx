import React, { useState } from "react";

const Task1 = () => {
  const [text, setText] = useState("Привет");
  const changeInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      {text}
      <input type="text" value={text} onChange={changeInput} />
    </div>
  );
};
export default Task1;
