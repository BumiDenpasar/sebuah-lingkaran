"use client";

import { motion } from "framer-motion";

export default function Chat(props: any) {
  return (
    <motion.div
      className="w-full px-5 py-4 rounded-2xl mt-2 bg-white dark:bg-neutral-900 shadow-sm"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full justify-between items-center font-light text-purple-400 dark:text-purple-200 mb-4 text-xs">
        <h5 className="italic">- Kamu Siapa</h5>
        <h5>{props.time}</h5>
      </div>
      <p className="w-full text-purple-800 dark:text-white">{props.chat}</p>
    </motion.div>
  );
}
