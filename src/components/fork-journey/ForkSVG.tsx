import { motion } from 'motion/react';

interface ForkSVGProps {
  className?: string;
  glowing?: boolean;
}

export default function ForkSVG({ className = '', glowing = false }: ForkSVGProps) {
  const strokeColor = '#c9933a';
  const glowFilter = glowing ? 'url(#forkGlow)' : 'none';

  const drawTransition = (delay: number) => ({
    pathLength: { delay, duration: 1.2, ease: "easeInOut" as const },
    opacity: { delay, duration: 0.3 }
  });

  return (
    <svg 
      viewBox="0 0 110 140" 
      fill="none" 
      className={`w-full h-full ${className}`} 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: glowing ? 'drop-shadow(0 0 12px rgba(201,147,58,0.5))' : 'none' }}
    >
      <defs>
        <filter id="forkGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Techy hatch pattern for the background or accents */}
        <pattern id="hatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="4" stroke={strokeColor} strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>

      {/* Background blueprint/mold alignment grid lines */}
      <motion.g opacity="0.15">
        <line x1="55" y1="0" x2="55" y2="140" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="0" y1="45" x2="110" y2="45" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="0" y1="80" x2="110" y2="80" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4" />
        {/* Mold registration circles */}
        <circle cx="20" cy="20" r="3" stroke={strokeColor} strokeWidth="0.5" />
        <circle cx="90" cy="20" r="3" stroke={strokeColor} strokeWidth="0.5" />
        <circle cx="20" cy="120" r="3" stroke={strokeColor} strokeWidth="0.5" />
        <circle cx="90" cy="120" r="3" stroke={strokeColor} strokeWidth="0.5" />
      </motion.g>

      {/* Main Fork Outline - Traced continuously for smooth drawing animation */}
      <motion.path 
        d="M 45 120 
           C 45 80, 33 60, 33 40 
           L 33 15 C 33 11, 39 11, 39 15 
           L 39 45 A 3 3 0 0 0 45 45 
           L 45 10 C 45 6, 51 6, 51 10 
           L 51 45 A 4 4 0 0 0 59 45 
           L 59 10 C 59 6, 65 6, 65 10 
           L 65 45 A 3 3 0 0 0 71 45 
           L 71 15 C 71 11, 77 11, 77 15 
           L 77 40 
           C 77 60, 65 80, 65 120 
           C 65 132, 60 135, 55 135 
           C 50 135, 45 132, 45 120 Z" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="1.2" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(0)}
        filter={glowFilter}
      />

      {/* Inner Structural / Flow lines (Simulating mold flow paths) */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {/* Handle center ridge */}
        <motion.line 
          x1="55" y1="65" x2="55" y2="128" 
          stroke={strokeColor} 
          strokeWidth="0.8" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={drawTransition(0.6)}
        />
        {/* Left ridge */}
        <motion.path 
          d="M 48 123 C 48 85, 38 65, 36 45" 
          stroke={strokeColor} 
          strokeWidth="0.5" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={drawTransition(0.8)}
        />
        {/* Right ridge */}
        <motion.path 
          d="M 62 123 C 62 85, 72 65, 74 45" 
          stroke={strokeColor} 
          strokeWidth="0.5" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={drawTransition(0.8)}
        />
      </motion.g>

      {/* Base "Sprue/Gate" mark (where plastic is injected) */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        style={{ transformOrigin: '55px 135px' }}
      >
        <circle cx="55" cy="135" r="2.5" fill="none" stroke={strokeColor} strokeWidth="1" filter={glowFilter} />
        <circle cx="55" cy="135" r="0.5" fill={strokeColor} />
      </motion.g>

      {/* High-tech dimension / scanning brackets (Animated) */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <path d="M 25 30 L 25 15 L 30 15" fill="none" stroke={strokeColor} strokeWidth="0.8" />
        <path d="M 85 30 L 85 15 L 80 15" fill="none" stroke={strokeColor} strokeWidth="0.8" />
        
        {/* Scanning laser line moving down the tines */}
        <motion.line 
          x1="25" x2="85" 
          stroke={strokeColor} 
          strokeWidth="0.5" 
          opacity="0.8"
          animate={{ y1: [15, 45, 15], y2: [15, 45, 15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          filter={glowFilter}
        />
      </motion.g>

      {/* Tiny tech text representing mold cavity coordinates */}
      <motion.text 
        x="60" y="138" 
        fontSize="3" 
        fill={strokeColor} 
        opacity="0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        style={{ fontFamily: 'monospace' }}
      >
        CAV-64/A
      </motion.text>
    </svg>
  );
}