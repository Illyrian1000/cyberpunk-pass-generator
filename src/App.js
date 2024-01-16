import "./App.css";
import PasswordBox from "./components/PasswordBox";
import CopyButton from "./components/CopyButton";
import InputSlider from "./components/InputSlider";
import Checkboxes from "./components/Checkboxes";
import PasswordHistory from "./components/PasswordHistory";

import React, { useState } from "react";

let passwordLength = 16;

function App() {
  const [password, setPassword] = useState("1a4Txe3m*%Qm^vdXs!");
  const passwordCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "<",
    ">",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "<",
    ">",
  ];

  const passwordChange = () => {
    console.log(passwordCharacters.length);

    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      let counter = Math.floor(Math.random() * 104);

      newPassword += passwordCharacters[counter];
    }

    setPassword(newPassword);
  };

  const inputSliderValue = (e) => {
    passwordLength = e;
  };

  return (
    <div className="App">
      <h1 className="main-header">
        PASSWORD <br /> GENERATOR
      </h1>

      <div className="main-cont">
        <div className="left-cont">
          <PasswordBox
            passwordOutput={password}
            passwordChanges={passwordChange}
          />
          <CopyButton />
          <InputSlider inputSliderValue={inputSliderValue} />
          <Checkboxes />
        </div>
        {/* <PasswordHistory /> */}
      </div>
    </div>
  );
}

export default App;
