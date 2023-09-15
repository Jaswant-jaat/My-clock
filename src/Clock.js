import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const options = { weekday: 'long',day: 'numeric', month: 'long', year: 'numeric' };
  const time = dateTime.toLocaleTimeString();
  const date = dateTime.toLocaleDateString(undefined, options);
  return (
    <div>
      <header className="App-header">
        <h1>Digital Clock</h1>
        <p className="time">{time}</p>
        <p className="date">{date}</p>
      </header>
    </div>
  )
}

export default Clock