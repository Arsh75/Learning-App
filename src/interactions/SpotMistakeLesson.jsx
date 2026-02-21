import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const SpotMistakeLesson = ({ content, onFinish }) => {
    const { items, totalMistakes } = content.content || content;
    const [found, setFound] = useState([]); // Array of mistake IDs
    const [wrong, setWrong] = useState(null);

    const handleItemClick = (item) => {
        if (item.isMistake) {
            if (found.includes(item.id)) return;
            const newFound = [...found, item.id];
            setFound(newFound);

            if (newFound.length === totalMistakes) {
                setTimeout(() => onFinish(true), 1500);
            }
        } else {
            setWrong(item.id);
            setTimeout(() => setWrong(null), 500);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Can you find the {totalMistakes} mistakes in this scene? 🧐
            </p>

            <div style={{
                position: 'relative',
                width: '100%',
                height: '400px',
                background: '#f8fafc',
                borderRadius: '3rem',
                border: '4px solid #e2e8f0',
                padding: '2rem'
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
                            fontSize: '4rem',
                            cursor: 'pointer',
                            filter: found.includes(item.id) ? 'grayscale(100%)' : 'none',
                            opacity: found.includes(item.id) ? 0.5 : 1,
                            background: wrong === item.id ? 'rgba(255, 0, 0, 0.2)' : 'transparent',
                            borderRadius: '50%',
                            padding: '10px'
                        }}
                    >
                        {item.emoji}
                        {found.includes(item.id) && (
                            <div style={{ position: 'absolute', top: 0, right: 0, fontSize: '1.5rem' }}>❌</div>
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
