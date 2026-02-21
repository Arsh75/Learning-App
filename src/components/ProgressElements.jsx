import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const ProgressBar = ({ current, total, color = 'var(--kid-green)' }) => {
    const percentage = (current / total) * 100;
    return (
        <div style={{
            width: '100%',
            height: '1.5rem',
            background: '#e2e8f0',
            borderRadius: '1rem',
            overflow: 'hidden',
            marginBottom: '2rem'
        }}>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                style={{
                    height: '100%',
                    background: color,
                    borderRadius: '1rem'
                }}
            />
        </div>
    );
};

export const StarRating = ({ rating, max = 3, size = 32 }) => {
    return (
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            {Array.from({ length: max }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Star
                        size={size}
                        color={i < rating ? 'var(--kid-yellow)' : '#cbd5e1'}
                        fill={i < rating ? 'var(--kid-yellow)' : 'transparent'}
                        strokeWidth={2.5}
                    />
                </motion.div>
            ))}
        </div>
    );
};
