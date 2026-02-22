import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { StarRating } from '../components/ProgressElements';
import { useProgress } from '../context/ProgressContext';

const CongratsScreen = ({ level, onNext, onHome, rating = 3 }) => {
    const { progress } = useProgress();
    const isGoodMe = level.id.toString().includes('gm') || level.name.toLowerCase().includes('good');

    return (
        <div style={{ textAlign: 'center', padding: 'clamp(2rem, 10vh, 4rem) 1rem' }}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                style={{ fontSize: 'clamp(4rem, 20vw, 8rem)', marginBottom: '1rem' }}
            >
                {isGoodMe ? '🏅' : '🏆'}
            </motion.div>

            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', color: isGoodMe ? 'var(--kid-pink)' : 'var(--kid-green)', marginBottom: '0.5rem' }}>
                {isGoodMe ? 'Badge Earned!' : 'Super Job!'}
            </h2>
            <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', marginBottom: '2rem' }}>
                You finished <b>{level.name}</b>! {isGoodMe && "You're a Life Skills Pro! 🌈"}
            </p>

            <div style={{ marginBottom: '3rem' }}>
                <StarRating rating={rating} size={window.innerWidth < 480 ? 40 : 64} />
            </div>

            {isGoodMe && (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    style={{
                        background: 'white',
                        padding: '1.2rem',
                        borderRadius: '1.5rem',
                        display: 'inline-block',
                        marginBottom: '2.5rem',
                        border: '3px solid var(--kid-pink)',
                        boxShadow: 'var(--shadow-chunky)'
                    }}
                >
                    <h3 className="heading-font" style={{ color: 'var(--kid-pink)', fontSize: 'clamp(1rem, 4vw, 1.3rem)' }}>🌟 {level.name} Master 🌟</h3>
                </motion.div>
            )}

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button color="blue" variant="outline" onClick={onHome} style={{ minWidth: '140px' }}>Home</Button>
                <Button color="green" onClick={onNext} style={{ minWidth: '140px' }}>Next Level 🚀</Button>
            </div>
        </div>
    );
};

export default CongratsScreen;
