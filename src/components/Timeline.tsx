'use client';

import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: 'February 1, 2026',
    title: 'First Sushi Date',
    description: 'The beginning of something beautiful over delicious sushi 🍣',
    icon: '🍣',
  },
  {
    date: 'February 14, 2026',
    title: 'First Valentine\'s Day',
    description: 'Our first Valentine\'s Day together, celebrate our love! 💕',
    icon: '💕',
  },
  {
    date: 'March and Forever',
    title: 'Growing Together',
    description: 'Every day with you feels like a gift 🎁',
    icon: '🌸',
  },
];

export default function Timeline() {
  return (
    <section className="min-h-screen py-24 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
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
            whileHover={{ scale: 1.2, rotate: 15 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          >
            <Heart
              size={48}
              fill="#f43f5e"
              className="text-rose-500 drop-shadow-lg"
            />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-rose-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Love Story
          </motion.h2>
          <motion.p 
            className="text-xl text-rose-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Every moment with you is a beautiful memory 💗
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line with gradient animation */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-300 via-pink-400 to-rose-300 rounded-full hidden md:block overflow-hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          >
            {/* Animated shimmer on timeline */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.3, 
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
              }}
            >
              {/* Content Card */}
              <div className="w-full md:w-5/12">
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-100 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    boxShadow: '0 20px 40px rgba(244, 63, 94, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer effect on card */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-100/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Date */}
                  <motion.div 
                    className="flex items-center gap-2 text-rose-500 mb-3 relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Calendar size={18} />
                    </motion.div>
                    <span className="font-medium">{event.date}</span>
                  </motion.div>

                  {/* Icon with bounce animation */}
                  <motion.div 
                    className="text-4xl mb-3 relative z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {event.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-rose-800 mb-2 relative z-10">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-rose-600 relative z-10">{event.description}</p>
                </motion.div>
              </div>

              {/* Center Heart with pulse */}
              <motion.div
                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-rose-500 text-white shadow-lg z-10 my-4 md:my-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.3 + 0.3,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.3, rotate: 180, transition: { duration: 0.4 } }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={20} fill="currentColor" />
                </motion.div>
              </motion.div>

              {/* Spacer for opposite side */}
              <div className="w-full md:w-5/12 hidden md:block" />
            </motion.div>
          ))}

          {/* Final Heart with enhanced animations */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 1,
              type: 'spring',
              stiffness: 150,
            }}
          >
            <motion.div
              className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 10px 30px rgba(244, 63, 94, 0.4)',
              }}
              animate={{
                boxShadow: [
                  '0 5px 15px rgba(244, 63, 94, 0.2)',
                  '0 8px 25px rgba(244, 63, 94, 0.3)',
                  '0 5px 15px rgba(244, 63, 94, 0.2)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                }}
              >
                <Heart size={20} fill="currentColor" />
              </motion.div>
              <span className="font-semibold">Forever & Always</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: 0.75,
                }}
              >
                <Heart size={20} fill="currentColor" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}