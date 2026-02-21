import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('noorilm-progress');
        return saved ? JSON.parse(saved) : {
            unlockedLevels: {}, // { subjectId: [levelId] }
            completedLessons: {}, // { levelId: [lessonId] }
            stars: {}, // { lessonId: stars }
            totalStars: 0,
            badges: [] // [badgeName]
        };
    });

    useEffect(() => {
        localStorage.setItem('noorilm-progress', JSON.stringify(progress));
    }, [progress]);

    const completeLesson = (subjectId, levelId, lessonId, starsEarned) => {
        setProgress(prev => {
            const levelLessons = prev.completedLessons[levelId] || [];
            if (levelLessons.includes(lessonId)) return prev;

            const newCompleted = {
                ...prev.completedLessons,
                [levelId]: [...levelLessons, lessonId]
            };

            const newStars = {
                ...prev.stars,
                [lessonId]: Math.max(prev.stars[lessonId] || 0, starsEarned)
            };

            const newTotalStars = Object.values(newStars).reduce((a, b) => a + b, 0);

            return {
                ...prev,
                completedLessons: newCompleted,
                stars: newStars,
                totalStars: newTotalStars
            };
        });
    };

    const unlockLevel = (subjectId, levelId) => {
        setProgress(prev => {
            const unlocked = prev.unlockedLevels[subjectId] || [1];
            if (unlocked.includes(levelId)) return prev;
            return {
                ...prev,
                unlockedLevels: {
                    ...prev.unlockedLevels,
                    [subjectId]: [...unlocked, levelId]
                }
            };
        });
    };

    const addBadge = (badgeName) => {
        setProgress(prev => {
            if (prev.badges.includes(badgeName)) return prev;
            return { ...prev, badges: [...prev.badges, badgeName] };
        });
    };

    return (
        <ProgressContext.Provider value={{ progress, completeLesson, unlockLevel, addBadge }}>
            {children}
        </ProgressContext.Provider>
    );
};
