import React from 'react';

const Button = ({ time, setMinutes, setSeconds, setWork,setPomodoro  }) => {
  return (
    <button
      className="timerButton"
      onClick={() => {
        setMinutes(String(time));
        setSeconds('00');
        setWork(time);
        setPomodoro(false);
      }}
    >
      +{time} min
    </button>
  );
};

export default Button;
