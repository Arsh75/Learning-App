import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useSound } from '../hooks/useSound';

const QuizLesson = ({ content, onFinish }) => {
    const [qIdx, setQIdx] = useState(0);
    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);

    const questions = content.questions || [content];
    const currentQ = questions[qIdx];

    const { playSound } = useSound();

    const handleAnswer = (idx) => {
        if (selected !== null) return;
        setSelected(idx);
        const correct = idx === currentQ.correct;
        setIsCorrect(correct);
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
                setIsCorrect(null);
            } else {
                onFinish((correct ? score + 1 : score) === questions.length);
            }
        }, 1000);
    };

    const wrongVariants = {
        shake: { x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.4 } }
    };

    return (
        <div>
            <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', marginBottom: '2rem', textAlign: 'center' }}>
                {currentQ.question}
            </h3>

            {questions.length > 1 && (
                <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '1rem' }}>
                    Question {qIdx + 1} of {questions.length}
                </p>
            )}

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
                gap: '1.5rem',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                {currentQ.options.map((option, idx) => (
                    <motion.div
                        key={`${qIdx}-${idx}`}
                        animate={selected === idx && !isCorrect ? "shake" : ""}
                        variants={wrongVariants}
                    >
                        <Button
                            color={selected === idx ? (isCorrect ? 'green' : 'red') : 'blue'}
                            onClick={() => handleAnswer(idx)}
                            disabled={selected !== null}
                            style={{ width: '100%', fontSize: '1.5rem' }}
                        >
                            {option}
                        </Button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default QuizLesson;
