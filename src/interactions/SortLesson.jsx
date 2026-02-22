import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { useSound } from '../hooks/useSound';

const SortLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const { items, categories } = content.content; // items: [{name: '🍎', cat: 'Fruit'}], categories: ['Fruit', 'Veggie']
    const [currentIdx, setCurrentIdx] = useState(0);
    const [results, setResults] = useState([]); // {item: '🍎', correct: true}
    const [isProcessing, setIsProcessing] = useState(false);

    const currentItem = items[currentIdx];

    const handleSort = (category) => {
        if (isProcessing) return;
        setIsProcessing(true);

        const isCorrect = currentItem.cat === category;
        if (isCorrect) {
            playSound('correct');
        } else {
            playSound('wrong');
        }
        const newResults = [...results, { item: currentItem.name, correct: isCorrect }];
        setResults(newResults);

        if (currentIdx === items.length - 1) {
            const allCorrect = newResults.every(r => r.correct);
            setTimeout(() => {
                onFinish(allCorrect);
                setIsProcessing(false);
            }, 1000);
        } else {
            setTimeout(() => {
                setCurrentIdx(currentIdx + 1);
                setIsProcessing(false);
            }, 300);
        }
    };

    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: '600' }}>
                Where does this belong? 🤔
            </p>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentItem.name}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, x: 100, opacity: 0 }}
                    style={{ fontSize: 'clamp(3rem, 15vw, 6rem)', marginBottom: '2.5rem' }}
                >
                    {currentItem.name}
                </motion.div>
            </AnimatePresence>

            <div style={{
                display: 'flex',
                gap: 'clamp(1rem, 4vw, 2rem)',
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: '0 1rem'
            }}>
                {categories.map(cat => (
                    <motion.div
                        key={cat}
                        whileHover={!isProcessing ? { scale: 1.05 } : {}}
                        whileTap={!isProcessing ? { scale: 0.95 } : {}}
                        onClick={() => handleSort(cat)}
                        style={{
                            padding: 'clamp(1rem, 5vw, 2rem)',
                            background: 'white',
                            border: '4px dashed var(--kid-blue)',
                            borderRadius: 'min(2rem, 5vw)',
                            cursor: isProcessing ? 'default' : 'pointer',
                            minWidth: 'clamp(120px, 30vw, 180px)',
                            flex: '1 1 120px',
                            maxWidth: '250px'
                        }}
                    >
                        <h3 className="heading-font" style={{ color: 'var(--kid-blue)', fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', margin: 0 }}>{cat}</h3>
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
