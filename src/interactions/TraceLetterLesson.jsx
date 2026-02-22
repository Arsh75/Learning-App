import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useSound } from '../hooks/useSound';

const TraceLetterLesson = ({ content, onFinish }) => {
    const { playSound } = useSound();
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const { letter, instruction } = content;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 15;
        ctx.strokeStyle = '#3B9EFF';
    }, []);

    const startDrawing = (e) => {
        const { offsetX, offsetY } = getOffset(e);
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
        setIsDrawing(true);
        setHasStarted(true);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = getOffset(e);
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const getOffset = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        if (e.touches) {
            return {
                offsetX: e.touches[0].clientX - rect.left,
                offsetY: e.touches[0].clientY - rect.top
            };
        }
        return {
            offsetX: e.nativeEvent.offsetX,
            offsetY: e.nativeEvent.offsetY
        };
    };

    const clear = () => {
        playSound('click');
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setHasStarted(false);
    };

    const handleSubmit = () => {
        // Simplified: just check if they drew anything. 
        // Real letter recognition would need a library.
        if (hasStarted) playSound('correct');
        onFinish(hasStarted);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{instruction}</p>

            <div style={{ position: 'relative', width: '300px', height: '400px', margin: '0 auto', background: '#f8fafc', borderRadius: '2rem', border: '5px solid #e2e8f0' }}>
                {/* Background Letter */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18rem',
                    fontWeight: '900',
                    color: '#f1f5f9',
                    userSelect: 'none',
                    pointerEvents: 'none'
                }}>
                    {letter}
                </div>

                {/* Drawing Canvas */}
                <canvas
                    ref={canvasRef}
                    width={300}
                    height={400}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseOut={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    style={{ position: 'absolute', top: 0, left: 0, touchAction: 'none', cursor: 'crosshair' }}
                />
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button variant="outline" size="sm" onClick={clear}>Clear</Button>
                <Button color="green" onClick={handleSubmit} disabled={!hasStarted}>Done! ✅</Button>
            </div>
        </div>
    );
};

export default TraceLetterLesson;
