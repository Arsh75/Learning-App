import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useSound } from '../hooks/useSound';

const SpotMistakeLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const { items, totalMistakes } = content.content || content;
    const [found, setFound] = useState([]); // Array of mistake IDs
    const [wrong, setWrong] = useState(null);

    const handleItemClick = (item) => {
        if (item.isMistake) {
            if (found.includes(item.id)) return;
            playSound('correct');
            const newFound = [...found, item.id];
            setFound(newFound);

            if (newFound.length === totalMistakes) {
                setTimeout(() => onFinish(true), 1000);
            }
        } else {
            playSound('wrong');
            setWrong(item.id);
            setTimeout(() => setWrong(null), 500);
        }
    };

    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', marginBottom: '1.5rem', padding: '0 1rem' }}>
                Can you find the {totalMistakes} mistakes in this scene? 🧐
            </p>

            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                aspectRatio: '1/1',
                maxHeight: '400px',
                margin: '0 auto',
                background: '#f8fafc',
                borderRadius: 'min(3rem, 5vw)',
                border: '4px solid #e2e8f0',
                padding: '1rem',
                overflow: 'hidden'
            }}>
                {items.map(item => (
                    <motion.div
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            position: 'absolute',
                            top: item.y,
                            left: item.x,
                            fontSize: 'clamp(2rem, 8vw, 4rem)',
                            cursor: 'pointer',
                            filter: found.includes(item.id) ? 'grayscale(100%)' : 'none',
                            opacity: found.includes(item.id) ? 0.5 : 1,
                            background: wrong === item.id ? 'rgba(255, 0, 0, 0.2)' : 'transparent',
                            borderRadius: '50%',
                            padding: '10px',
                            transform: 'translate(-50%, -50%)', // Center the emoji on the coordinates
                            touchAction: 'none'
                        }}
                    >
                        {item.emoji}
                        {found.includes(item.id) && (
                            <div style={{ position: 'absolute', top: 0, right: 0, fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>❌</div>
                        )}
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', fontSize: '1.5rem', fontWeight: '800', color: 'var(--kid-blue)' }}>
                Found: {found.length} / {totalMistakes}
            </div>
        </div>
    );
};

export default SpotMistakeLesson;
