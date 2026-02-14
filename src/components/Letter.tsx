'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Pen } from 'lucide-react';
import { useState } from 'react';

export default function Letter() {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => setShowContent(true), 500);
  };

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
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <Mail size={48} className="text-rose-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
            A Letter for You
          </h2>
          <p className="text-xl text-rose-600">
            My heartfelt words for you 💕
          </p>
        </motion.div>

        {/* Letter Container */}
        <div className="flex justify-center">
          <motion.div
            className="relative w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Envelope */}
            {!isOpened ? (
              <motion.div
                className="relative cursor-pointer"
                onClick={handleOpen}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Envelope Back */}
                <div className="bg-gradient-to-br from-rose-200 to-pink-200 rounded-lg shadow-xl p-8">
                  <div className="bg-white rounded-lg p-8 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 right-4 h-px bg-rose-100" />
                    <div className="absolute bottom-4 left-4 right-4 h-px bg-rose-100" />

                    {/* Letter content preview */}
                    <div className="text-center space-y-4">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Heart size={32} fill="#fda4af" className="mx-auto text-rose-400" />
                      </motion.div>
                      <p className="text-rose-600 italic">
                        Click to open your Valentine's letter 💌
                      </p>
                      <motion.div
                        className="text-rose-400"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Pen size={20} className="mx-auto" />
                      </motion.div>
                    </div>

                    {/* Wax Seal */}
                    <motion.div
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 wax-seal rounded-full flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      onClick={handleOpen}
                    >
                      <Heart size={24} fill="white" className="text-rose-600" />
                    </motion.div>
                  </div>
                </div>

                {/* Envelope Flap */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-b from-rose-300 to-rose-200 rounded-t-lg" />
              </motion.div>
            ) : (
              /* Opened Letter */
              <motion.div
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg shadow-xl p-8 min-h-[500px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Letter Paper */}
                <div className="bg-white rounded-lg p-8 relative shadow-inner">
                  {/* Decorative border */}
                  <div className="absolute inset-4 border-2 border-rose-100 rounded-lg pointer-events-none" />
                  <div className="absolute inset-8 border border-rose-50 rounded-lg pointer-events-none" />

                  {/* Letter Content */}
                  {showContent && (
                    <motion.div
                      className="relative z-10 space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Header */}
                      <div className="text-center space-y-2">
                        <p className="text-rose-400 italic">February 14, 2026</p>
                        <motion.div
                          className="flex justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Heart size={40} fill="#f43f5e" className="text-rose-500" />
                        </motion.div>
                      </div>

                      {/* Greeting */}
                      <div className="text-center">
                        <p className="text-2xl font-serif text-rose-800 italic">
                          My Dearest Baone,
                        </p>
                      </div>

                      {/* Body */}
                      <div className="space-y-4 text-rose-700 leading-relaxed font-serif">
                        <p>
                          On this special Valentine's Day, I want to take a moment to tell you
                          just how much you mean to me. Every day with you feels like a beautiful
                          adventure, and I am so grateful to have you in my life.
                        </p>
                        <p>
                          From our first sushi date to all the moments we've shared, you have
                          brought so much joy, laughter, and love into my world. Your smile
                          brightens my day, your kindness touches my heart, and your love
                          makes me a better person.
                        </p>
                        <p>
                          I promise to love you, support you, and be there for you through
                          all of life's adventures. You are my best friend, my soulmate,
                          and my greatest love.
                        </p>
                        <p>
                          Thank you for being you - the most amazing, beautiful, and caring
                          person I know. I love you more than words can express!
                        </p>
                      </div>

                      {/* Closing */}
                      <div className="text-center space-y-4 pt-4">
                        <motion.div
                          className="text-rose-400"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Heart size={24} fill="#fda4af" className="mx-auto" />
                        </motion.div>
                        <p className="text-xl font-serif text-rose-800 italic">
                          Forever yours,
                        </p>
                        <p className="text-lg font-bold text-rose-600">
                          With all my love ❤️
                        </p>
                      </div>

                      {/* Wax Seal at bottom */}
                      <motion.div
                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-20 wax-seal rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                      >
                        <Heart size={32} fill="white" className="text-rose-600" />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Decorative message */}
        <motion.p
          className="text-center text-rose-500 mt-8 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Every word I write is filled with love for you 💕
        </motion.p>
      </div>
    </section>
  );
}

