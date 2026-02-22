import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import QuizLesson from './QuizLesson';
import { useSound } from '../hooks/useSound';

const StoryReadLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const { panels, questions } = content.content;
    const [panelIdx, setPanelIdx] = useState(0);
    const [quizIdx, setQuizIdx] = useState(-1); // -1 means showing story panels
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const handleNextPanel = () => {
        playSound('click');
        if (panelIdx < panels.length - 1) {
            setPanelIdx(panelIdx + 1);
        } else {
            setQuizIdx(0);
        }
    };

    const handleQuizFinish = (correct) => {
        if (correct) setCorrectAnswers(c => c + 1);

        if (quizIdx < questions.length - 1) {
            setQuizIdx(quizIdx + 1);
        } else {
            const allCorrect = (correct ? correctAnswers + 1 : correctAnswers) === questions.length;
            onFinish(allCorrect);
        }
    };

    return (
        <div>
            <AnimatePresence mode="wait">
                {quizIdx === -1 ? (
                    <motion.div
                        key={`panel-${panelIdx}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>{panels[panelIdx].emoji}</div>
                        <p style={{ fontSize: '1.8rem', lineHeight: '1.6', marginBottom: '3rem', padding: '0 2rem' }}>
                            {panels[panelIdx].text}
                        </p>
                        <Button color="blue" onClick={handleNextPanel}>
                            {panelIdx === panels.length - 1 ? "Start Quiz! 📝" : "Next Page ➡️"}
                        </Button>
                        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Page {panelIdx + 1} of {panels.length}</p>
                    </motion.div>
                ) : (
                    <motion.div
                        key={`quiz-${quizIdx}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <QuizLesson
                            content={questions[quizIdx]}
                            onFinish={handleQuizFinish}
                        />
                        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
                            Question {quizIdx + 1} of {questions.length}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StoryReadLesson;
