"use client";

import { AnimatePresence, motion } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
