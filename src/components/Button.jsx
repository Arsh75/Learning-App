import React from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';

const Button = ({
  children,
  onClick,
  color = 'blue',
  size = 'md',
  className = '',
  disabled = false,
  style = {}
}) => {
  const { playSound } = useSound();
  const colors = {
    blue: 'var(--kid-blue)',
    green: 'var(--kid-green)',
    orange: 'var(--kid-orange)',
    purple: 'var(--kid-purple)',
    pink: 'var(--kid-pink)',
    yellow: 'var(--kid-yellow)',
    red: 'var(--kid-red)',
  };

  const selectedColor = colors[color] || colors.blue;

  const sizeStyles = {
    sm: { padding: '0.6rem 1.2rem', fontSize: '1rem' },
    md: { padding: '1rem 2.5rem', fontSize: '1.2rem' },
    lg: { padding: '1.5rem 4rem', fontSize: '1.5rem' },
  };

  const handleClick = (e) => {
    if (!disabled) {
      playSound('click');
      if (onClick) onClick(e);
    }
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05, translateY: -4 } : {}}
      whileTap={!disabled ? { scale: 0.95, translateY: 4 } : {}}
      onClick={handleClick}
      disabled={disabled}
      className={`heading-font ${className}`}
      style={{
        backgroundColor: selectedColor,
        color: 'white',
        borderRadius: '2rem',
        border: 'none',
        boxShadow: `0 8px 0 ${selectedColor}cc`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        ...sizeStyles[size],
        transition: 'box-shadow 0.1s, transform 0.1s',
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
