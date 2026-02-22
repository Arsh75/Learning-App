import React, { useState } from 'react';
import InteractionCard from '../components/InteractionCard';
import AboutMeModal from '../components/AboutMeModal';
import Button from '../components/Button';
import { ChevronLeft } from 'lucide-react';
import { gradesData } from '../data/content';

const GradeSelect = ({ onSelect, onBack }) => {
    const [showAboutMe, setShowAboutMe] = useState(false);

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                <Button variant="outline" size="sm" onClick={onBack} style={{ padding: '0.6rem 1rem' }}>
                    <ChevronLeft size={20} /> Back
                </Button>
                <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', color: 'var(--text-dark)', margin: 0 }}>Select Your Grade 🎒</h2>
                <Button color="pink" size="sm" onClick={() => setShowAboutMe(true)} style={{ padding: '0.6rem 1rem' }}>
                    About Me 🪪
                </Button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem'
            }}>
                {gradesData.map((grade, idx) => (
                    <InteractionCard
                        key={grade.id}
                        title={grade.name}
                        emoji={grade.emoji}
                        description={grade.tagline}
                        color={grade.color}
                        delay={idx * 0.1}
                        onClick={() => onSelect(grade)}
                    />
                ))}
            </div>

            <AboutMeModal isOpen={showAboutMe} onClose={() => setShowAboutMe(false)} />
        </div>
    );
};

export default GradeSelect;
