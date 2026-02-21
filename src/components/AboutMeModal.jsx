import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { X } from 'lucide-react';

const AboutMeModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(0);
    const questions = [
        { q: "What is your full name? 🙋‍♂️", placeholder: "Type your name here..." },
        { q: "How old are you? 🎂", placeholder: "Type your age..." },
        { q: "What is your school's name? 🏫", placeholder: "Type your school..." },
        { q: "What is your home address? 🏠", placeholder: "Practice your address..." }
    ];

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(59, 158, 255, 0.2)', backdropFilter: 'blur(10px)',
            zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem'
        }}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                    background: 'white',
                    padding: '3rem',
                    borderRadius: '3rem',
                    maxWidth: '600px',
                    width: '100%',
                    position: 'relative',
                    boxShadow: '0 20px 0 var(--kid-blue)22',
                    border: '4px solid var(--kid-blue)'
                }}
            >
                <button
                    onClick={onClose}
                    style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#f1f5f9', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer' }}
                >
                    <X size={24} />
                </button>

                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🪪</div>
                    <h2 className="heading-font" style={{ fontSize: '2rem', color: 'var(--kid-blue)', marginBottom: '2rem' }}>Practice My Info</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Practice knowing your important details! (We don't save this info)</p>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            style={{ marginBottom: '2rem' }}
                        >
                            <h3 className="heading-font" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{questions[step].q}</h3>
                            <input
                                type="text"
                                placeholder={questions[step].placeholder}
                                style={{
                                    width: '100%',
                                    padding: '1.2rem',
                                    borderRadius: '1.5rem',
                                    border: '3px solid #e2e8f0',
                                    fontSize: '1.2rem',
                                    fontFamily: 'inherit',
                                    textAlign: 'center'
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        {step > 0 && (
                            <Button variant="outline" color="blue" onClick={() => setStep(s => s - 1)}>Back</Button>
                        )}
                        {step < questions.length - 1 ? (
                            <Button color="blue" onClick={() => setStep(s => s + 1)}>Next</Button>
                        ) : (
                            <Button color="green" onClick={onClose}>Done! 🌟</Button>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutMeModal;
