import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 }); // Center initial position
  const [isClicked, setIsClicked] = useState(false); // Track if the mouse is clicked

  // Update position when moving the mouse while clicked
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isClicked) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isClicked]);

  return (
    <div className="app">
      <div
        className={`glowing-text ${isClicked ? 'active' : ''}`}  // Apply active class when clicked
        style={{
          left: cursorPos.x - 150 + 'px',  // Offset to center the text relative to cursor
          top: cursorPos.y - 50 + 'px',
        }}
        onMouseDown={() => setIsClicked(true)}  // Start glowing and following on click
        onMouseUp={() => setIsClicked(false)}   // Stop glowing and following on release
      >
        Secrolis
      </div>
    </div>
  );
}

export default App;
