"use client"; // Ensures client-side rendering

import { useState, useEffect } from "react";

export default function CountdownTimer() {

  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false); 
  const [duration, setDuration] = useState<number>(0); 
  const [inputValue, setInputValue] = useState<string>(""); 

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive && timeElapsed > 0) {
      timer = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeElapsed === 0) {
      setIsActive(false); 
    }

    return () => clearInterval(timer); 
  }, [isActive, timeElapsed]);

  const handleStart = () => {
    if (duration > 0) {
      setIsActive(true);
      setTimeElapsed(duration);
      setIsPaused(false); 

  };}

  const handleStop = () => {
    setIsActive(false);
    setIsPaused(true); // Set pause state when the timer stops
  };

  const handleResume = () => {
    if (isPaused && timeElapsed > 0) {
      setIsActive(true); 
      setIsPaused(false);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false); 
    setTimeElapsed(0);
  };

  const handleSetDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    
    if (value && !isNaN(Number(value))) {
      setDuration(Number(value) * 60); 
    }
  };

  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0", 
        textAlign: "center",
      }}
    >
      
      <div
        style={{
          padding: "30px",
          border: "3px solid #00ffff", 
          borderRadius: "10px",
          backgroundColor: "#000000", 
          width: "350px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
        }}
      >
     
        <h1
          style={{
            fontSize: "1.3rem",
            marginBottom: "20px",
            borderRadius: "8px",
            backgroundColor: "#00ffff",
            color: "#000000", 
            fontWeight: "bold",
            border: "2px solid #000000",
          }}
        >
           -_- Countdown Timer -_-
        </h1>

       
        <div
          style={{
            fontSize: "1.5rem",
            margin: "20px 0",
            padding: "30px",
            width: "280px",
            borderRadius: "15px",
            border: "2.5px solid #00ffff", 
            backgroundColor: "#000000", 
            color: "#00ffff", 
          }}
        >
          {`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
        </div>

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <input
            type="number"
            value={inputValue}
            onChange={handleSetDuration}
            placeholder="Set duration (minutes)"
            style={{
              padding: "8px",
              fontSize: "1rem",
              width: "200px",
              border: "2.5px solid #00ffff", 
              borderRadius: "10px",
              outline: "none",
              marginBottom: "10px",
              color: "#00ffff", 
              backgroundColor: "#000000", 
            }}
          />
        </div>

        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px", 
            marginTop: "20px",
          }}
        >
          <button
            onClick={handleStart}
            style={{
              padding: "8px 16px", 
              fontSize: "0.9rem", 
              backgroundColor: "#00ffff", 
              color: "#000000", 
              border: "2px solid #000000",
              borderRadius: "4px", 
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Start
          </button>
          <button
            onClick={handleStop}
            style={{
              padding: "8px 16px", 
              fontSize: "0.9rem", 
              backgroundColor: "#00ffff", 
              color: "#000000", 
              border: "2px solid #000000",
              borderRadius: "4px", 
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Stop
          </button>
          <button
            onClick={handleResume}
            style={{
              padding: "8px 16px", 
              fontSize: "0.9rem", 
              backgroundColor: "#00ffff", 
              color: "#000000", 
              border: "2px solid #000000",
              borderRadius: "4px", 
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Resume
          </button>
          <button
            onClick={handleReset}
            style={{
              padding: "8px 16px", 
              fontSize: "0.9rem", 
              backgroundColor: "#00ffff", 
              color: "#000000", 
              border: "2px solid #000000",
              borderRadius: "4px", 
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
  

