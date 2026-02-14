'use client';

import { motion } from 'framer-motion';
import { Heart, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop',
    alt: 'Romantic couple',
    caption: 'Our first date 💕',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522673607200-1645062cd958?w=800&h=600&fit=crop',
    alt: 'Beautiful sunset',
    caption: 'Sunset together 🌅',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=800&h=600&fit=crop',
    alt: 'Couple holding hands',
    caption: 'Holding hands ❤️',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop',
    alt: 'Love note',
    caption: 'Love notes for you 💌',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=600&fit=crop',
    alt: 'Sushi date',
    caption: 'Sushi date! 🍣',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&h=600&fit=crop',
    alt: 'Wedding rings',
    caption: 'Forever together 💍',
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-rose-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl" />
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
            Our Memories
          </h2>
          <p className="text-xl text-rose-600">
            Capturing moments of our love 📸
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Photo Frame */}
              <div className="photo-frame rounded-xl overflow-hidden bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-center font-medium text-lg">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 rounded-full p-3 shadow-lg">
                      <ZoomIn size={24} className="text-rose-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
              onClick={() => setSelectedPhoto(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={32} className="text-white" />
            </motion.button>

            {/* Photo Container */}
            <motion.div
              className="max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-white text-center text-xl mt-4 font-medium">
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Decorative Hearts */}
        <motion.div
          className="flex justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="text-rose-400"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            >
              <Heart size={24} fill="#f43f5e" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

