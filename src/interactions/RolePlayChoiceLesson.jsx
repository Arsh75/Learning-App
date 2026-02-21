import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import ScenarioQuizLesson from './ScenarioQuizLesson';

const RolePlayChoiceLesson = ({ content, onFinish }) => {
    const { scenarios, title } = content.content || content;
    const [currentIdx, setCurrentIdx] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);

    const handleScenarioFinish = (isCorrect) => {
        if (isCorrect) setCorrectCount(c => c + 1);

        if (currentIdx === scenarios.length - 1) {
            const allCorrect = (isCorrect ? correctCount + 1 : correctCount) === scenarios.length;
            onFinish(allCorrect);
        } else {
            setCurrentIdx(currentIdx + 1);
        }
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                Scenario {currentIdx + 1} of {scenarios.length}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                >
                    <ScenarioQuizLesson
                        content={scenarios[currentIdx]}
                        onFinish={handleScenarioFinish}
                        isMinified={true}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default RolePlayChoiceLesson;
