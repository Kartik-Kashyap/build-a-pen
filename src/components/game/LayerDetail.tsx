import { motion, AnimatePresence } from 'motion/react';
import { type Layer } from './LayerCard';

interface LayerDetailProps {
  layer: Layer | null;
  onClose: () => void;
}

export default function LayerDetail({ layer, onClose }: LayerDetailProps) {
  return (
    <AnimatePresence>
      {layer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(13,13,13,0.92)', backdropFilter: 'blur(16px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: 'easeOut' as const }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full rounded-2xl p-8"
            style={{
              background: 'rgba(26,22,16,0.98)',
              border: '1px solid rgba(201,147,58,0.3)',
              boxShadow: '0 0 60px rgba(201,147,58,0.1)',
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
              style={{ color: 'rgba(138,122,96,0.6)', background: 'rgba(46,36,22,0.5)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-6"
              style={{ background: 'rgba(201,147,58,0.1)', border: '1px solid rgba(201,147,58,0.2)', color: '#c9933a' }}>
              {layer.icon}
            </div>

            {/* Title */}
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,147,58,0.6)', fontFamily: 'var(--font-sans)' }}>
              Complexity Layer
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#f0e8d8', fontFamily: 'var(--font-heading)' }}>
              {layer.title}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(138,122,96,0.9)', fontFamily: 'var(--font-sans)' }}>
              {layer.stat}
            </p>

            {/* Coming soon notice */}
            <div className="rounded-lg p-4" style={{ background: 'rgba(201,147,58,0.06)', border: '1px solid rgba(201,147,58,0.15)' }}>
              <p className="text-xs" style={{ color: 'rgba(201,147,58,0.7)', fontFamily: 'var(--font-sans)' }}>
                <span className="font-semibold">Full module coming soon.</span> This layer will contain an interactive deep-dive with timelines, maps, cost breakdowns, and the hidden stories behind this dimension of complexity.
              </p>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-8 right-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,147,58,0.3), transparent)' }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
