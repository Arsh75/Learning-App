import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useSound } from '../hooks/useSound';

const FillBlankLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const [qIdx, setQIdx] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);

    const questions = (content.content?.questions || content.questions) || [content.content || content];
    const currentQ = questions[qIdx];
    const parts = currentQ.sentence.split('___');

    const handleAnswer = (val) => {
        if (selected !== null) return;
        setSelected(val);
        const correct = val === currentQ.answer;
        if (correct) {
            setScore(s => s + 1);
            playSound('correct');
        } else {
            playSound('wrong');
        }

        setTimeout(() => {
            if (qIdx < questions.length - 1) {
                setQIdx(qIdx + 1);
                setSelected(null);
            } else {
                onFinish((correct ? score + 1 : score) === questions.length);
            }
        }, 1000);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            {questions.length > 1 && (
                <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
                    Sentence {qIdx + 1} of {questions.length}
                </p>
            )}

            <div style={{
                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                fontWeight: '700',
                marginBottom: '4rem',
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: '2rem',
                lineHeight: '1.4'
            }}>
                {parts[0]}
                <span style={{
                    borderBottom: '4px solid var(--kid-blue)',
                    minWidth: '100px',
                    display: 'inline-block',
                    color: selected === currentQ.answer ? 'var(--kid-green)' : (selected ? 'var(--kid-red)' : 'transparent'),
                    padding: '0 10px',
                    margin: '0 5px'
                }}>
                    {selected || '????'}
                </span>
                {parts[1]}
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {currentQ.options.map(opt => (
                    <Button
                        key={opt}
                        color={selected === opt ? (opt === currentQ.answer ? 'green' : 'red') : 'blue'}
                        onClick={() => handleAnswer(opt)}
                        disabled={selected !== null}
                    >
                        {opt}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default FillBlankLesson;
