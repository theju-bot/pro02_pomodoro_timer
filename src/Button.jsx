import React from 'react';
import './index.css';

const Button = ({ time, setMinutes, setSeconds, setWork, setPomodoro }) => {
  return (
    <button
      className="timerButton"
      onClick={() => {
        setMinutes(String(time));
        setSeconds('00');
        setWork(time);
        setPomodoro(true);
      }}
    >
      +{time} min
    </button>
  );
};

export default Button;