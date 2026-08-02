import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function ReviewCollage({ images, caption }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {images.map((img, i) => (
          <motion.button
            key={img.id}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: img.rotation }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setSelected(img)}
            className={`group relative rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-bella-purple ${
              img.serious ? 'ring-2 ring-red-500/60' : 'ring-1 ring-white/10'
            }`}
            aria-label={`View review: ${img.label}`}
          >
            <div className="aspect-[3/4] relative bg-bella-black">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover object-top scale-110"
                loading="lazy"
              />
              {/* Blur overlay for reviewer name/profile area (top portion) */}
              <div className="absolute top-0 left-0 right-0 h-[18%] backdrop-blur-md bg-bella-black/40" />
              {/* Focus crop on review text - gradient to emphasize text area */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bella-black/30" />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-bella-black/90 to-transparent">
                <p className="text-[10px] md:text-xs text-white/80 line-clamp-2">{img.label}</p>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-white drop-shadow" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {caption && (
        <p className="text-center text-white/50 text-sm mt-4 italic">{caption}</p>
      )}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-hidden ring-2 ring-red-500/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors no-print"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative">
                <img
                  src={selected.src}
                  alt={selected.label}
                  className="w-full h-auto max-h-[85vh] object-contain bg-bella-black"
                />
                <div className="absolute top-0 left-0 right-0 h-[12%] backdrop-blur-lg bg-bella-black/50" />
              </div>
              <div className="p-4 bg-bella-dark">
                <p className="text-white/80 text-sm">{selected.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
