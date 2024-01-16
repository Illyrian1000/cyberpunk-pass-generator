import "./Checkboxes.css";
import { useState } from "react";

export default function Checkboxes() {
  const [numbersChecked, setNumbersChecked] = useState(false);
  const [charChecked, setCharChecked] = useState(false);

  const handleCharClick = () => {
    setCharChecked(!charChecked);
  };

  const handleNumbersClick = () => {
    setNumbersChecked(!numbersChecked);
  };

  return (
    <div className="checkbox-cont">
      {/* <div>
        <input type="checkbox" id="uppercaseletters" />
        <label htmlFor="uppercaseletters"> Uppercase Letters</label>
      </div>

      <div>
        <input type="checkbox" id="lowercaseletters" />
        <label htmlFor="lowercaseletters"> Lowercase Letters</label>
      </div> */}

      <div>
        <input
          type="checkbox"
          id="numbers"
          checked={numbersChecked}
          onClick={handleNumbersClick}
        />
        <label htmlFor="numbers"> Numbers</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="symbols"
          checked={charChecked}
          onClick={handleCharClick}
        />
        <label htmlFor="symbols"> Symbols</label>
      </div>
    </div>
  );
}
