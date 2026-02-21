import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

const SortLesson = ({ content, onFinish }) => {
    const { items, categories } = content.content; // items: [{name: '🍎', cat: 'Fruit'}], categories: ['Fruit', 'Veggie']
    const [currentIdx, setCurrentIdx] = useState(0);
    const [results, setResults] = useState([]); // {item: '🍎', correct: true}

    const currentItem = items[currentIdx];

    const handleSort = (category) => {
        const isCorrect = currentItem.cat === category;
        setResults([...results, { item: currentItem.name, correct: isCorrect }]);

        if (currentIdx === items.length - 1) {
            const allCorrect = [...results, { item: currentItem.name, correct: isCorrect }].every(r => r.correct);
            setTimeout(() => onFinish(allCorrect), 1000);
        } else {
            setCurrentIdx(currentIdx + 1);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '2rem', fontSize: '1.2rem', fontWeight: '600' }}>
                Where does this belong? 🤔
            </p>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentItem.name}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, x: 100, opacity: 0 }}
                    style={{ fontSize: '6rem', marginBottom: '4rem' }}
                >
                    {currentItem.name}
                </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                {categories.map(cat => (
                    <motion.div
                        key={cat}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSort(cat)}
                        style={{
                            padding: '2rem',
                            background: 'white',
                            border: '4px dashed var(--kid-blue)',
                            borderRadius: '2rem',
                            cursor: 'pointer',
                            minWidth: '150px'
                        }}
                    >
                        <h3 className="heading-font" style={{ color: 'var(--kid-blue)' }}>{cat}</h3>
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                {items.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: i < results.length ? (results[i].correct ? 'var(--kid-green)' : 'var(--kid-red)') : '#e2e8f0'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SortLesson;
