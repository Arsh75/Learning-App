import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const DiagramLabelLesson = ({ content, onFinish }) => {
    const { labels, spots, title } = content.content || content;
    const [selectedLabel, setSelectedLabel] = useState(null);
    const [placed, setPlaced] = useState({}); // { spotId: labelText }
    const [wrong, setWrong] = useState(null);

    const handleSpotClick = (spotId) => {
        if (!selectedLabel) return;

        const spot = spots.find(s => s.id === spotId);
        if (spot.correct === selectedLabel) {
            setPlaced({ ...placed, [spotId]: selectedLabel });
            setSelectedLabel(null);

            if (Object.keys(placed).length + 1 === spots.length) {
                setTimeout(() => onFinish(true), 1000);
            }
        } else {
            setWrong(spotId);
            setTimeout(() => setWrong(null), 500);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '300px', height: '400px', margin: '0 auto 3rem', background: '#f8fafc', borderRadius: '3rem', border: '4px solid var(--kid-blue)' }}>
                {/* Placeholder for the diagram/image */}
                <div style={{ fontSize: '10rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }}>
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
                            width: '100px',
                            height: '40px',
                            border: `2px dashed ${placed[spot.id] ? 'var(--kid-green)' : (wrong === spot.id ? 'var(--kid-red)' : '#cbd5e1')}`,
                            borderRadius: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: placed[spot.id] ? '#f0fdf4' : 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            fontSize: '0.9rem',
                            fontWeight: '700'
                        }}
                    >
                        {placed[spot.id] || "?"}
                        <div style={{ position: 'absolute', width: '20px', height: '2px', background: '#cbd5e1', left: spot.lineX, top: spot.lineY, transform: `rotate(${spot.lineRotate || 0}deg)` }} />
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
                            onClick={() => setSelectedLabel(label)}
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
