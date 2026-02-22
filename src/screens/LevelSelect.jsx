import React from 'react';
import Button from '../components/Button';
import { ChevronLeft, Lock } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { useSound } from '../hooks/useSound';

const LevelSelect = ({ subject, onSelect, onBack }) => {
    const { playSound } = useSound();
    const { progress } = useProgress();
    const unlocked = progress.unlockedLevels[subject.id] || [1];

    const handleSelect = (level) => {
        playSound('click');
        onSelect(level);
    };

    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '2rem',
                gap: '1rem',
                flexWrap: 'wrap'
            }}>
                <Button variant="outline" size="sm" onClick={onBack} style={{ padding: '0.6rem 1rem' }}>
                    <ChevronLeft size={20} /> Back
                </Button>
                <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', color: 'var(--text-dark)', margin: 0 }}>
                    {subject.emoji} {subject.name} Levels
                </h2>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                {subject.levels.map((level, idx) => {
                    const isUnlocked = unlocked.includes(level.id);
                    const isCompleted = (progress.completedLessons[level.id] || []).length === level.lessons.length;

                    return (
                        <div
                            key={level.id}
                            onClick={isUnlocked ? () => handleSelect(level) : undefined}
                            style={{
                                background: 'white',
                                padding: 'clamp(1rem, 4vw, 2rem)',
                                borderRadius: 'min(2rem, 5vw)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                cursor: isUnlocked ? 'pointer' : 'not-allowed',
                                boxShadow: isUnlocked ? 'var(--shadow-chunky)' : 'none',
                                opacity: isUnlocked ? 1 : 0.6,
                                border: `3px solid ${isUnlocked ? subject.color : '#e2e8f0'}`,
                                transition: 'transform 0.2s',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 4vw, 2rem)' }}>
                                <div style={{
                                    width: 'clamp(40px, 12vw, 60px)',
                                    height: 'clamp(40px, 12vw, 60px)',
                                    borderRadius: '50%',
                                    background: isUnlocked ? subject.color : '#cbd5e1',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                                    fontWeight: '800',
                                    flexShrink: 0
                                }}>
                                    {isUnlocked ? level.id : <Lock size={20} />}
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h3 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', marginBottom: '0.2rem' }}>{level.name}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.8rem, 3vw, 1rem)' }}>{level.lessons.length} Lessons • {isCompleted ? '✅ Completed' : '📚 Ready'}</p>
                                </div>
                            </div>

                            {isUnlocked && (
                                <Button color={subject.color === 'var(--kid-blue)' ? 'blue' : 'green'} size="sm">
                                    {isCompleted ? 'Review' : 'Play!'}
                                </Button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LevelSelect;
