import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  //#region Constants

  const DEFAULT_DISPLAY_DATA = "0";
  const DEFAULT_OPERAND_DATA = 0;
  const DEFAULT_OPERATOR_DATA = "";

  //#endregion

  //#region State Properties

  const [displayText, setDisplayText] = useState("0");
  const [firstOperand, setFirstOperand] = useState(0);
  const [operator, setOperator] = useState("");
  const [secondOperand, setSecondOperand] = useState(0);
  const [editingSecondOperand, setEditingSecondOperand] = useState(false);

  //#endregion

  //#region Event Handlers

  // Clears all variables and the display
  const handleClearButton = () => {
    clearOperandData();
    clearDisplay();
  };

  // Deletes a digit from the active operand
  const handleDeleteButton = () => {
    const tempValue: number = Math.floor(firstOperand / 10);
    setFirstOperand(tempValue);
    displayValue(tempValue);
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

  //#endregion

  //#region Functions

  // Sets all operand data to default values
  const clearOperandData = () => {
    setFirstOperand(DEFAULT_OPERAND_DATA);
    setOperator(DEFAULT_OPERATOR_DATA);
    setSecondOperand(DEFAULT_OPERAND_DATA);
  };

  // Sets display data to the default value
  const clearDisplay = () => {
    setDisplayText(DEFAULT_DISPLAY_DATA);
  };

  // Converts a numeric value to a string and displays it.
  const displayValue = (value: number) => {
    setDisplayText(`${value}`);
  };

  //#endregion

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
        <div id="debug-data">
          <div>
            <label>First Operand: </label>
            <label>{firstOperand}</label>
          </div>
          <div>
            <label>Operator: </label>
            <label>{operator}</label>
          </div>
          <div>
            <label>Second Operand: </label>
            <label>{secondOperand}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
