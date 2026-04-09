import { motion } from 'motion/react';
import { type TimelineEvent } from './types';

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <p className="text-xs tracking-widest uppercase mb-6" style={{ color: 'rgba(201,147,58,0.5)', fontFamily: 'var(--font-sans)' }}>
        Historical Timeline
      </p>

      {/* Vertical line */}
      <div className="absolute left-[72px] top-10 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, rgba(201,147,58,0.3), transparent)' }} />

      <div className="flex flex-col gap-6">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const }}
            className="flex gap-6 items-start"
          >
            {/* Year */}
            <div className="flex-shrink-0 w-16 text-right">
              <span className="text-sm font-bold" style={{ color: '#c9933a', fontFamily: 'var(--font-heading)' }}>
                {event.year}
              </span>
            </div>

            {/* Dot */}
            <div className="flex-shrink-0 relative flex items-center justify-center mt-1">
              <div className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor: '#c9933a', background: '#0d0d0d' }} />
            </div>

            {/* Event */}
            <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(240,232,216,0.75)', fontFamily: 'var(--font-sans)' }}>
              {event.event}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
