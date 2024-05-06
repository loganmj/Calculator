import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [displayText, setDisplayText] = useState("0");
  const [firstOperand, setFirstOperand] = useState(0);

  // TODO: Get the operator and second operand working
  let operator: string = "";
  let secondOperand: number = 0;

  // TODO: Get the result working
  let result: number = 0;

  // Sets the display text to a numeric value
  const displayValue = (value: number) => {
    setDisplayText(`${value}`);
  };

  // Clears all variables and the display
  const handleClearButton = () => {
    setFirstOperand(0);
    operator = "";
    secondOperand = 0;
    result = 0;
    displayValue(0);
  };

  // Deletes a digit from the active operand
  const handleDeleteButton = () => {
    const tempText = displayText;
    setDisplayText(tempText.slice(0, -1));
  };

  // Handles the clicking of a number button
  const handleNumberButton = (text: string) => {
    const inputValue: number = parseInt(text);
    let tempValue: number = 0;

    // DEBUG
    console.log(`Button text: ${text}`);
    console.log(`Converted value: ${inputValue}`);
    console.log(`Current first operand: ${firstOperand}`);

    // If the first operand is currently zero, set it directly as the input value.
    // Otherwise, add the input value as a new digit to the end of the first operand.
    if (firstOperand === 0) {
      tempValue = inputValue;
    } else {
      tempValue = firstOperand * 10 + inputValue;
    }

    // DEBUG
    console.log(`New first operand: ${tempValue}`);

    setFirstOperand(tempValue);
    displayValue(tempValue);
  };

  return (
    <>
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
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton
              text="8"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton
              text="9"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton text="x" onClick={() => {}}></CalculatorButton>
          </div>
          <div className="button-row">
            <CalculatorButton
              text="4"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton
              text="5"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton
              text="6"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton text="-" onClick={() => {}}></CalculatorButton>
          </div>
          <div className="button-row">
            <CalculatorButton
              text="1"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton
              text="2"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton
              text="3"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton text="+" onClick={() => {}}></CalculatorButton>
          </div>
          <div className="button-row">
            <CalculatorButton text="+/-" onClick={() => {}}></CalculatorButton>
            <CalculatorButton
              text="0"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton text="." onClick={() => {}}></CalculatorButton>
            <CalculatorButton text="=" onClick={() => {}}></CalculatorButton>
          </div>
        </div>
      </div>
      <div id="debug-data">
        <label id="first-operand">{firstOperand}</label>
        <label id="operator">{operator}</label>
        <label id="second-operand">{secondOperand}</label>
        <label id="result">{result}</label>
      </div>
    </>
  );
};

export default Calculator;
