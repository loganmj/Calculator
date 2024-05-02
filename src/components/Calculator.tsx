import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import { useState } from "react";

const Calculator = () => {
  const [displayText, setDisplayText] = useState("0");

  return (
    <>
      <div id="display">
        <CalculatorDisplay displayText={displayText}></CalculatorDisplay>
      </div>
      <div id="buttons">
        <CalculatorButton text="=" onClick={() => {}}></CalculatorButton>
      </div>
    </>
  );
};

export default Calculator;
