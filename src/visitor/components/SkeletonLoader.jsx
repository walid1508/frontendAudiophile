import { motion } from 'framer-motion';

const SkeletonLoader = () => {
    const squareAnimation = {
        animate: {
            scale: [1, 0.8, 1],
            rotate: [0, 10, -10, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            transition: {
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
            },
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid grid-cols-2 gap-4">
                <motion.div className="bg-gray-300 w-24 h-24"
                            variants={squareAnimation}
                            animate="animate"></motion.div>
                <motion.div className="bg-gray-300 w-24 h-24"
                            variants={squareAnimation}
                            animate="animate"></motion.div>
                <motion.div className="bg-gray-300 w-24 h-24"
                            variants={squareAnimation}
                            animate="animate"></motion.div>
                <motion.div className="bg-gray-300 w-24 h-24"
                            variants={squareAnimation}
                            animate="animate"></motion.div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
