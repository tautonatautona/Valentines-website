'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const reasons = [
  {
    number: 1,
    title: 'Your Beautiful Smile',
    description: 'Every time you smile, my heart skips a beat. Your smile lights up my entire world.',
  },
  {
    number: 2,
    title: 'Your Kind Heart',
    description: 'The way you care for others shows the beautiful soul you have inside.',
  },
  {
    number: 3,
    title: 'Your Sense of Humor',
    description: 'You make me laugh like no one else can. Every moment with you is full of joy.',
  },
  {
    number: 4,
    title: 'Your Strength',
    description: 'The way you handle challenges inspires me every single day.',
  },
  {
    number: 5,
    title: 'Your Love',
    description: 'Feeling loved by you is the greatest gift I could ever receive.',
  },
  {
    number: 6,
    title: 'Your Dreams',
    description: 'Your ambitions and dreams are beautiful, and I want to help you achieve them all.',
  },
  {
    number: 7,
    title: 'Your Presence',
    description: 'Simply being near you makes me feel complete and at peace.',
  },
  {
    number: 8,
    title: 'Our Conversations',
    description: 'Talking to you feels like coming home. I could listen to you forever.',
  },
  {
    number: 9,
    title: 'Your Intelligence',
    description: 'Your mind is as beautiful as your heart. I admire you so much.',
  },
  {
    number: 10,
    title: 'You Are You',
    description: 'Simply being yourself is why I fell in love with you and why I love you more each day.',
  },
];

export default function Reasons() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-rose-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl" />
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
            whileHover={{ scale: 1.1 }}
          >
            <Heart size={48} fill="#f43f5e" className="text-rose-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
            10 Reasons Why I Love You
          </h2>
          <p className="text-xl text-rose-600">
            There are countless reasons, but here are just a few... 💕
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 card-hover shadow-lg h-full"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                {/* Number Circle */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {reason.number}
                  </motion.div>
                  <Heart
                    size={20}
                    fill="#fda4af"
                    className="text-rose-400"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-rose-800 mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-rose-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative heart */}
                <motion.div
                  className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={16} fill="#f43f5e" className="text-rose-500" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-white shadow-xl">
            <motion.div
              className="flex justify-center mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={40} fill="white" className="text-white" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              But There Are So Many More Reasons...
            </h3>
            <p className="text-lg md:text-xl opacity-90">
              I could write a million reasons why I love you, and it still wouldn't be enough.
              You are my everything, Baone. ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

