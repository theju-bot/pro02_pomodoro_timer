import React from 'react';
import Button from './Button';

const Fourm = () => {
  const timer = ['+25 min', '+10 min', '+5 min', '+1 min'];
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {timer.map((time, index) => (
        <Button time={time} key={index} />
      ))}
    </form>
  );
};

export default Fourm;
