import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ duration = 2000, onComplete = () => {} }) => {
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      onComplete();
    }, duration);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, duration + 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [duration, onComplete]);

  if (removed) return null;

  return (
    <div className={`finanzo-preloader ${done ? 'done' : ''}`} role="status" aria-label="Loading">
      <img src="/LOGO.png" alt="Finanzo" className="finanzo-preloader-logo" />
      <div className="finanzo-preloader-track">
        <span className="finanzo-preloader-bar" style={{ animationDuration: `${duration / 1000}s` }} />
      </div>
    </div>
  );
};

export default Loader;
