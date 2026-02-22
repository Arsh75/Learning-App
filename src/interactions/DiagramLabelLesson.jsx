import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useSound } from '../hooks/useSound';

const DiagramLabelLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const { labels, spots, title } = content.content || content;
    const [selectedLabel, setSelectedLabel] = useState(null);
    const [placed, setPlaced] = useState({}); // { spotId: labelText }
    const [wrong, setWrong] = useState(null);

    const handleSpotClick = (spotId) => {
        if (!selectedLabel) return;

        const spot = spots.find(s => s.id === spotId);
        if (spot.correct === selectedLabel) {
            playSound('correct');
            setPlaced({ ...placed, [spotId]: selectedLabel });
            setSelectedLabel(null);

            if (Object.keys(placed).length + 1 === spots.length) {
                setTimeout(() => onFinish(true), 1000);
            }
        } else {
            playSound('wrong');
            setWrong(spotId);
            setTimeout(() => setWrong(null), 500);
        }
    };

    const handleLabelSelect = (label) => {
        playSound('click');
        setSelectedLabel(label);
    };

    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <div style={{
                position: 'relative',
                width: 'min(300px, 90vw)',
                height: 'min(400px, 60vh)',
                margin: '0 auto 2rem',
                background: '#f8fafc',
                borderRadius: 'min(3rem, 5vw)',
                border: '4px solid var(--kid-blue)',
                overflow: 'hidden'
            }}>
                {/* Placeholder for the diagram/image */}
                <div style={{ fontSize: 'clamp(5rem, 20vw, 10rem)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }}>
                    {content.mainEmoji || "🧍"}
                </div>

                {spots.map(spot => (
                    <div
                        key={spot.id}
                        onClick={() => handleSpotClick(spot.id)}
                        style={{
                            position: 'absolute',
                            top: spot.y,
                            left: spot.x,
                            width: 'min(100px, 30vw)',
                            height: 'min(40px, 8vw)',
                            border: `2px dashed ${placed[spot.id] ? 'var(--kid-green)' : (wrong === spot.id ? 'var(--kid-red)' : '#cbd5e1')}`,
                            borderRadius: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: placed[spot.id] ? '#f0fdf4' : 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                            fontWeight: '700',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        {placed[spot.id] || "?"}
                        {/* The line indicator if coordinates provided */}
                        {spot.lineX && <div style={{ position: 'absolute', width: '20px', height: '2px', background: '#cbd5e1', left: spot.lineX, top: spot.lineY, transform: `rotate(${spot.lineRotate || 0}deg)` }} />}
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                {labels.map(label => {
                    const isPlaced = Object.values(placed).includes(label);
                    return (
                        <Button
                            key={label}
                            size="sm"
                            color={selectedLabel === label ? 'orange' : 'blue'}
                            onClick={() => handleLabelSelect(label)}
                            disabled={isPlaced}
                            style={{ opacity: isPlaced ? 0.3 : 1 }}
                        >
                            {label}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

export default DiagramLabelLesson;
