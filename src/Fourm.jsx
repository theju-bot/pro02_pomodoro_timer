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
}) => {
  const times = [25, 15, 5];
  return (
    <form onSubmit={(e) => e.preventDefault()} className="fourm">
      <p className={`title ${minutes === 0 && seconds === 0 ? 'dormat' : 'active'}`}>
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
        />
      ))}
      <button
        className="startStopButton"
        onClick={() => setPomodoro(!pomodoro)}
      >
        {pomodoro ? 'stop' : 'start'}
      </button>
    </form>
  );
};

export default Fourm;
