import { motion } from 'motion/react';

interface PenSVGProps {
  className?: string;
  glowing?: boolean;
}

export default function PenSVG({ className = '', glowing = false }: PenSVGProps) {
  const strokeColor = '#c9933a';
  const glowFilter = glowing ? 'url(#penGlow)' : 'none';

  return (
    <svg
      viewBox="0 0 80 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glowing ? 'drop-shadow(0 0 12px rgba(201,147,58,0.5))' : 'none' }}
    >
      <defs>
        <filter id="penGlow" x="-50%" y="-10%" width="200%" height="120%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Clip / top cap */}
      <motion.path
        d="M 48 8 L 60 8 L 60 60 L 48 60"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={glowFilter}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      />

      {/* Cap body */}
      <motion.rect
        x="20"
        y="4"
        width="28"
        height="72"
        rx="4"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
        filter={glowFilter}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      />

      {/* Cap top ring detail */}
      <motion.line
        x1="20"
        y1="18"
        x2="48"
        y2="18"
        stroke={strokeColor}
        strokeWidth="0.8"
        opacity="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />

      {/* Barrel body */}
      <motion.rect
        x="20"
        y="80"
        width="28"
        height="160"
        rx="3"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
        filter={glowFilter}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.4, ease: 'easeOut' }}
      />

      {/* Grip section */}
      <motion.rect
        x="22"
        y="220"
        width="24"
        height="30"
        rx="2"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeDasharray="2 3"
        fill="none"
        opacity="0.6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      />

      {/* Grip texture lines */}
      {[225, 230, 235, 240, 245].map((y, i) => (
        <motion.line
          key={y}
          x1="22"
          y1={y}
          x2="46"
          y2={y}
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 0.3, delay: 1.0 + i * 0.05 }}
        />
      ))}

      {/* Taper to nib */}
      <motion.path
        d="M 20 252 L 34 300 L 48 252"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={glowFilter}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
      />

      {/* Tip point */}
      <motion.path
        d="M 32 300 L 34 316 L 36 300"
        stroke={strokeColor}
        strokeWidth="1.0"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={glowFilter}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.5, ease: 'easeOut' }}
      />

      {/* Ink window on barrel */}
      <motion.rect
        x="30"
        y="110"
        width="8"
        height="60"
        rx="4"
        stroke={strokeColor}
        strokeWidth="0.7"
        fill="rgba(201,147,58,0.08)"
        opacity="0.7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />

      {/* Brand line on barrel */}
      <motion.line
        x1="24"
        y1="145"
        x2="44"
        y2="145"
        stroke={strokeColor}
        strokeWidth="0.5"
        opacity="0.25"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.25 }}
        transition={{ duration: 0.4, delay: 1.3 }}
      />
    </svg>
  );
}
