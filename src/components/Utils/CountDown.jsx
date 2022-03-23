import React, { useEffect, useState, useRef } from "react";
import "./utils.css";

function CountDown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("April 24, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        //   stop the timer
        clearInterval(interval.current);
      } else {
        //   update the timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  });

  return (
    <div className="countdown-timer">
      <section className="countdown-wrapper">
        <p className="countdown-time">{timerDays}</p>
        <p className="countdown-text">
          <small>Days</small>
        </p>
      </section>
      <section className="countdown-wrapper">
        <p className="countdown-time">{timerHours}</p>
        <p className="countdown-text">
          <small>Hours</small>
        </p>
      </section>
      <section className="countdown-wrapper">
        <p className="countdown-time">{timerMinutes}</p>
        <p className="countdown-text">
          <small>Minutes</small>
        </p>
      </section>
      <section className="countdown-wrapper">
        <p className="countdown-time">{timerSeconds}</p>
        <p className="countdown-text">
          <small>Seconds</small>
        </p>
      </section>
    </div>
  );
}

export default CountDown;
