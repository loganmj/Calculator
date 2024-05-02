interface Props {
  displayText: string;
}

const CalculatorDisplay = ({ displayText }: Props) => {
  return (
    <>
      <label id="display">{displayText}</label>
    </>
  );
};

export default CalculatorDisplay;
