import React, { useEffect } from "react";

const Countdown = () => {
  useEffect(() => {
    const targetDate = new Date("Feb 20, 2025 23:59:59").getTime();

    const countdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;

      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerText = "EXPIRED";
      }
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* countdown */}
      <div className="hidden gap-5 justify-end items-center md:flex ">
        <div>
          <span className=" font-medium text-sm">Days</span>
          <p id="days" className="text-3xl font-bold">
            00
          </p>
        </div>

        <span className="text-4xl font-poppins font-bold text-secondary">
          {" "}
          :
        </span>

        <div>
          <span className=" font-medium text-sm">Hours</span>
          <p id="hours" className="text-3xl font-bold">
            00
          </p>
        </div>

        <span className="text-4xl font-poppins font-bold text-secondary">
          {" "}
          :
        </span>

        <div>
          <span className=" font-medium text-sm">Minutes</span>
          <p id="minutes" className="text-3xl font-bold">
            00
          </p>
        </div>

        <span className="text-4xl font-poppins font-bold text-secondary">
          {" "}
          :
        </span>

        <div>
          <span className=" font-medium text-sm">Second</span>
          <p id="seconds" className="text-3xl font-bold">
            00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
