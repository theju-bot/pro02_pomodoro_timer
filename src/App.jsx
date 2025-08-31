import Fourm from './Fourm';
import './index.css';
import { useEffect, useState } from 'react';

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [pomodoro, setPomodoro] = useState(false);
  const [work, setWork] = useState(25);

  useEffect(() => {
    if (pomodoro) {
      minutes === 0 && seconds === 0 ? setPomodoro(false) : null;

      const timer = setTimeout(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }, 1000);

      console.log(minutes, seconds);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [minutes, seconds, pomodoro]);

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
      />
    </>
  );
}

export default App;
