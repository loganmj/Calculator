import "./CalculatorButton.css";

interface Props {
  text: string;
  onClick: (text: string) => void;
}

const CalculatorButton = ({ text, onClick }: Props) => {
  const handleButtonClick = () => {
    onClick(text);
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
