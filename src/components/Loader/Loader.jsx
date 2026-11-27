import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ duration = 2200, onComplete = () => {} }) => {
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      onComplete();
    }, duration);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, duration + 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [duration, onComplete]);

  if (removed) return null;

  return (
    <div className={`loader ${done ? 'done' : ''}`} role="status" aria-label="Loading">
      <img src="/LOGO.png" alt="Finanzo" width="220" />
      <div className="track"><span className="bar"></span></div>
    </div>
  );
};

export default Loader;
