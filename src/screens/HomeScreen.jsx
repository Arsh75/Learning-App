import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import MascotRocket from '../components/MascotRocket';

const HomeScreen = ({ onStart }) => {
    return (
        <div style={{ textAlign: 'center', padding: 'clamp(2rem, 10vh, 4rem) 1rem' }}>
            <MascotRocket size={120} />
            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', color: 'var(--kid-blue)', marginBottom: '1rem' }}
            >
                Noorilm
            </motion.h1>
            <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', color: 'var(--text-muted)', marginBottom: '3rem', fontWeight: 'bold' }}>
                Embark on a Fun Learning Journey! 🚀
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                <Button size="lg" color="blue" onClick={onStart}>
                    Let's Start! 🌟
                </Button>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Interactive Lessons for Grades 1–5</p>
            </div>

            <div style={{ marginTop: 'clamp(3rem, 10vh, 5rem)', display: 'flex', justifyContent: 'center', gap: 'clamp(1rem, 5vw, 3rem)', flexWrap: 'wrap' }}>
                {['🔢 Math', '🔤 ABCs', '🌍 World', '🌈 Good Me'].map((item, i) => (
                    <motion.div
                        key={item}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', fontWeight: '800', opacity: 0.6 }}
                    >
                        {item}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;
