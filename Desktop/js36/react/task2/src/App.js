import React from "react";
import Task1 from "./Components/Task1";
import Task2 from "./Components/Task2";
import Card from "./Components/Card";
import Avatar from "./Components/Avatar";
import Task4 from "./Components/Task4";

const App = () => {
  const styleArr = [
    {
      width: "300px",
      height: "150px",
      backgroundColor: "red",
    },
  ];
  return (
    <div>
      <Task1 />
      <Task2 styleArr={styleArr} />
      <Card>
        <Avatar
          src="https://www.epochtimes.ru/assets/uploads/2022/02/ET_Orangutan_1-1200x800-1-e1645773609287.jpg"
          alt="я с Дианой"
        />
      </Card>
      <Task4 />
    </div>
  );
};

export default App;
