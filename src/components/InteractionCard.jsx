import React from 'react';
import { motion } from 'framer-motion';

const InteractionCard = ({
    title,
    icon: Icon,
    emoji,
    description,
    color = 'var(--kid-blue)',
    onClick,
    delay = 0,
    disabled = false
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, type: 'spring' }}
            whileHover={!disabled ? {
                scale: 1.05,
                y: -10,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.2 }
            } : {}}
            onClick={!disabled ? onClick : undefined}
            style={{
                backgroundColor: 'var(--white)',
                border: `4px solid ${color}`,
                borderRadius: '2.5rem',
                padding: '2.5rem',
                cursor: disabled ? 'not-allowed' : 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: `0 12px 0 ${color}22`,
                position: 'relative',
                overflow: 'hidden',
                opacity: disabled ? 0.7 : 1,
            }}
        >
            <div
                style={{
                    backgroundColor: `${color}11`,
                    padding: '1.5rem',
                    borderRadius: '2rem',
                    marginBottom: '1.5rem',
                    fontSize: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {Icon ? <Icon size={64} color={color} strokeWidth={2.5} /> : emoji}
            </div>
            <h3 style={{ color: 'var(--text-dark)', fontSize: '1.8rem', marginBottom: '0.8rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '600' }}>{description}</p>

            {/* Decorative Shimmer/Circle */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '120px',
                height: '120px',
                background: `${color}11`,
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />
        </motion.div>
    );
};

export default InteractionCard;
