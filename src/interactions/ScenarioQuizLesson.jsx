import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { Star } from 'lucide-react';

const ScenarioQuizLesson = ({ content, onFinish, isMinified = false }) => {
    const [qIdx, setQIdx] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);

    const data = content.content || content;
    const questions = data.questions || [data];
    const currentQ = questions[qIdx];
    const isCorrect = selected === currentQ.correct;

    const handleAnswer = (idx) => {
        if (selected !== null) return;
        setSelected(idx);

        const correct = idx === currentQ.correct;
        if (correct) setScore(s => s + 1);

        if (isMinified) {
            setTimeout(() => {
                if (qIdx < questions.length - 1) {
                    setQIdx(qIdx + 1);
                    setSelected(null);
                } else {
                    onFinish((correct ? score + 1 : score) === questions.length);
                }
            }, 1500);
        }
    };

    const handleContinue = () => {
        if (qIdx < questions.length - 1) {
            setQIdx(qIdx + 1);
            setSelected(null);
        } else {
            onFinish(score === questions.length);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            {!isMinified && (
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ fontSize: '6rem', marginBottom: '2rem' }}
                >
                    {currentQ.scenario_emoji || '🎭'}
                </motion.div>
            )}

            <p style={{ fontSize: isMinified ? '1.2rem' : '1.5rem', marginBottom: '2rem', fontWeight: '600' }}>
                {currentQ.instruction}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
                {currentQ.options.map((option, idx) => (
                    <Button
                        key={`${qIdx}-${idx}`}
                        color={selected === idx ? (isCorrect ? 'green' : 'red') : 'purple'}
                        onClick={() => handleAnswer(idx)}
                        disabled={selected !== null}
                    >
                        {option}
                    </Button>
                ))}
            </div>

            <AnimatePresence>
                {selected !== null && !isMinified && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            marginTop: '3rem',
                            padding: '2rem',
                            borderRadius: '2rem',
                            background: isCorrect ? '#f0fdf4' : '#fef2f2',
                            border: `3px solid ${isCorrect ? 'var(--kid-green)' : 'var(--kid-red)'}`
                        }}
                    >
                        <h3 className="heading-font" style={{ color: isCorrect ? 'var(--kid-green)' : 'var(--kid-red)' }}>
                            {isCorrect ? 'Great Choice! 🌟' : 'Let\'s think again... 🤔'}
                        </h3>
                        {currentQ.feedback && (
                            <p style={{ margin: '1rem 0' }}>{isCorrect ? currentQ.feedback.correct : currentQ.feedback.wrong}</p>
                        )}
                        <Button color={isCorrect ? 'green' : 'pink'} onClick={handleContinue}>
                            {isCorrect ? (qIdx < questions.length - 1 ? 'Next' : 'Finish!') : 'Try Again'}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ScenarioQuizLesson;
