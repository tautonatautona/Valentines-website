'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';
import { useMemo } from 'react';

interface StarData {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
}

interface HeartData {
  id: number;
  left: string;
  top: string;
}

const dreams = [
  {
    icon: '🌍',
    title: 'Travel the World Together',
    description: 'Explore new countries, cultures, and create memories in every corner of the world.',
  },
  {
    icon: '🏠',
    title: 'Build Our Dream Home',
    description: 'Create a warm, loving home filled with happiness, laughter, and beautiful moments.',
  },
  {
    icon: '🍳',
    title: 'Cook Meals Together',
    description: 'Dance in the kitchen while preparing delicious meals and trying new recipes.',
  },
  {
    icon: '🌅',
    title: 'Watch Every Sunset',
    description: 'Find the perfect spot to watch the sunset together, hand in hand.',
  },
  {
    icon: '🎉',
    title: 'Celebrate Every Moment',
    description: 'Cherish birthdays, anniversaries, and all the little victories together.',
  },
  {
    icon: '👶',
    title: 'Grow Our Family',
    description: 'Build a loving family filled with joy, warmth, and endless love.',
  },
  {
    icon: '💼',
    title: 'Support Each Other\'s Dreams',
    description: 'Be each other\'s biggest cheerleaders in every endeavor and ambition.',
  },
  {
    icon: '🛋️',
    title: 'Grow Old Together',
    description: 'Spend our golden years reminiscing about our beautiful journey together.',
  },
];

function generateStars(): StarData[] {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 8 + 4,
    duration: 2 + Math.random() * 2,
    delay: Math.random() * 2,
  }));
}

function generateHearts(): HeartData[] {
  return Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: `${20 + i * 15}%`,
    top: `${30 + Math.random() * 40}%`,
  }));
}

export default function Dreams() {
  const stars = useMemo(() => generateStars(), []);
  const bgHearts = useMemo(() => generateHearts(), []);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-rose-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl" />
        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute text-rose-300"
            style={{
              left: star.left,
              top: star.top,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
            }}
          >
            <Star size={star.size} fill="#fda4af" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={48} className="text-rose-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
            Our Dreams Together
          </h2>
          <p className="text-xl text-rose-600">
            Building a future filled with love and adventures 💕
          </p>
        </motion.div>

        {/* Dreams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dreams.map((dream, index) => (
            <motion.div
              key={dream.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 card-hover shadow-lg h-full relative overflow-hidden"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-rose-100/50 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />

                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {dream.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-rose-800 mb-3 relative z-10">
                  {dream.title}
                </h3>

                {/* Description */}
                <p className="text-rose-600 text-sm leading-relaxed relative z-10">
                  {dream.description}
                </p>

                {/* Heart decoration */}
                <motion.div
                  className="absolute bottom-2 right-2 text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={16} fill="#fda4af" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Promise Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            {/* Animated background hearts */}
            {bgHearts.map((heart, i) => (
              <motion.div
                key={i}
                className="absolute text-white/20"
                style={{
                  left: heart.left,
                  top: heart.top,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3 + i,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              >
                <Heart size={20 + i * 5} fill="currentColor" />
              </motion.div>
            ))}

            <div className="relative z-10">
              <motion.div
                className="flex justify-center mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={48} fill="white" className="text-white" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                My Promise to You
              </h3>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Baone, I promise to love you, support you, and chase all our dreams together.
                Every day with you is a gift, and I cannot wait for our forever. ❤️
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative stars */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="text-rose-400"
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            >
              <Star size={i * 8 + 8} fill="#fda4af" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

