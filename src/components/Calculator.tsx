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
  const [operand, setOperand] = useState(0);
  const [operator, setOperator] = useState("");

  //#endregion

  //#region Event Handlers

  /**
   * Clears all variables and the display
   */
  const handleClearButton = () => {
    clearOperandData();
    clearDisplay();
  };

  /**
   * Deletes a digit from the display text.
   */
  const handleDeleteButton = () => {
    // If the string is only one digit, replace it with the default value
    // Otherwise, remove a digit from the string
    if (displayText.length <= 1) {
      setDisplayText(DEFAULT_DISPLAY_DATA);
      return;
    }

    let tempText = displayText;
    setDisplayText(tempText.slice(0, -1));
  };

  /**
   * Updates the display text with the value from the
   * number button.
   *
   * @param valueText - The string value taken from the number button.
   */
  const handleNumberButton = (valueText: string) => {
    let tempText = "";

    // If the display text is currently the default, replace it directly with the input value.
    // Otherwise, add the input value as a new digit to the end of the display text.
    if (displayText === "0") {
      tempText = valueText;
    } else {
      tempText = `${displayText}${valueText}`;
    }

    // Display the new text value
    setDisplayText(tempText);
  };

  /**
   * Handles the addition operator button press.
   */
  const handleOperatorButton = (operatorText: string) => {
    // Parse the display text
    const convertedValue = parseInt(displayText);

    // Get the operator value
    const tempOperator = operatorText;

    // DEBUG
    console.log(`Operator pressed: ${tempOperator}`);

    // Set the new values
    const cumulativeResult = getResult(operand, operator, convertedValue);
    setOperand(cumulativeResult);
    setOperator(tempOperator);

    /*

    // TODO: If no operator has been selected yet, just save the operand and the operator values
    // And clear the display
    // If an operator was already active, calculate the result, save the result as the operand, then
    // grab the new active operator
    if (operator === DEFAULT_OPERATOR_DATA) {
      setOperator(tempOperator);
      setOperand(convertedValue);
    } else {
      const cumulativeResult = getResult(operand, operator, convertedValue);
      setOperand(cumulativeResult);
      setOperator(tempOperator);
    }

    */

    // Clear the display text
    clearDisplay();
  };

  //#endregion

  //#region Functions

  /**
   * Sets all operand data to default values
   */
  const clearOperandData = () => {
    setOperand(DEFAULT_OPERAND_DATA);
    setOperator(DEFAULT_OPERATOR_DATA);
  };

  /**
   * Sets display data to the default value
   */
  const clearDisplay = () => {
    setDisplayText(DEFAULT_DISPLAY_DATA);
  };

  /**
   * Gets the result of the current calculation,
   * using the operand and operator data.
   */
  const getResult = (
    value1: number,
    operatorValue: string,
    value2: number
  ): number => {
    console.log(`Calculating ${value1} ${operatorValue} ${value2} ...`);

    switch (operatorValue) {
      case "+":
        return value1 + value2;
      default:
        // Return the second value
        // This makes the logic for the operator button handle easier
        // May not be strictly correct?
        return value2;
    }
  };

  //#endregion

  //#region Render

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
            <CalculatorButton
              text="+"
              onClick={handleOperatorButton}
            ></CalculatorButton>
          </div>
          <div className="button-row">
            <CalculatorButton text="+/-" onClick={() => {}}></CalculatorButton>
            <CalculatorButton
              text="0"
              onClick={handleNumberButton}
            ></CalculatorButton>
            <CalculatorButton text="." onClick={() => {}}></CalculatorButton>
            <CalculatorButton
              text="="
              onClick={handleOperatorButton}
            ></CalculatorButton>
          </div>
        </div>
        <div id="debug-data">
          <div>
            <label>Operand: </label>
            <label>{operand}</label>
          </div>
          <div>
            <label>Operator: </label>
            <label>{operator}</label>
          </div>
        </div>
      </div>
    </>
  );

  //#endregion
};

export default Calculator;
