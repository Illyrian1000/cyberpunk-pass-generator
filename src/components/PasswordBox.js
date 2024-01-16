import "./PasswordBox.css";
import { useState } from "react";

export default function PasswordBox({ passwordOutput, passwordChanges }) {
  return (
    <div className="password-cont">
      <p className="password-text">{passwordOutput}</p>
      <img src="refresh-icon.png" onClick={passwordChanges} />
    </div>
  );
}
