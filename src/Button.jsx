import React from 'react';

const Button = ({ time, setMinutes, setSeconds, setWork }) => {
  return (
    <button
      className="timerButton"
      onClick={() => {
        setMinutes(String(time));
        setSeconds('00');
        setWork(time);
      }}
    >
      +{time} min
    </button>
  );
};

export default Button;
