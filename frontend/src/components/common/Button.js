// Button.js
import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  type = 'primary', 
  size = 'medium', 
  onClick, 
  href,
  className = '',
  icon = null
}) => {
  const classes = `button button-${type} button-${size} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="button-content">
          {children}
          {icon && <span className="button-icon">{icon}</span>}
        </span>
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      <span className="button-content">
        {children}
        {icon && <span className="button-icon">{icon}</span>}
      </span>
    </button>
  );
};

export default Button;
