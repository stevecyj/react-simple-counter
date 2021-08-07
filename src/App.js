import "./App.css";

import { useState } from "react";

const defaultNumber = 20;
function App() {
  let [counter, setCounter] = useState(defaultNumber);

  const hidden = {
    visibility: counter >= 10 && "hidden",
  };

  const handleClick = (type) => (e) => {
    console.log(e.target);
    if (type === "increase") {
      setCounter((prevCounter) => prevCounter + 1);
    } else if (type === "decrease") {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };
  // const handleIncrease = () => {
  //   console.log("handleIncrease", counter);
  //   setCounter(counter + 1);
  // };

  // const handleDecrease = () => {
  //   console.log("handleDecrease", counter);
  //   setCounter(counter - 1);
  // };

  return (
    <div className="container">
      <div
        className="chevron chevron-up"
        onClick={handleClick("increase")}
        style={hidden}
      ></div>
      <div className="number">{counter}</div>
      <div
        className="chevron chevron-down"
        onClick={handleClick("decrease")}
      ></div>
    </div>
  );
}

export default App;
