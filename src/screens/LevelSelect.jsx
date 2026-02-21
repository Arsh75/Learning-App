import React from 'react';
import Button from '../components/Button';
import { ChevronLeft, Lock } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

const LevelSelect = ({ subject, onSelect, onBack }) => {
    const { progress } = useProgress();
    const unlocked = progress.unlockedLevels[subject.id] || [1];

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', gap: '1.5rem' }}>
                <Button variant="outline" size="sm" onClick={onBack}>
                    <ChevronLeft /> Back
                </Button>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>
                    {subject.emoji} {subject.name} Levels
                </h2>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                {subject.levels.map((level, idx) => {
                    const isUnlocked = unlocked.includes(level.id);
                    const isCompleted = (progress.completedLessons[level.id] || []).length === level.lessons.length;

                    return (
                        <div
                            key={level.id}
                            onClick={isUnlocked ? () => onSelect(level) : undefined}
                            style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                cursor: isUnlocked ? 'pointer' : 'not-allowed',
                                boxShadow: isUnlocked ? 'var(--shadow-chunky)' : 'none',
                                opacity: isUnlocked ? 1 : 0.6,
                                border: `3px solid ${isUnlocked ? subject.color : '#e2e8f0'}`,
                                transition: 'transform 0.2s'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: isUnlocked ? subject.color : '#cbd5e1',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: '800'
                                }}>
                                    {isUnlocked ? level.id : <Lock size={24} />}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{level.name}</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>{level.lessons.length} Lessons • {isCompleted ? '✅ Completed' : '📚 Ready to play'}</p>
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
