import { useState } from 'react';
import '@/styles/Mylogo.css';

export default function Logo({ size = 'medium', animated = true }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`logo-container ${size} ${animated ? 'animated' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="/" className="logo-link">
        <div className="logo-wrapper">
          {/* Animated background glow */}
          <div className={`logo-glow ${isHovered ? 'active' : ''}`}></div>
          
          {/* Main logo text */}
          <div className="logo-text">
            <span className="logo-sucre">UNYIME_</span>
            <span className="logo-x">
              X
              <span className="x-sparkle">✦</span>
            </span>
          </div>

          {/* Animated underline */}
          <div className={`logo-underline ${isHovered ? 'expand' : ''}`}></div>
        </div>
      </a>
    </div>
  );
}
