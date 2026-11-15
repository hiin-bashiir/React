import { useState, useEffect } from "react";

const Assingment = ()=>{
const [initialTime, setInitialTime] = useState(60);
const [timeLeft, setTimeLeft] = useState(60);
const [isRunning, setIsRunning] = useState(false);

 useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    // Cleanup: clear interval
    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

 const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setInitialTime(value);
    setTimeLeft(value);
    setIsRunning(false);
  };

return(
    <div>
        <h2>Countdown Timer</h2>
        <label>Set Time (seconds):</label>
        <input 
        type="number" 
        value={initialTime}
        onChange={handleInputChange}
        />
        <br />
        <p>Time Left: {timeLeft} seconds</p>
        <br />
        <button disabled={isRunning || timeLeft === 0} onClick={handleStart}>Start</button>
        <button disabled={!isRunning} onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
)
}
export default Assingment;