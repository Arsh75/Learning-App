import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Award, ArrowRight } from 'lucide-react';
import Button from './Button';

const LessonSession = ({ lesson, onComplete, onExit }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [showCelebration, setShowCelebration] = useState(false);

    // Reset state when lesson changes
    useEffect(() => {
        setSelectedOption(null);
        setIsCorrect(null);
        setShowCelebration(false);
    }, [lesson.id]);

    const handleOptionClick = (option) => {
        if (isCorrect) return;

        setSelectedOption(option);
        const correct = option === (lesson.content.answer || lesson.content.target || lesson.content.missing);
        setIsCorrect(correct);

        if (correct) {
            setShowCelebration(true);
            setTimeout(() => {
                // Simple delay before allowing next
            }, 1500);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lesson-session"
            style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '2rem',
                background: 'white',
                borderRadius: '2rem',
                boxShadow: 'var(--shadow-playful)',
                textAlign: 'center'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ padding: '0.5rem 1rem', background: '#f0fdf4', borderRadius: '1rem', color: '#15803d', fontWeight: 'bold' }}>
                    Level {lesson.level}
                </div>
                <Button variant="outline" size="sm" onClick={onExit}>Exit</Button>
            </div>

            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{lesson.title}</h2>

            <div style={{ marginBottom: '3rem' }}>
                {lesson.type === 'counting' && (
                    <div style={{ fontSize: '5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        {Array.from({ length: lesson.content.target }).map((_, i) => (
                            <motion.span
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="floating"
                            >
                                {lesson.content.items}
                            </motion.span>
                        ))}
                    </div>
                )}

                {lesson.type === 'math_basic' && (
                    <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--primary)' }}>
                        {lesson.content.equation} = ?
                    </div>
                )}

                {lesson.type === 'matching' && (
                    <div style={{ fontSize: '4rem', fontWeight: '800' }}>
                        <span style={{ borderBottom: '5px solid var(--kid-blue)', minWidth: '60px', display: 'inline-block' }}>
                            {isCorrect ? lesson.content.missing : '?'}
                        </span>
                        {lesson.content.word.slice(1)}
                    </div>
                )}

                {lesson.type === 'quiz' && (
                    <div style={{ fontSize: '2.5rem', fontWeight: '600', color: 'var(--text-main)' }}>
                        {lesson.content.question}
                    </div>
                )}
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                maxWidth: '500px',
                margin: '0 auto'
            }}>
                {lesson.content.options.map((option) => (
                    <Button
                        key={option}
                        size="lg"
                        color={selectedOption === option ? (isCorrect ? 'green' : 'pink') : 'blue'}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </Button>
                ))}
            </div>

            <AnimatePresence>
                {isCorrect && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ marginTop: '2.5rem' }}
                    >
                        <div style={{ color: 'var(--kid-green)', fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <CheckCircle2 size={32} /> Awesome! You did it!
                        </div>
                        <Button
                            className="floating"
                            color="yellow"
                            size="lg"
                            style={{ marginTop: '1.5rem' }}
                            onClick={onComplete}
                        >
                            Next Lesson <ArrowRight />
                        </Button>
                    </motion.div>
                )}

                {isCorrect === false && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ color: '#ef4444', marginTop: '1.5rem', fontWeight: 'bold' }}
                    >
                        <XCircle size={24} style={{ verticalReg: 'middle', marginRight: '5px' }} /> Try again! You can do it!
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default LessonSession;
