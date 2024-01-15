import React from "react";

const Task2 = (props) => {
  return (
    <div>
      <h2>Квадрат</h2>
      <div>
        {props.styleArr.map((style, index) => (
          <div
            key={index}
            style={{
              width: style.width,
              height: style.height,
              backgroundColor: style.backgroundColor,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Task2;
