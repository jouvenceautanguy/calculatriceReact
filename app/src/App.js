import { useState } from "react";
import "./styles.css";

function ClearButton({ onClear }) {
  return <button onClick={onClear}>Clear</button>;
}

function NumberButton({ value, onClick }) {
  return <button onClick={() => onClick(value)}>{value}</button>;
}

function OperatorButton({ value, onClick }) {
  return <button onClick={() => onClick(value)}>{value}</button>;
}

function App() {
  const [input, setInput] = useState("");

  function handleButtonClick(value) {
    setInput((prevInput) => prevInput + value);
  }

  function handleEqualsClick() {
    setInput(eval(input).toString());
  }

  function handleClearClick() {
    setInput("");
  }

  return (
    <div className="divGlobale">
      <h1>calculatrice</h1>
      <div className="numberList">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <NumberButton
            key={number}
            value={number.toString()}
            onClick={handleButtonClick}
          />
        ))}
      </div>
      <div className ="operatorList">
        {["/", "*", "-", "+"].map((operator) => (
          <OperatorButton
            key={operator}
            value={operator}
            onClick={handleButtonClick}
          />
        ))}
      </div>
      <div>
        <button onClick={handleEqualsClick}>=</button>
        <ClearButton onClear={handleClearClick} />
      </div>
      <div>
        <input autoFocus id="display" type="text" value={input} readOnly />
      </div>
    </div>
  );
}

export default App;



