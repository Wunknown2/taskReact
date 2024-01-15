import React from "react";

const Card = (props) => {
  return (
    <div style={{ border: "2px solid grey", padding: "10px" }}>
      {props.children}
    </div>
  );
};

export default Card;
