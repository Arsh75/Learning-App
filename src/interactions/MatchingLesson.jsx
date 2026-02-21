import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const MatchingLesson = ({ content, onFinish }) => {
    const { pairs } = content.content; // e.g. [{left: 'A', right: 'a'}, {left: 'B', right: 'b'}]
    const [leftSelected, setLeftSelected] = useState(null);
    const [matched, setMatched] = useState([]); // Array of left values
    const [wrong, setWrong] = useState(null);

    const handleLeftClick = (val) => {
        if (matched.includes(val)) return;
        setLeftSelected(val);
        setWrong(null);
    };

    const handleRightClick = (rightVal) => {
        if (!leftSelected) return;

        const pair = pairs.find(p => p.left === leftSelected);
        if (pair.right === rightVal) {
            const newMatched = [...matched, leftSelected];
            setMatched(newMatched);
            setLeftSelected(null);

            if (newMatched.length === pairs.length) {
                setTimeout(() => onFinish(true), 1000);
            }
        } else {
            setWrong(rightVal);
            setTimeout(() => setWrong(null), 500);
        }
    };

    return (
        <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', padding: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {pairs.map(p => (
                    <Button
                        key={p.left}
                        color={matched.includes(p.left) ? 'green' : (leftSelected === p.left ? 'orange' : 'blue')}
                        onClick={() => handleLeftClick(p.left)}
                        disabled={matched.includes(p.left)}
                        style={{ width: '150px', fontSize: '1.5rem' }}
                    >
                        {p.left}
                    </Button>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Shuffle implementation would be better, but keeping it simple for now */}
                {[...pairs].reverse().map(p => (
                    <Button
                        key={p.right}
                        color={matched.some(m => pairs.find(pair => pair.left === m).right === p.right) ? 'green' : (wrong === p.right ? 'red' : 'purple')}
                        onClick={() => handleRightClick(p.right)}
                        disabled={matched.some(m => pairs.find(pair => pair.left === m).right === p.right)}
                        style={{ width: '150px', fontSize: '1.5rem' }}
                    >
                        {p.right}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default MatchingLesson;
