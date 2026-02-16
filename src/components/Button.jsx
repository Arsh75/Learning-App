import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  color = 'blue',
  className = '',
  size = 'md'
}) => {
  const colors = {
    blue: 'var(--kid-blue)',
    green: 'var(--kid-green)',
    orange: 'var(--kid-orange)',
    purple: 'var(--kid-purple)',
    pink: 'var(--kid-pink)',
    yellow: 'var(--kid-yellow)',
  };

  const selectedColor = colors[color] || colors.blue;

  const sizeStyles = {
    sm: { padding: '0.5rem 1rem', fontSize: '0.9rem' },
    md: { padding: '0.8rem 2rem', fontSize: '1.1rem' },
    lg: { padding: '1.2rem 3rem', fontSize: '1.4rem' },
  };

  const baseStyles = {
    backgroundColor: variant === 'primary' ? selectedColor : 'transparent',
    color: variant === 'primary' ? 'white' : selectedColor,
    border: variant === 'outline' ? `3px solid ${selectedColor}` : 'none',
    boxShadow: variant === 'primary' ? `0 6px 0 ${selectedColor}99` : 'none',
    borderRadius: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    ...sizeStyles[size]
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, translateY: -2 }}
      whileTap={{ scale: 0.95, translateY: 2 }}
      style={baseStyles}
      onClick={onClick}
      className={`kid-button ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
