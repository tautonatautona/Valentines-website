'use client';

import { motion } from 'framer-motion';
import { Heart, Quote } from 'lucide-react';

const poems = [
  {
    title: 'Your Love',
    verses: [
      'In your eyes, I see the stars,',
      'In your smile, I see the sun,',
      'In your heart, I find my home,',
      'In your love, I am won.',
    ],
  },
  {
    title: 'Valentine\'s Promise',
    verses: [
      'This Valentine\'s Day I promise you,',
      'My love will never fade,',
      'Through every joy and every tear,',
      'My heart with yours is made.',
    ],
  },
  {
    title: 'Our Song',
    verses: [
      'Every heartbeat sings your name,',
      'Every breath I take is yours,',
      'You are the rhythm of my life,',
      'The love my heart adores.',
    ],
  },
];

export default function Poetry() {
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
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Quote size={48} className="text-rose-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
            Poetry of Love
          </h2>
          <p className="text-xl text-rose-600">
            Words from my heart to yours 💕
          </p>
        </motion.div>

        {/* Poems Container */}
        <div className="space-y-8">
          {poems.map((poem, index) => (
            <motion.div
              key={poem.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Poem Card */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg card-hover"
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative Quote Icon */}
                <motion.div
                  className="absolute -top-4 left-8"
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-full p-3 shadow-lg">
                    <Heart size={20} fill="white" className="text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-rose-800 mb-6 text-center italic">
                  {poem.title}
                </h3>

                {/* Verses */}
                <div className="space-y-3">
                  {poem.verses.map((verse, verseIndex) => (
                    <motion.p
                      key={verseIndex}
                      className="text-lg text-rose-700 text-center font-serif leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + verseIndex * 0.1 }}
                    >
                      {verse}
                    </motion.p>
                  ))}
                </div>

                {/* Decorative Hearts */}
                <div className="flex justify-center gap-2 mt-6">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="text-rose-300"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    >
                      <Heart size={i * 4 + 8} fill="#fda4af" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Special Message */}
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
            <p className="text-lg md:text-xl italic opacity-90">
              "My love for you is a journey, starting at forever and ending at never."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

