import React, { useState, useRef } from 'react';
import MascotRocket from './MascotRocket';
import { useProgress } from '../context/ProgressContext';
import { Star, Award } from 'lucide-react';

const Header = ({ title = "Noorilm", onLogoClick }) => {
    const { progress } = useProgress();
    const [longPressTimer, setLongPressTimer] = useState(null);
    const [showParentMode, setShowParentMode] = useState(false);

    const handlePointerDown = () => {
        const timer = setTimeout(() => {
            setShowParentMode(true);
        }, 3000);
        setLongPressTimer(timer);
    };

    const handlePointerUp = () => {
        clearTimeout(longPressTimer);
    };

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 5%',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '1rem'
        }}>
            <div
                onClick={onLogoClick}
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}
            >
                <MascotRocket onClick={handlePointerDown} />
                <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: 'var(--kid-blue)', margin: 0 }}>{title}</h1>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{
                    background: 'white',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: 'var(--shadow-chunky)',
                    border: '2px solid var(--kid-yellow)'
                }}>
                    <Star color="var(--kid-yellow)" fill="var(--kid-yellow)" size={24} />
                    <span style={{ fontWeight: '800', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                        {progress.totalStars}
                    </span>
                </div>

                {progress.badges.length > 0 && (
                    <div style={{
                        background: 'white',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: 'var(--shadow-chunky)',
                        border: '2px solid var(--kid-purple)'
                    }}>
                        <Award color="var(--kid-purple)" size={24} />
                        <span style={{ fontWeight: '800', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                            {progress.badges.length}
                        </span>
                    </div>
                )}
            </div>

            {showParentMode && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} onClick={() => setShowParentMode(false)}>
                    <div style={{ background: 'white', padding: '3rem', borderRadius: '2rem', maxWidth: '500px' }} onClick={e => e.stopPropagation()}>
                        <h2 className="heading-font">Parent Dashboard 👨‍👩‍👧</h2>
                        <p>Total Stars: {progress.totalStars}</p>
                        <p>Badges Earned: {progress.badges.join(', ') || 'None yet'}</p>
                        <button
                            className="heading-font"
                            style={{ marginTop: '2rem', padding: '1rem 2rem', background: 'var(--kid-red)', color: 'white', border: 'none', borderRadius: '1rem' }}
                            onClick={() => setShowParentMode(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
