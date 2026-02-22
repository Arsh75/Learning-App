import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { ProgressBar } from '../components/ProgressElements';
import QuizLesson from '../interactions/QuizLesson';
import ScenarioQuizLesson from '../interactions/ScenarioQuizLesson';
import CountingLesson from '../interactions/CountingLesson';
import MathBasicLesson from '../interactions/MathBasicLesson';
import MatchingLesson from '../interactions/MatchingLesson';
import FillBlankLesson from '../interactions/FillBlankLesson';
import SortLesson from '../interactions/SortLesson';
import StoryReadLesson from '../interactions/StoryReadLesson';
import DragOrderLesson from '../interactions/DragOrderLesson';
import NumberLineLesson from '../interactions/NumberLineLesson';
import TraceLetterLesson from '../interactions/TraceLetterLesson';
import DiagramLabelLesson from '../interactions/DiagramLabelLesson';
import SpotMistakeLesson from '../interactions/SpotMistakeLesson';
import RolePlayChoiceLesson from '../interactions/RolePlayChoiceLesson';

const LessonSession = ({ level, onComplete, onExit }) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [wrongAttempts, setWrongAttempts] = useState(0);

    const currentLesson = level.lessons[currentIdx];
    const isLast = currentIdx === level.lessons.length - 1;

    const handleNext = (correct) => {
        if (correct) {
            setScore(s => s + 1);
        }

        if (isLast) {
            // Calculate stars (3 = perfect, 2 = some mistakes, 1 = completed)
            const finalScore = correct ? score + 1 : score;
            const stars = finalScore === level.lessons.length ? 3 : (finalScore > level.lessons.length / 2 ? 2 : 1);
            onComplete(stars);
        } else {
            setCurrentIdx(i => i + 1);
            setWrongAttempts(0);
        }
    };

    const renderInteraction = () => {
        switch (currentLesson.type) {
            case 'quiz':
                return <QuizLesson content={currentLesson} onFinish={handleNext} />;
            case 'scenario_quiz':
                return <ScenarioQuizLesson content={currentLesson} onFinish={handleNext} />;
            case 'counting':
                return <CountingLesson content={currentLesson} onFinish={handleNext} />;
            case 'math_basic':
                return <MathBasicLesson content={currentLesson} onFinish={handleNext} />;
            case 'matching':
                return <MatchingLesson content={currentLesson} onFinish={handleNext} />;
            case 'fill_blank':
                return <FillBlankLesson content={currentLesson} onFinish={handleNext} />;
            case 'sort':
                return <SortLesson content={currentLesson} onFinish={handleNext} />;
            case 'story_read':
                return <StoryReadLesson content={currentLesson} onFinish={handleNext} />;
            case 'drag_order':
                return <DragOrderLesson content={currentLesson} onFinish={handleNext} />;
            case 'number_line':
                return <NumberLineLesson content={currentLesson} onFinish={handleNext} />;
            case 'trace_letter':
                return <TraceLetterLesson content={currentLesson} onFinish={handleNext} />;
            case 'diagram_label':
                return <DiagramLabelLesson content={currentLesson} onFinish={handleNext} />;
            case 'spot_mistake':
                return <SpotMistakeLesson content={currentLesson} onFinish={handleNext} />;
            case 'role_play_choice':
                return <RolePlayChoiceLesson content={currentLesson} onFinish={handleNext} />;
            default:
                return (
                    <div style={{ padding: '4rem', textAlign: 'center' }}>
                        <h3>Interaction type "{currentLesson.type}" not built yet!</h3>
                        <Button onClick={() => handleNext(true)}>Skip for now</Button>
                    </div>
                );
        }
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '0.5rem'
            }}>
                <h3 className="heading-font" style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', margin: 0 }}>{level.name}</h3>
                <Button variant="outline" size="sm" color="red" onClick={onExit} style={{ padding: '0.5rem 1rem' }}>Exit</Button>
            </div>

            <ProgressBar current={currentIdx + 1} total={level.lessons.length} />

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentLesson.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    style={{
                        background: 'white',
                        padding: 'clamp(1.5rem, 5vw, 3rem)',
                        borderRadius: 'min(3rem, 8vw)',
                        boxShadow: 'var(--shadow-chunky)',
                        minHeight: 'min(400px, 60vh)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginTop: '1rem',
                        border: '2px solid rgba(0,0,0,0.05)'
                    }}
                >
                    <h2 className="heading-font" style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', marginBottom: '1.5rem', textAlign: 'center', lineHeight: 1.2 }}>
                        {currentLesson.title}
                    </h2>
                    <div style={{ width: '100%' }}>
                        {renderInteraction()}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default LessonSession;
