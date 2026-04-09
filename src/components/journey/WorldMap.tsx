import { motion } from 'motion/react';
import { type MapPoint } from './types';
import { useState } from 'react';

interface WorldMapProps {
  points: MapPoint[];
}

// Simplified world map as SVG paths (very simplified continents)
export default function WorldMap({ points }: WorldMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full rounded-xl overflow-hidden" style={{ background: 'rgba(26,22,16,0.6)', border: '1px solid rgba(46,36,22,0.8)' }}>
      <p className="text-xs tracking-widest uppercase px-4 pt-4 pb-2" style={{ color: 'rgba(201,147,58,0.5)', fontFamily: 'var(--font-sans)' }}>
        Global Material Origins
      </p>

      <div className="relative" style={{ paddingBottom: '50%' }}>
        <svg
          viewBox="0 0 100 50"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Very simplified world map background */}
          {/* North America */}
          <path d="M 8 10 L 22 8 L 26 14 L 24 22 L 18 26 L 12 24 L 8 18 Z" fill="rgba(201,147,58,0.06)" stroke="rgba(201,147,58,0.12)" strokeWidth="0.3" />
          {/* South America */}
          <path d="M 20 28 L 28 26 L 30 34 L 26 42 L 20 44 L 18 38 Z" fill="rgba(201,147,58,0.06)" stroke="rgba(201,147,58,0.12)" strokeWidth="0.3" />
          {/* Europe */}
          <path d="M 44 10 L 54 8 L 56 14 L 52 18 L 46 16 Z" fill="rgba(201,147,58,0.06)" stroke="rgba(201,147,58,0.12)" strokeWidth="0.3" />
          {/* Africa */}
          <path d="M 46 20 L 56 18 L 58 30 L 54 40 L 48 42 L 44 34 L 44 22 Z" fill="rgba(201,147,58,0.06)" stroke="rgba(201,147,58,0.12)" strokeWidth="0.3" />
          {/* Asia */}
          <path d="M 56 8 L 82 6 L 86 14 L 80 22 L 70 24 L 60 20 L 56 14 Z" fill="rgba(201,147,58,0.06)" stroke="rgba(201,147,58,0.12)" strokeWidth="0.3" />
          {/* Middle East */}
          <path d="M 56 18 L 64 16 L 66 24 L 60 26 L 56 22 Z" fill="rgba(201,147,58,0.06)" stroke="rgba(201,147,58,0.12)" strokeWidth="0.3" />
          {/* Australia */}
          <path d="M 76 32 L 88 30 L 90 40 L 84 44 L 76 42 Z" fill="rgba(201,147,58,0.06)" stroke="rgba(201,147,58,0.12)" strokeWidth="0.3" />

          {/* Grid lines */}
          {[25, 50, 75].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="50" stroke="rgba(201,147,58,0.04)" strokeWidth="0.2" />
          ))}
          {[25].map(y => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(201,147,58,0.04)" strokeWidth="0.2" />
          ))}

          {/* Connection lines from points to center */}
          {points.map((point, i) => (
            <motion.line
              key={`line-${i}`}
              x1={point.coords.x}
              y1={point.coords.y}
              x2="50"
              y2="25"
              stroke="rgba(201,147,58,0.15)"
              strokeWidth="0.3"
              strokeDasharray="1 1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
            />
          ))}

          {/* Map points */}
          {points.map((point, i) => (
            <g key={point.country}>
              {/* Pulse ring */}
              <motion.circle
                cx={point.coords.x}
                cy={point.coords.y}
                r="2"
                fill="none"
                stroke="rgba(201,147,58,0.3)"
                strokeWidth="0.3"
                animate={{ r: [1.5, 3, 1.5], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              {/* Dot */}
              <motion.circle
                cx={point.coords.x}
                cy={point.coords.y}
                r="1.2"
                fill={hovered === point.country ? '#c9933a' : 'rgba(201,147,58,0.7)'}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHovered(point.country)}
                onMouseLeave={() => setHovered(null)}
              />
              {/* Label */}
              <motion.text
                x={point.coords.x + 1.8}
                y={point.coords.y + 0.5}
                fontSize="2"
                fill="rgba(240,232,216,0.6)"
                style={{ fontFamily: 'var(--font-sans)', pointerEvents: 'none' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {point.material}
              </motion.text>
            </g>
          ))}

          {/* Center pen dot */}
          <circle cx="50" cy="25" r="1" fill="rgba(201,147,58,0.4)" />
        </svg>
      </div>

      {/* Tooltip */}
      {hovered && (() => {
        const point = points.find(p => p.country === hovered);
        if (!point) return null;
        return (
          <div className="px-4 pb-3">
            <p className="text-xs" style={{ color: '#c9933a', fontFamily: 'var(--font-sans)' }}>
              <span className="font-semibold">{point.country}</span>
              <span style={{ color: 'rgba(138,122,96,0.8)' }}> — {point.material} ({point.role})</span>
            </p>
          </div>
        );
      })()}

      {/* Legend */}
      <div className="flex flex-wrap gap-3 px-4 pb-4">
        {points.map((point) => (
          <div key={point.country} className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c9933a' }} />
            <span className="text-xs" style={{ color: 'rgba(138,122,96,0.7)', fontFamily: 'var(--font-sans)' }}>
              {point.country}: {point.material}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
