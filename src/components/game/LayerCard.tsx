import { motion } from 'motion/react';
import { useState } from 'react';

export interface Layer {
  id: string;
  title: string;
  stat: string;
  icon: React.ReactNode;
  locked: boolean;
  color: string;
}

interface LayerCardProps {
  layer: Layer;
  index: number;
  onUnlock: (id: string) => void;
  onExpand: (id: string) => void;
}

export default function LayerCard({ layer, index, onUnlock, onExpand }: LayerCardProps) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (layer.locked) {
      onUnlock(layer.id);
    } else {
      onExpand(layer.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: 'easeOut' as const }}
      whileHover={!layer.locked ? { y: -4, scale: 1.02 } : { scale: 1.01 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={handleClick}
      className="relative cursor-pointer rounded-lg border p-4 flex flex-col gap-3 transition-colors"
      style={{
        background: layer.locked
          ? 'rgba(26,22,16,0.6)'
          : hovered
          ? 'rgba(201,147,58,0.08)'
          : 'rgba(26,22,16,0.9)',
        borderColor: layer.locked
          ? 'rgba(46,36,22,0.6)'
          : hovered
          ? 'rgba(201,147,58,0.6)'
          : 'rgba(46,36,22,0.9)',
        boxShadow: !layer.locked && hovered
          ? '0 0 20px rgba(201,147,58,0.15), inset 0 0 20px rgba(201,147,58,0.03)'
          : 'none',
      }}
    >
      {/* Lock overlay */}
      {layer.locked && (
        <div className="absolute inset-0 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(13,13,13,0.5)', backdropFilter: 'blur(1px)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(138,122,96,0.5)" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      )}

      {/* Icon */}
      <div
        className="w-8 h-8 flex items-center justify-center"
        style={{ color: layer.locked ? 'rgba(138,122,96,0.4)' : '#c9933a' }}
      >
        {layer.icon}
      </div>

      {/* Title */}
      <div>
        <p
          className="text-xs font-medium tracking-widest uppercase mb-1"
          style={{ color: layer.locked ? 'rgba(138,122,96,0.4)' : 'rgba(201,147,58,0.8)', fontFamily: 'var(--font-sans)' }}
        >
          Layer {index + 1}
        </p>
        <h3
          className="text-sm font-semibold leading-tight"
          style={{
            color: layer.locked ? 'rgba(240,232,216,0.3)' : '#f0e8d8',
            fontFamily: 'var(--font-heading)',
          }}
        >
          {layer.title}
        </h3>
      </div>

      {/* Stat */}
      {!layer.locked && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs leading-relaxed"
          style={{ color: 'rgba(138,122,96,0.9)', fontFamily: 'var(--font-sans)' }}
        >
          {layer.stat}
        </motion.p>
      )}

      {/* Unlock hint */}
      {layer.locked && (
        <p className="text-xs" style={{ color: 'rgba(138,122,96,0.3)', fontFamily: 'var(--font-sans)' }}>
          Click to reveal
        </p>
      )}

      {/* Bottom accent line */}
      {!layer.locked && (
        <motion.div
          className="absolute bottom-0 left-0 h-px rounded-b-lg"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,147,58,0.5), transparent)' }}
          initial={{ width: 0, left: '50%' }}
          animate={{ width: '100%', left: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
        />
      )}
    </motion.div>
  );
}
