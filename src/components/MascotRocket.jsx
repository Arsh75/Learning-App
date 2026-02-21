import React from 'react';
import { motion } from 'framer-motion';

const MascotRocket = ({ size = 60, onClick }) => {
    return (
        <motion.div
            className="cursor-pointer"
            onPointerDown={onClick}
            animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            style={{
                fontSize: size,
                display: 'inline-block',
                userSelect: 'none'
            }}
        >
            🚀
        </motion.div>
    );
};

export default MascotRocket;
