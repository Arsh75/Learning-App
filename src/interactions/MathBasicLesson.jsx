import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useSound } from '../hooks/useSound';

const MathBasicLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const [selected, setSelected] = useState(null);
    const { equation, answer, options } = content.content;

    const parts = equation.split(' ');
    const num1 = parseInt(parts[0]);
    const operator = parts[1];
    const num2 = parseInt(parts[2]);

    const handleAnswer = (val) => {
        if (selected !== null) return;
        setSelected(val);
        const correct = val === answer;
        if (correct) {
            playSound('correct');
        } else {
            playSound('wrong');
        }
        setTimeout(() => onFinish(correct), 1000);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{
                fontSize: 'clamp(2rem, 10vw, 4rem)',
                fontWeight: '800',
                color: 'var(--kid-blue)',
                marginBottom: '2rem',
                background: '#f8fafc',
                padding: '1.5rem 2rem',
                borderRadius: '2rem',
                display: 'inline-block',
                boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.05)'
            }}>
                {equation} = ?
            </div>

            {/* Visual Aid: Blocks or Groups */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 'max(1rem, 3vw)', alignItems: 'center', flexWrap: 'wrap' }}>
                    {operator === '*' || operator === 'x' ? (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                            {Array.from({ length: num1 }).map((_, gIdx) => (
                                <div key={gIdx} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', border: '2px dashed #cbd5e1', padding: '0.6rem', borderRadius: '1rem', maxWidth: '120px' }}>
                                    {Array.from({ length: num2 }).map((_, i) => (
                                        <motion.div
                                            key={`${gIdx}-${i}`}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: (gIdx * num2 + i) * 0.05 }}
                                            style={{ width: '25px', height: '25px', background: 'var(--kid-orange)', borderRadius: '6px' }}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', maxWidth: '150px', justifyContent: 'center', background: 'rgba(59, 158, 255, 0.05)', padding: '0.8rem', borderRadius: '1rem' }}>
                                {Array.from({ length: num1 }).map((_, i) => (
                                    <motion.div
                                        key={`n1-${i}`}
                                        initial={{ scale: 0 }}
                                        animate={operator === '-' && i >= (num1 - num2) ? { opacity: 0.2, scale: 0.8, rotate: 45 } : { scale: 1 }}
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            background: 'var(--kid-orange)',
                                            borderRadius: '8px',
                                            border: '2px solid rgba(0,0,0,0.1)'
                                        }}
                                    />
                                ))}
                            </div>

                            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#94a3b8' }}>{operator}</div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', maxWidth: '150px', justifyContent: 'center', background: 'rgba(62, 207, 76, 0.05)', padding: '0.8rem', borderRadius: '1rem' }}>
                                {Array.from({ length: num2 }).map((_, i) => (
                                    <motion.div
                                        key={`n2-${i}`}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            background: operator === '-' ? '#94a3b8' : 'var(--kid-green)',
                                            borderRadius: '8px',
                                            border: '2px solid rgba(0,0,0,0.1)',
                                            opacity: operator === '-' ? 0.4 : 1
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#94a3b8' }}>= ?</div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {options.map(opt => (
                    <Button
                        key={opt}
                        color={selected === opt ? (opt === answer ? 'green' : 'red') : 'blue'}
                        onClick={() => handleAnswer(opt)}
                        disabled={selected !== null}
                        size="lg"
                        style={{ minWidth: '80px', fontSize: '1.5rem' }}
                    >
                        {opt}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default MathBasicLesson;
