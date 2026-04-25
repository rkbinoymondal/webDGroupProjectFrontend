import React from 'react';
import './Loader.css';

export default function Loader({ message = "Loading...", fullScreen = false }) {
  return (
    <div className={`loader-container ${fullScreen ? 'full-screen' : ''}`}>
      <div className="loader-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <i className="fas fa-utensils loader-icon"></i>
      </div>
      <p className="loader-text">{message}</p>
    </div>
  );
}
