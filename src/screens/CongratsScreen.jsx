import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { StarRating } from '../components/ProgressElements';
import { useProgress } from '../context/ProgressContext';

const CongratsScreen = ({ level, onNext, onHome, rating = 3 }) => {
    const { progress } = useProgress();
    const isGoodMe = level.id.toString().includes('gm') || level.name.toLowerCase().includes('good');

    return (
        <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                style={{ fontSize: '8rem', marginBottom: '2rem' }}
            >
                {isGoodMe ? '🏅' : '🏆'}
            </motion.div>

            <h2 style={{ fontSize: '3.5rem', color: isGoodMe ? 'var(--kid-pink)' : 'var(--kid-green)', marginBottom: '1rem' }}>
                {isGoodMe ? 'Badge Earned!' : 'Super Job!'}
            </h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem' }}>
                You finished <b>{level.name}</b>! {isGoodMe && "You're a Life Skills Pro! 🌈"}
            </p>

            <div style={{ marginBottom: '4rem' }}>
                <StarRating rating={rating} size={64} />
            </div>

            {isGoodMe && (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '1.5rem',
                        display: 'inline-block',
                        marginBottom: '3rem',
                        border: '3px solid var(--kid-pink)',
                        boxShadow: 'var(--shadow-chunky)'
                    }}
                >
                    <h3 className="heading-font" style={{ color: 'var(--kid-pink)' }}>🌟 {level.name} Master 🌟</h3>
                </motion.div>
            )}

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <Button color="blue" variant="outline" onClick={onHome}>Home</Button>
                <Button color="green" onClick={onNext}>Next Level 🚀</Button>
            </div>
        </div>
    );
};

export default CongratsScreen;
