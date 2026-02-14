'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isValentinesDay, setIsValentinesDay] = useState(false);

  useEffect(() => {
    // Today is Valentine's Day 2026! Show celebration mode
    setIsValentinesDay(true);
    setTimeLeft({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section className="min-h-screen py-24 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Valentine's Day Celebration Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Sparkling Hearts */}
          <div className="flex justify-center gap-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                <Heart 
                  size={40 + i * 5} 
                  fill="#f43f5e" 
                  className="text-rose-500 drop-shadow-lg" 
                />
              </motion.div>
            ))}
          </div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <span className="gradient-text">It's Valentine's Day!</span>
          </motion.h2>

          <motion.p 
            className="text-2xl md:text-4xl text-rose-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Celebrating our love today and always 💕
          </motion.p>
        </motion.div>

        {/* Countdown at 00:00:00:00 */}
        <>
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart size={56} fill="#f43f5e" className="text-rose-500 drop-shadow-xl" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-rose-800 mb-6">
              The Wait is Over!
            </h2>
            <p className="text-xl md:text-2xl text-rose-600">
              Our special day has arrived 💕
            </p>
          </motion.div>

          {/* Countdown Timer at 00:00:00:00 */}
          <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10 mb-16">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                className="relative"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.5 + index * 0.15, 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                {/* Enhanced Time Box */}
                <motion.div
                  className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-white via-rose-50 to-pink-50 backdrop-blur-sm rounded-3xl shadow-2xl flex flex-col items-center justify-center border-2 border-rose-200 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    boxShadow: '0 20px 50px rgba(244, 63, 94, 0.3)',
                    transition: { duration: 0.3 },
                  }}
                  animate={{
                    boxShadow: [
                      '0 10px 30px rgba(244, 63, 94, 0.15)',
                      '0 15px 40px rgba(244, 63, 94, 0.25)',
                      '0 10px 30px rgba(244, 63, 94, 0.15)',
                    ],
                  }}
                  transition={{ 
                    boxShadow: { duration: 2.5, repeat: Infinity },
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />

                  {/* Number with enhanced animation */}
                  <motion.span
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-rose-600 to-pink-600 bg-clip-text text-transparent relative z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    00
                  </motion.span>

                  {/* Label */}
                  <span className="text-sm md:text-base text-rose-500 font-semibold uppercase tracking-widest mt-2 relative z-10">
                    {unit.label}
                  </span>
                </motion.div>

                {/* Enhanced decorative hearts between boxes */}
                {index < timeUnits.length - 1 && (
                  <motion.div
                    className="hidden md:flex absolute top-1/2 -right-7 transform -translate-y-1/2 text-rose-400"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Heart size={20} fill="#fda4af" className="drop-shadow-md" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Special Message - Enhanced */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              className="bg-gradient-to-br from-rose-100 via-pink-100 to-rose-100 rounded-3xl p-10 max-w-3xl mx-auto shadow-xl border border-rose-200/50 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative corner hearts */}
              <div className="absolute top-4 right-4 text-rose-300 opacity-30">
                <Heart size={40} fill="currentColor" />
              </div>
              <div className="absolute bottom-4 left-4 text-pink-300 opacity-30">
                <Heart size={40} fill="currentColor" />
              </div>

              <motion.div
                className="flex justify-center mb-6"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart size={40} fill="#f43f5e" className="text-rose-500 drop-shadow-lg" />
              </motion.div>
              <p className="text-xl md:text-2xl text-rose-700 italic font-medium leading-relaxed relative z-10">
                "Love is not about how many days, months, or years you have been together.
                It's about how much you love each other every single day."
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Floating Hearts Decoration */}
          <div className="flex justify-center gap-6 mt-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="text-rose-300"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart size={i * 5 + 12} fill="#fda4af" className="drop-shadow-md" />
              </motion.div>
            ))}
          </div>

          {/* Sparkles at bottom */}
          <motion.div
            className="flex justify-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={24} className="text-rose-400" />
              </motion.div>
            ))}
          </motion.div>
        </>
      </div>
    </section>
  );
}