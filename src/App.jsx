import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import GradeSelect from './screens/GradeSelect';
import SubjectSelect from './screens/SubjectSelect';
import LevelSelect from './screens/LevelSelect';
import LessonSession from './screens/LessonSession';
import CongratsScreen from './screens/CongratsScreen';
import { useProgress } from './context/ProgressContext';

const App = () => {
  const [screen, setScreen] = useState('home'); // home, grade, subject, level, lesson, congrats
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const { completeLesson, unlockLevel } = useProgress();

  const navigateTo = (newScreen, data = {}) => {
    if (data.grade) setSelectedGrade(data.grade);
    if (data.subject) setSelectedSubject(data.subject);
    if (data.level) setSelectedLevel(data.level);

    if (newScreen === 'congrats') {
      completeLesson(selectedSubject.id, selectedLevel.id, selectedLevel.lessons[0].id, data.stars);
      setSelectedLevel({ ...selectedLevel, stars: data.stars });

      // Unlock next level if available
      const nextLevelId = selectedLevel.id + 1;
      const nextLevelExists = selectedSubject.levels.find(l => l.id === nextLevelId);
      if (nextLevelExists) {
        unlockLevel(selectedSubject.id, nextLevelId);
      }
    }

    setScreen(newScreen);
  };

  const pageVariants = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="mesh-bg" />
      <Header onLogoClick={() => setScreen('home')} />

      <main className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          >
            {screen === 'home' && <HomeScreen onStart={() => navigateTo('grade')} />}

            {screen === 'grade' && (
              <GradeSelect
                onSelect={(grade) => navigateTo('subject', { grade })}
                onBack={() => setScreen('home')}
              />
            )}

            {screen === 'subject' && (
              <SubjectSelect
                grade={selectedGrade}
                onSelect={(subject) => navigateTo('level', { subject })}
                onBack={() => setScreen('grade')}
              />
            )}

            {screen === 'level' && (
              <LevelSelect
                subject={selectedSubject}
                onSelect={(level) => navigateTo('lesson', { level })}
                onBack={() => setScreen('subject')}
              />
            )}

            {screen === 'lesson' && (
              <LessonSession
                level={selectedLevel}
                onComplete={(stars) => navigateTo('congrats', { stars })}
                onExit={() => navigateTo('level')}
              />
            )}

            {screen === 'congrats' && (
              <CongratsScreen
                level={selectedLevel}
                rating={selectedLevel?.stars || 3}
                onNext={() => navigateTo('level')}
                onHome={() => setScreen('home')}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
