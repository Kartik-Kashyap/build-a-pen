import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { type Fact } from './types';

interface FactCardProps {
  fact: Fact;
  index: number;
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    // Extract numeric part
    const numMatch = value.match(/[\d,.]+/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }
    const numStr = numMatch[0].replace(/,/g, '');
    const num = parseFloat(numStr);
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }

    const prefix = value.slice(0, value.indexOf(numMatch[0]));
    const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (num - start) * eased;

      // Format with commas if original had them
      const formatted = numMatch[0].includes(',')
        ? Math.round(current).toLocaleString()
        : num % 1 !== 0
        ? current.toFixed(1)
        : Math.round(current).toString();

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function FactCard({ fact, index }: FactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' as const }}
      className="rounded-xl p-5 flex flex-col gap-2"
      style={{
        background: 'rgba(26,22,16,0.7)',
        border: '1px solid rgba(46,36,22,0.8)',
      }}
    >
      <p className="text-2xl font-bold leading-none" style={{ color: '#c9933a', fontFamily: 'var(--font-heading)' }}>
        <AnimatedNumber value={fact.value} />
      </p>
      <p className="text-sm font-medium" style={{ color: '#f0e8d8', fontFamily: 'var(--font-sans)' }}>
        {fact.label}
      </p>
      {fact.unit && (
        <p className="text-xs" style={{ color: 'rgba(138,122,96,0.7)', fontFamily: 'var(--font-sans)' }}>
          {fact.unit}
        </p>
      )}
    </motion.div>
  );
}
