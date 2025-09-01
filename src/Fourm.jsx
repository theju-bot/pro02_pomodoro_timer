import React from 'react';
import Button from './Button';

const Fourm = ({
  minutes,
  setMinutes,
  seconds,
  setSeconds,
  pomodoro,
  setPomodoro,
  work,
  setWork,
  times25,
  times15,
  times5,
  resetTimer
}) => {
  const times = [25, 15, 5];
  return (
    <form onSubmit={(e) => e.preventDefault()} className="fourm">
      <div className="logs">
        <p>Regular Work: {String(times25)}</p>
        <p>Short Break: {String(times15)}</p>
        <p>Long Break: {String(times5)}</p>
      </div>
      <p
        className={`title ${
          minutes === 0 && seconds === 0 ? 'dormat' : 'active'
        }`}
      >
        {work === 25
          ? 'Regular Work'
          : work === 5
          ? 'Short Break'
          : 'Long Break'}
      </p>
      <p className={minutes === 0 && seconds === 0 ? 'dormat' : 'active'}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
      {times.map((time, index) => (
        <Button
          time={time}
          key={index}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setWork={setWork}
          setPomodoro={setPomodoro}
        />
      ))}
      <button
        className="startStopButton"
        onClick={() => setPomodoro(!pomodoro)}
      >
        {pomodoro ? 'Stop' : 'Start'}
      </button>
      <button className="resetButton" onClick={resetTimer}>
        Reset
      </button>
    </form>
  );
};

export default Fourm;
