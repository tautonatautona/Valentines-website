'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[300px] bg-rose-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Decorative Hearts */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="text-rose-400"
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                repeat: Infinity,
              }}
            >
              <Heart
                size={i * 6 + 12}
                fill="#fda4af"
                className={i === 3 ? 'text-rose-500' : ''}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">
            Made with Love 💕
          </h3>
          <p className="text-xl text-rose-600 mb-6">
            For My Beautiful Baone
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block">
            <motion.div
              className="text-rose-500 text-lg font-serif italic border-b-2 border-rose-300 pb-2 px-8"
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Forever Yours ❤️
            </motion.div>
          </div>
        </motion.div>

        {/* Valentine's Day Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-full px-6 py-2 text-white font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Happy Valentine&apos;s Day 2026 💕
          </motion.div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="flex items-center justify-center gap-4 max-w-md mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1" />
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={16} fill="#f43f5e" className="text-rose-500" />
          </motion.div>
          <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1" />
        </motion.div>

        {/* Final Message */}
        <motion.p
          className="text-rose-500 italic text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Every day is Valentine&apos;s Day when I&apos;m with you 💕
        </motion.p>

        {/* Copyright */}
        <motion.div
          className="mt-12 text-sm text-rose-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <p>
            © 2026 Valentine&apos;s Day - A Labor of Love
          </p>
        </motion.div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute bottom-20 left-10 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300/40"
            style={{ left: i * 30, top: i * 20 }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          >
            <Heart size={i * 8 + 8} fill="#fda4af" />
          </motion.div>
        ))}
      </div>
    </footer>
  );
}

