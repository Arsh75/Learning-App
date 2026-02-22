import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import Button from '../components/Button';
import { GripVertical } from 'lucide-react';
import { useSound } from '../hooks/useSound';

const DragOrderLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const { items, correctOrder } = content.content; // items: ['Step 3', 'Step 1', 'Step 2'], correctOrder: ['Step 1', 'Step 2', 'Step 3']
    const [currentItems, setCurrentItems] = useState(items);
    const [submitted, setSubmitted] = useState(false);

    const checkOrder = () => {
        const isCorrect = JSON.stringify(currentItems) === JSON.stringify(correctOrder);
        setSubmitted(true);
        if (isCorrect) {
            playSound('correct');
        } else {
            playSound('wrong');
        }
        setTimeout(() => onFinish(isCorrect), 1500);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
                Drag the steps into the correct order! 👆👇
            </p>

            <Reorder.Group
                axis="y"
                values={currentItems}
                onReorder={setCurrentItems}
                style={{ listStyle: 'none', padding: 0, maxWidth: '500px', margin: '0 auto 3rem' }}
            >
                {currentItems.map((item) => (
                    <Reorder.Item
                        key={item}
                        value={item}
                        style={{
                            background: 'white',
                            padding: '1.2rem',
                            marginBottom: '1rem',
                            borderRadius: '1.5rem',
                            border: '3px solid var(--kid-blue)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'grab',
                            boxShadow: 'var(--shadow-chunky)'
                        }}
                        whileDrag={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                    >
                        <GripVertical color="var(--kid-blue)" />
                        <span style={{ fontSize: '1.3rem', fontWeight: '700' }}>{item}</span>
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            <Button
                color="green"
                onClick={checkOrder}
                disabled={submitted}
            >
                Check My Order! ✅
            </Button>
        </div>
    );
};

export default DragOrderLesson;
