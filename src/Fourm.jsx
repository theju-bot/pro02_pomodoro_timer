import React from 'react';
import Button from './Button';
import './index.css';

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
  resetTimer,
  isDormant,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="fourm">
      <div className="logs">
        <p>Regular Work: {String(times25)}</p>
        <p>Long Break: {String(times15)}</p>
        <p>Short Break: {String(times5)}</p>
      </div>
      <div className="timer">
        <p
          className={`title ${
            (minutes === 0 ||
              minutes === 25 ||
              minutes === 15 ||
              minutes === 5) &&
            seconds === 0
              ? 'begining'
              : isDormant
              ? 'dormat'
              : 'active'
          }`}
        >
          {work === 25
            ? 'Regular Work'
            : work === 5
            ? 'Short Break'
            : 'Long Break'}
        </p>
        <p
          className={
            (minutes === 0 ||
              minutes === 25 ||
              minutes === 15 ||
              minutes === 5) &&
            seconds === 0
              ? 'begining'
              : isDormant
              ? 'dormat'
              : 'active'
          }
        >
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>
      <div className="extras">
        <Button
          time={25}
          key={1}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setWork={setWork}
          setPomodoro={setPomodoro}
        />
        <Button
          time={15}
          key={1}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setWork={setWork}
          setPomodoro={setPomodoro}
        />
        <Button
          time={5}
          key={1}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setWork={setWork}
          setPomodoro={setPomodoro}
        />
      </div>
      <div className="extras">
        <button
          className="startStopButton"
          onClick={() => setPomodoro(!pomodoro)}
        >
          {pomodoro ? 'Stop' : 'Start'}
        </button>
        <button className="resetButton" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Fourm;
