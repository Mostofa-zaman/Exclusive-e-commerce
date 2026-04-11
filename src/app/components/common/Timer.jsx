import React, { useState, useEffect } from "react";
import allIcon from "../../helpers/IconProvider";

const Timer = ({ isCircle = false }) => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        days: String(now.getDate()).padStart(2, "0"),
        hours: String(now.getHours()).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        seconds: String(now.getSeconds()).padStart(2, "0"),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const labels = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <div className="flex items-center gap-x-5 pt-12">
      {labels.map((label, idx) => {
        const value = Object.values(time)[idx];

        return (
          <div key={label} className="flex items-center gap-x-3">
            
            {/* Circle Box */}
            <div
              className={`flex flex-col items-center justify-center
              ${isCircle ? "w-[80px] h-[80px] bg-white rounded-full shadow" : ""}
              `}
            >
              <span className="text-[12px] font-medium">{label}</span>
              <h1 className="text-[22px] font-bold leading-none">{value}</h1>
            </div>

            {/* Dots */}
            {label !== "Seconds" && (
              <span className="text-[#E07575]">
                {allIcon.threedots}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Timer;