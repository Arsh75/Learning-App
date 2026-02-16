import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calculator, Globe, Music, Palette, Star, ChevronLeft, Award } from 'lucide-react';
import InteractionCard from '../components/InteractionCard';
import Button from '../components/Button';
import LessonSession from '../components/LessonSession';
import { gradesData } from '../data/content';

const Home = () => {
    const [selectedGrade, setSelectedGrade] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [userProgress, setUserProgress] = useState({}); // { 'math-1': 0 } index of last completed
    const [showCongrats, setShowCongrats] = useState(false);

    const grades = [
        { id: 1, title: 'Grade 1', color: 'blue', description: 'Fun for 6-7 year olds' },
        { id: 2, title: 'Grade 2', color: 'green', description: 'Adventures for 7-8 year olds' },
        { id: 3, title: 'Grade 3', color: 'orange', description: 'Discovery for 8-9 year olds' },
        { id: 4, title: 'Grade 4', color: 'purple', description: 'Knowledge for 9-10 year olds' },
        { id: 5, title: 'Grade 5', color: 'pink', description: 'Skills for 10-11 year olds' },
    ];

    const handleSubjectSelect = (subject) => {
        setSelectedSubject(subject);
        setCurrentLessonIndex(0);
        setShowCongrats(false);
    };

    const handleLessonComplete = () => {
        const nextIndex = currentLessonIndex + 1;
        if (nextIndex < selectedSubject.lessons.length) {
            setCurrentLessonIndex(nextIndex);
        } else {
            // Progress update
            setUserProgress(prev => ({
                ...prev,
                [selectedSubject.id]: (prev[selectedSubject.id] || 0) + 1
            }));
            setShowCongrats(true);
            setSelectedSubject(null);
        }
    };

    // Helper to map icon string to Component
    const IconMap = {
        Calculator: Calculator,
        BookOpen: BookOpen,
        Globe: Globe,
        Palette: Palette,
        Music: Music,
        Star: Star
    };

    return (
        <div className="container">
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}
                    onClick={() => { setSelectedGrade(null); setSelectedSubject(null); }}
                    className="cursor-pointer"
                >
                    🚀 KiddoLearn
                </motion.h1>
            </header>

            <main>
                <AnimatePresence mode="wait">
                    {/* 1. Grade Selection */}
                    {!selectedGrade && (
                        <motion.div
                            key="grade-selection"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                        >
                            <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
                                Select Your Grade 🎒
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '2rem'
                            }}>
                                {grades.map((grade, idx) => (
                                    <InteractionCard
                                        key={grade.id}
                                        title={grade.title}
                                        description={grade.description}
                                        color={grade.color}
                                        delay={idx * 0.1}
                                        onClick={() => setSelectedGrade(grade)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* 2. Subject Selection */}
                    {selectedGrade && !selectedSubject && (
                        <motion.div
                            key="subject-selection"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
                                <Button variant="outline" size="sm" onClick={() => setSelectedGrade(null)}>
                                    <ChevronLeft /> Back
                                </Button>
                                <h2 style={{ fontSize: '2rem' }}>
                                    Choose a Subject ✨
                                </h2>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '2rem'
                            }}>
                                {(gradesData[selectedGrade.id]?.subjects || []).map((subject, idx) => (
                                    <InteractionCard
                                        key={subject.id}
                                        title={subject.title}
                                        icon={IconMap[subject.icon]}
                                        description={`${subject.lessons.length} fun levels`}
                                        color={subject.color}
                                        delay={idx * 0.1}
                                        onClick={() => handleSubjectSelect(subject)}
                                    />
                                ))}
                                {/* Fallback for grades without data yet */}
                                {(!gradesData[selectedGrade.id]) && (
                                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '2rem' }}>
                                        <h3>Coming Soon! 🚧</h3>
                                        <p>We're building exciting lessons for {selectedGrade.title}!</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* 3. Active Lesson Session */}
                    {selectedSubject && (
                        <motion.div
                            key="lesson-session"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                        >
                            <LessonSession
                                lesson={selectedSubject.lessons[currentLessonIndex]}
                                onComplete={handleLessonComplete}
                                onExit={() => setSelectedSubject(null)}
                            />
                        </motion.div>
                    )}
                    {/* 4. Congratulations Screen */}
                    {showCongrats && !selectedSubject && (
                        <motion.div
                            key="congrats-screen"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ textAlign: 'center', padding: '4rem' }}
                        >
                            <div style={{ fontSize: '6rem', marginBottom: '2rem' }}>🏆</div>
                            <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                                Super Job!
                            </h2>
                            <p style={{ fontSize: '1.5rem', marginBottom: '3rem' }}>
                                You completed all levels! You're a star! ⭐
                            </p>
                            <Button size="lg" color="yellow" onClick={() => setShowCongrats(false)}>
                                Keep Learning!
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <footer style={{ marginTop: '5rem', textAlign: 'center', opacity: 0.6 }}>
                <p>© 2026 KiddoLearn - Fun Learning Journey</p>
            </footer>
        </div>
    );
};

export default Home;
