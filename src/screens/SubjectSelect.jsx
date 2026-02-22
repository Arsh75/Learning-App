import React from 'react';
import InteractionCard from '../components/InteractionCard';
import Button from '../components/Button';
import { ChevronLeft } from 'lucide-react';

const SubjectSelect = ({ grade, onSelect, onBack }) => {
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
                    {grade.emoji} {grade.name} Subjects
                </h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem'
            }}>
                {grade.subjects && grade.subjects.length > 0 ? (
                    grade.subjects.map((subject, idx) => (
                        <InteractionCard
                            key={subject.id}
                            title={subject.name}
                            emoji={subject.emoji}
                            description={`${subject.levels.length} Lessons Available`}
                            color={subject.color}
                            delay={idx * 0.1}
                            onClick={() => onSelect(subject)}
                            className={subject.isLifeSkills ? 'rainbow-shimmer' : ''}
                        />
                    ))
                ) : (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '3rem' }}>
                        <h3 className="heading-font">Coming Soon! 🏗️</h3>
                        <p>We are still adding more fun subjects for {grade.name}!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubjectSelect;
