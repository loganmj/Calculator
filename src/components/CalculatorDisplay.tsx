import "./CalculatorDisplay.css";

interface Props {
  displayText: string;
}

const CalculatorDisplay = ({ displayText }: Props) => {
  return (
    <>
      <input id="display">{displayText}</input>
    </>
  );
};

export default CalculatorDisplay;
