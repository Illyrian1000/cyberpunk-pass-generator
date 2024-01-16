import "./InputSlider.css";
import React, { useState } from "react";

export default function InputSlider({ inputSliderValue }) {
  const [sliderValue, setSliderValue] = useState(16);
  const [newStyle, setNewStyle] = useState({
    marginLeft: (sliderValue - 10) * 18.62 + "px",
  });

  const changeSlider = (e) => {
    setSliderValue(e.target.value);
    let newMargin = (e.target.value - 10) * 18.62;
    setNewStyle({ marginLeft: newMargin + "px" });

    return inputSliderValue(e.target.value);
  };
  return (
    <div className="slider-cont">
      <p className="password-length" style={newStyle}>
        {sliderValue}
      </p>
      <input
        type="range"
        min="10"
        max="36"
        step="1"
        value={sliderValue}
        onChange={changeSlider}
      />
    </div>
  );
}
