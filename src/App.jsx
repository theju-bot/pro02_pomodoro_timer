import Fourm from './Fourm';
import './index.css';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

function App() {
  const data = localStorage.getItem('times');
  const saved = JSON.parse(data) ?? null;

  const [minutes, setMinutes] = useState(saved ? saved.minutes : 25);
  const [seconds, setSeconds] = useState(saved ? saved.seconds : 0);
  const [pomodoro, setPomodoro] = useState(saved ? saved.pomodoro : false);
  const [work, setWork] = useState(saved ? saved.work : 25);
  const [times25, setTimes25] = useState(saved ? saved.times25 : 0);
  const [times15, setTimes15] = useState(saved ? saved.times15 : 0);
  const [times5, setTimes5] = useState(saved ? saved.times5 : 0);

  const soundRef = useRef(new Audio('/pro02_pomodoro_timer/audio/ride.wav'));

  const resetTimer = () => {
    setTimes25(0);
    setTimes15(0);
    setTimes5(0);
    setWork(25);
    setMinutes(25);
    setSeconds(0);
  }

  useEffect(() => {
    localStorage.setItem(
      'times',
      JSON.stringify({
        minutes,
        seconds,
        pomodoro,
        work,
        times25,
        times15,
        times5,
      })
    );
  }, [minutes, seconds, pomodoro, work, times25, times15, times5]);

  useEffect(() => {
    if (!pomodoro) return;
    if (minutes === 0 && seconds === 0) return;
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [minutes, seconds, pomodoro]);

  useEffect(() => {
    if (!pomodoro) return;
    if (minutes === 0 && seconds === 0) {
      setPomodoro(false);
      work === 25
        ? setTimes25((prev) => prev + 1)
        : work === 15
        ? setTimes15((prev) => prev + 1)
        : setTimes5((prev) => prev + 1);
      soundRef.current.play();
      setWork(25);
      setMinutes(work);
      setSeconds(0);
    }
  }, [minutes, seconds, pomodoro, work]);

  return (
    <>
      <Fourm
        setMinutes={setMinutes}
        minutes={minutes}
        seconds={seconds}
        setSeconds={setSeconds}
        pomodoro={pomodoro}
        setPomodoro={setPomodoro}
        work={work}
        setWork={setWork}
        times25={times25}
        times15={times15}
        times5={times5}
        resetTimer={resetTimer}
      />
    </>
  );
}

export default App;
