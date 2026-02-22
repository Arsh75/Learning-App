import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useSound } from '../hooks/useSound';

const NumberLineLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const { start, jump, instruction, target } = content.content || content;
    const [currentPos, setCurrentPos] = useState(content.content?.start || 4);
    const [jumpsLeft, setJumpsLeft] = useState(content.content?.jump || 3);
    const [selected, setSelected] = useState(null);

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleFrogTap = () => {
        if (jumpsLeft > 0) {
            playSound('click');
            setCurrentPos(prev => prev + 1);
            setJumpsLeft(prev => prev - 1);
        }
    };

    const handleNumberClick = (num) => {
        if (jumpsLeft > 0) return;
        setSelected(num);
        const isCorrect = num === (content.content?.target || 7);
        if (isCorrect) {
            playSound('correct');
        } else {
            playSound('wrong');
        }
        setTimeout(() => onFinish(isCorrect), 1500);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                {content.instruction || "Tap the frog to jump!"}
            </p>

            <div style={{ position: 'relative', height: '150px', margin: '4rem 0', padding: '0 2rem' }}>
                {/* Line */}
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: '2rem',
                    right: '2rem',
                    height: '4px',
                    background: '#cbd5e1',
                    zIndex: 1
                }} />

                {/* Numbers & Ticks */}
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
                    {numbers.map(num => (
                        <div key={num} style={{ textAlign: 'center' }}>
                            <div
                                onClick={() => handleNumberClick(num)}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: selected === num ? (num === content.content?.target ? 'var(--kid-green)' : 'var(--kid-red)') : 'white',
                                    border: '2px solid #94a3b8',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: jumpsLeft === 0 ? 'pointer' : 'default',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    marginBottom: '10px',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {num}
                            </div>
                            <div style={{ width: '2px', height: '10px', background: '#94a3b8', margin: '0 auto' }} />
                        </div>
                    ))}
                </div>

                {/* Frog */}
                <motion.div
                    animate={{
                        left: `${(currentPos / 10) * 100}%`,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        fontSize: '3rem',
                        cursor: jumpsLeft > 0 ? 'pointer' : 'default',
                        zIndex: 10,
                        marginLeft: '0'
                    }}
                    onClick={handleFrogTap}
                >
                    🐸
                </motion.div>
            </div>

            {jumpsLeft > 0 ? (
                <div style={{ color: 'var(--kid-blue)', fontWeight: 'bold' }}>
                    Tap the frog to jump {jumpsLeft} more times!
                </div>
            ) : (
                <div style={{ color: 'var(--kid-green)', fontWeight: 'bold' }}>
                    What number did the frog land on?
                </div>
            )}
        </div>
    );
};

export default NumberLineLesson;
