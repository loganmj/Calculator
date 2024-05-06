import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const DEFAULT_DISPLAY_VALUE = "";

  const [displayText, setDisplayText] = useState(DEFAULT_DISPLAY_VALUE);

  // Clears the display
  const handleClearButton = () => {
    setDisplayText(DEFAULT_DISPLAY_VALUE);
  };

  // Deletes the last character from the display
  const handleDeleteButton = () => {
    const tempText = displayText;
    setDisplayText(tempText.slice(0, -1));
  };

  const handleSevenButton = () => {
    const tempText = displayText;
    setDisplayText(`${tempText}7`);
  };

  return (
    <div id="container">
      <div id="display">
        <CalculatorDisplay displayText={displayText}></CalculatorDisplay>
      </div>
      <div id="buttons">
        <div className="button-row">
          <CalculatorButton
            text="CLR"
            onClick={handleClearButton}
          ></CalculatorButton>
          <CalculatorButton
            text="DEL"
            onClick={handleDeleteButton}
          ></CalculatorButton>
        </div>
        <div className="button-row">
          <CalculatorButton
            text="7"
            onClick={handleSevenButton}
          ></CalculatorButton>
          <CalculatorButton text="8" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="9" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="x" onClick={() => {}}></CalculatorButton>
        </div>
        <div className="button-row">
          <CalculatorButton text="4" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="5" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="6" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="-" onClick={() => {}}></CalculatorButton>
        </div>
        <div className="button-row">
          <CalculatorButton text="1" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="2" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="3" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="+" onClick={() => {}}></CalculatorButton>
        </div>
        <div className="button-row">
          <CalculatorButton text="+/-" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="0" onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="." onClick={() => {}}></CalculatorButton>
          <CalculatorButton text="=" onClick={() => {}}></CalculatorButton>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
