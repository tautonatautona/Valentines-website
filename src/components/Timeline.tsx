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
    date: 'March 2026',
    title: 'Growing Together',
    description: 'Every day with you feels like a gift 🎁',
    icon: '🌸',
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl" />
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
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <Heart
              size={48}
              fill="#f43f5e"
              className="text-rose-500"
            />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
            Our Love Story
          </h2>
          <p className="text-xl text-rose-600">
            Every moment with you is a beautiful memory 💗
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 timeline-line rounded-full hidden md:block" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Content Card */}
              <div className="w-full md:w-5/12">
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-hover shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Date */}
                  <div className="flex items-center gap-2 text-rose-500 mb-3">
                    <Calendar size={18} />
                    <span className="font-medium">{event.date}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-3">{event.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-rose-800 mb-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-rose-600">{event.description}</p>
                </motion.div>
              </div>

              {/* Center Heart */}
              <motion.div
                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-rose-500 text-white shadow-lg z-10"
                whileHover={{ scale: 1.2 }}
              >
                <Heart size={20} fill="currentColor" />
              </motion.div>

              {/* Spacer for opposite side */}
              <div className="w-full md:w-5/12 hidden md:block" />
            </motion.div>
          ))}

          {/* Final Heart */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Heart size={20} fill="currentColor" />
              <span className="font-semibold">Forever & Always</span>
              <Heart size={20} fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

