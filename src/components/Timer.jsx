import Countdown, { CountdownApi } from "react-countdown";
import React, { useState } from "react";

const Timer = ({ countdown, onComplete }) => {
  const [currentTime, setCurrentTime] = useState(Date.now() + 1000 * countdown);

  return (
    <Countdown
      date={currentTime}
      key={currentTime}
      onComplete={() => {
        onComplete();
        setCurrentTime(Date.now() + 1000 * countdown);
      }}
      renderer={({ minutes, seconds, completed }) => {
        // render completed
        if (completed) return <span>Times up</span>;
        // render current countdown time
        return (
          <span>
            {minutes}:{seconds}
          </span>
        );
      }}
    />
  );
};

export default Timer;
