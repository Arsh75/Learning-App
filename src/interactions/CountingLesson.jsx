import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

const CountingLesson = ({ content, onFinish }) => {
    const [tapped, setTapped] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [selected, setSelected] = useState(null);
    const { target, items, options } = content.content;

    const handleItemClick = (i) => {
        if (showOptions || tapped.includes(i)) return;
        const newTapped = [...tapped, i];
        setTapped(newTapped);

        if (newTapped.length === target) {
            setTimeout(() => setShowOptions(true), 800);
        }
    };

    const handleAnswer = (val) => {
        setSelected(val);
        const correct = val === target;
        setTimeout(() => onFinish(correct), 1500);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                {content.instruction || "Tap each item to count them! 📋"}
            </p>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                justifyContent: 'center',
                marginBottom: '4rem',
                fontSize: '4.5rem'
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

            <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence>
                    {showOptions ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                        >
                            <h3 className="heading-font">How many?</h3>
                            {options.map(opt => (
                                <Button
                                    key={opt}
                                    color={selected === opt ? (opt === target ? 'green' : 'red') : 'orange'}
                                    onClick={() => handleAnswer(opt)}
                                >
                                    {opt}
                                </Button>
                            ))}
                        </motion.div>
                    ) : (
                        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--kid-blue)' }}>
                            {tapped.length}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CountingLesson;
