import React from 'react';
import { motion } from 'framer-motion';

const InteractionCard = ({
    title,
    icon: Icon,
    description,
    color = 'blue',
    onClick,
    delay = 0
}) => {
    const colors = {
        blue: { bg: '#e0f2fe', border: '#38bdf8', text: '#0369a1' },
        green: { bg: '#f0fdf4', border: '#4ade80', text: '#15803d' },
        orange: { bg: '#fff7ed', border: '#fb923c', text: '#c2410c' },
        purple: { bg: '#faf5ff', border: '#c084fc', text: '#7e22ce' },
        pink: { bg: '#fdf2f8', border: '#f472b6', text: '#be185d' },
        yellow: { bg: '#fefce8', border: '#facc15', text: '#a16207' },
    };

    const theme = colors[color] || colors.blue;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.3 }
            }}
            onClick={onClick}
            style={{
                backgroundColor: theme.bg,
                border: `4px solid ${theme.border}`,
                borderRadius: '2rem',
                padding: '2rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: `0 10px 0 ${theme.border}33`,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '1.2rem',
                    borderRadius: '1.5rem',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }}
            >
                {Icon && <Icon size={48} color={theme.border} strokeWidth={2.5} />}
            </div>
            <h3 style={{ color: theme.text, fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ color: theme.text, opacity: 0.8, fontSize: '1rem' }}>{description}</p>

            {/* Decorative circle */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '100px',
                height: '100px',
                background: `${theme.border}22`,
                borderRadius: '50%'
            }} />
        </motion.div>
    );
};

export default InteractionCard;
