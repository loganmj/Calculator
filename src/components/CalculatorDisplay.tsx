import "./CalculatorDisplay.css";

interface Props {
  displayText: string;
}

const CalculatorDisplay = ({ displayText }: Props) => {
  return (
    <>
      <h3 id="display">{displayText}</h3>
    </>
  );
};

export default CalculatorDisplay;
