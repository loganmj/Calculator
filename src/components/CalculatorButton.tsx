import "./CalculatorButton.css";

interface Props {
  text: string;
  onClick: () => void;
}

const CalculatorButton = ({ text, onClick }: Props) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <>
      <button id="calc-button" onClick={handleButtonClick}>
        {text}
      </button>
    </>
  );
};

export default CalculatorButton;
