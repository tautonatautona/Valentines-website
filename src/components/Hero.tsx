'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

const floatingHearts: FloatingHeart[] = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: Math.random() * 20 + 10,
  delay: Math.random() * 3,
  duration: Math.random() * 3 + 4,
}));

// Get window height safely (handles SSR)
const getWindowHeight = (): number => {
  if (typeof window !== 'undefined') {
    return window.innerHeight;
  }
  return 800; // Default SSR value
};

export default function Hero() {
  const windowHeight = getWindowHeight();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-rose-300/30"
            style={{
              left: `${heart.x}%`,
              top: '100%',
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: [0, -(windowHeight - 100)],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Heart
              size={heart.size}
              fill="currentColor"
              className="transform -rotate-45"
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Animated Heart Icon */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              <Heart
                size={80}
                fill="#f43f5e"
                className="text-rose-500 drop-shadow-lg"
              />
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart
                  size={80}
                  fill="#fda4af"
                  className="text-rose-400"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Happy Valentine's Day</span>
          </motion.h1>

          {/* Baone's Name */}
          <motion.p
            className="text-3xl md:text-5xl font-semibold text-rose-700 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            For My Baone 💕
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="flex items-center justify-center gap-4 my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
            <Heart
              size={20}
              fill="#f43f5e"
              className="text-rose-500 heartbeat"
            />
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-rose-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            My love for you grows more beautiful every day ❤️
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-rose-500"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm tracking-widest">SCROLL TO</span>
              <motion.div
                className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center pt-2"
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-rose-500 rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

