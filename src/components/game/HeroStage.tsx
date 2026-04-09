import { motion } from 'motion/react';
import PenSVG from './PenSVG';

interface HeroStageProps {
  onBegin: () => void;
}

export default function HeroStage({ onBegin }: HeroStageProps) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center" style={{ zIndex: 1 }}>
      {/* Top label */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-sm tracking-[0.3em] uppercase mb-10"
        style={{ color: 'rgba(138,122,96,0.7)', fontFamily: 'var(--font-sans)' }}
      >
        You use this every day.
      </motion.p>

      {/* Pen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' as const }}
        className="relative mb-10"
      >
        {/* Glow ring behind pen */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(201,147,58,0.08) 0%, transparent 70%)',
            transform: 'scale(2.5)',
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' as const }}
        />
        <motion.div
          animate={{ rotate: [0, 1, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' as const }}
        >
          <PenSVG className="w-16 h-auto" glowing />
        </motion.div>
      </motion.div>

      {/* Main headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="text-center mb-4 px-6"
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight"
          style={{ color: '#f0e8d8', fontFamily: 'var(--font-heading)' }}
        >
          DO YOU KNOW
        </h1>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight"
          style={{ color: '#c9933a', fontFamily: 'var(--font-heading)' }}
        >
          WHAT IT TOOK?
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="text-sm md:text-base text-center max-w-md px-6 mb-12"
        style={{ color: 'rgba(138,122,96,0.7)', fontFamily: 'var(--font-sans)', lineHeight: '1.7' }}
      >
        Centuries of science. Thousands of workers. Six continents. All for something you hold without a second thought.
      </motion.p>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onBegin}
        className="group flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300"
        style={{
          background: 'rgba(201,147,58,0.1)',
          border: '1px solid rgba(201,147,58,0.4)',
          color: '#c9933a',
          fontFamily: 'var(--font-sans)',
          boxShadow: '0 0 30px rgba(201,147,58,0.08)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,147,58,0.18)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 40px rgba(201,147,58,0.2)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,147,58,0.1)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(201,147,58,0.08)';
        }}
      >
        Begin the journey
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' as const }}
        >
          →
        </motion.span>
      </motion.button>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
        style={{ color: 'rgba(138,122,96,0.3)' }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(201,147,58,0.3), transparent)' }}
        />
      </motion.div>
    </div>
  );
}
