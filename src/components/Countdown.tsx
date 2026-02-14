'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2026-02-14T00:00:00').getTime();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ scale: 1.1 }}
          >
            <Heart size={48} fill="#f43f5e" className="text-rose-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
            Counting Down to Valentine's Day
          </h2>
          <p className="text-xl text-rose-600">
            Every second brings me closer to you 💕
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <div className="flex justify-center flex-wrap gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Time Box */}
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col items-center justify-center border-2 border-rose-200"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(244, 63, 94, 0.1)',
                    '0 15px 40px rgba(244, 63, 94, 0.2)',
                    '0 10px 30px rgba(244, 63, 94, 0.1)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Number */}
                <motion.span
                  className="text-4xl md:text-5xl font-bold text-rose-600"
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.span>

                {/* Label */}
                <span className="text-xs md:text-sm text-rose-400 uppercase tracking-wider mt-1">
                  {unit.label}
                </span>
              </motion.div>

              {/* Decorative hearts between boxes */}
              {index < timeUnits.length - 1 && (
                <motion.div
                  className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 text-rose-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={16} fill="#fda4af" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Special Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <motion.div
              className="flex justify-center mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={32} fill="#f43f5e" className="text-rose-500" />
            </motion.div>
            <p className="text-xl md:text-2xl text-rose-700 italic">
              "Love is not about how many days, months, or years you have been together.
              It's about how much you love each other every single day."
            </p>
          </div>
        </motion.div>

        {/* Floating Hearts Decoration */}
        <div className="flex justify-center gap-4 mt-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="text-rose-300"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              <Heart size={i * 4 + 8} fill="#fda4af" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

