import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { useSound } from '../hooks/useSound';

const CountingLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const [tapped, setTapped] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [selected, setSelected] = useState(null);
    const { target, items, options } = content.content;

    const handleItemClick = (i) => {
        if (showOptions || tapped.includes(i)) return;
        playSound('click');
        const newTapped = [...tapped, i];
        setTapped(newTapped);

        if (newTapped.length === target) {
            setTimeout(() => setShowOptions(true), 800);
        }
    };

    const handleAnswer = (val) => {
        if (selected !== null) return;
        setSelected(val);
        const correct = val === target;
        if (correct) {
            playSound('correct');
        } else {
            playSound('wrong');
        }
        setTimeout(() => onFinish(correct), 1000);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', marginBottom: '2rem' }}>
                {content.instruction || "Tap each item to count them! 📋"}
            </p>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                marginBottom: '3rem',
                fontSize: 'clamp(3rem, 12vw, 4.5rem)'
            }}>
                {Array.from({ length: target }).map((_, i) => (
                    <motion.div
                        key={i}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => handleItemClick(i)}
                        animate={tapped.includes(i) ? {
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                            filter: 'none'
                        } : {
                            filter: 'grayscale(100%)'
                        }}
                        style={{
                            cursor: tapped.includes(i) ? 'default' : 'pointer',
                            opacity: tapped.includes(i) ? 1 : 0.4,
                            transition: 'all 0.3s'
                        }}
                    >
                        {items}
                    </motion.div>
                ))}
            </div>

            <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence>
                    {showOptions ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}
                        >
                            <h3 className="heading-font" style={{ fontSize: '1.5rem' }}>How many?</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {options.map(opt => (
                                    <Button
                                        key={opt}
                                        color={selected === opt ? (opt === target ? 'green' : 'red') : 'orange'}
                                        onClick={() => handleAnswer(opt)}
                                        disabled={selected !== null}
                                    >
                                        {opt}
                                    </Button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--kid-blue)' }}>
                            {tapped.length}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CountingLesson;
