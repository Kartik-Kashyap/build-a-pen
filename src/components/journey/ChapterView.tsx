import { motion } from 'motion/react';
import { type Chapter } from './types';
import FactCard from './FactCard';
import Timeline from './Timeline';
import WorldMap from './WorldMap';

interface ChapterViewProps {
  chapter: Chapter;
  chapterIndex: number;
  totalChapters: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}

export default function ChapterView({ chapter, chapterIndex, totalChapters, onNext, onPrev, onClose }: ChapterViewProps) {
  return (
    <motion.div
      key={chapter.id}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: 'easeOut' as const }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Chapter header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: 'rgba(201,147,58,0.1)', border: '1px solid rgba(201,147,58,0.2)', color: 'rgba(201,147,58,0.8)', fontFamily: 'var(--font-sans)' }}
          >
            Chapter {chapter.number} of {totalChapters}
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{ color: '#f0e8d8', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}
        >
          {chapter.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base"
          style={{ color: 'rgba(138,122,96,0.8)', fontFamily: 'var(--font-sans)' }}
        >
          {chapter.subtitle}
        </motion.p>
      </div>

      {/* Hook */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl p-6 mb-8"
        style={{ background: 'rgba(201,147,58,0.06)', border: '1px solid rgba(201,147,58,0.2)' }}
      >
        <p className="text-xl md:text-2xl font-bold italic" style={{ color: '#c9933a', fontFamily: 'var(--font-heading)', lineHeight: 1.4 }}>
          "{chapter.hook}"
        </p>
      </motion.div>

      {/* Facts grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {chapter.facts.map((fact, i) => (
          <FactCard key={i} fact={fact} index={i} />
        ))}
      </div>

      {/* World map (if applicable) */}
      {chapter.mapPoints && chapter.mapPoints.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <WorldMap points={chapter.mapPoints} />
        </motion.div>
      )}

      {/* Body text */}
      <div className="flex flex-col gap-5 mb-10">
        {chapter.body.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="text-base leading-relaxed"
            style={{ color: 'rgba(240,232,216,0.8)', fontFamily: 'var(--font-sans)' }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Pull quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative my-10 pl-6"
        style={{ borderLeft: '3px solid rgba(201,147,58,0.4)' }}
      >
        <p className="text-xl md:text-2xl italic leading-relaxed" style={{ color: 'rgba(201,147,58,0.9)', fontFamily: 'var(--font-heading)' }}>
          "{chapter.pullQuote}"
        </p>
      </motion.blockquote>

      {/* Timeline */}
      {chapter.timeline && chapter.timeline.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 rounded-xl p-6"
          style={{ background: 'rgba(26,22,16,0.6)', border: '1px solid rgba(46,36,22,0.8)' }}
        >
          <Timeline events={chapter.timeline} />
        </motion.div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid rgba(46,36,22,0.6)' }}>
        <button
          onClick={onPrev}
          disabled={chapterIndex === 0}
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-all"
          style={{
            color: chapterIndex === 0 ? 'rgba(138,122,96,0.3)' : 'rgba(201,147,58,0.8)',
            background: chapterIndex === 0 ? 'transparent' : 'rgba(201,147,58,0.06)',
            border: `1px solid ${chapterIndex === 0 ? 'transparent' : 'rgba(201,147,58,0.2)'}`,
            fontFamily: 'var(--font-sans)',
            cursor: chapterIndex === 0 ? 'default' : 'pointer',
          }}
        >
          ← Previous
        </button>

        <div className="flex gap-1.5">
          {Array.from({ length: totalChapters }).map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === chapterIndex ? '20px' : '6px',
                height: '6px',
                background: i === chapterIndex ? '#c9933a' : 'rgba(46,36,22,0.9)',
              }}
            />
          ))}
        </div>

        {chapterIndex < totalChapters - 1 ? (
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-all"
            style={{
              color: 'rgba(201,147,58,0.8)',
              background: 'rgba(201,147,58,0.06)',
              border: '1px solid rgba(201,147,58,0.2)',
              fontFamily: 'var(--font-sans)',
              cursor: 'pointer',
            }}
          >
            Next Chapter →
          </button>
        ) : (
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-all"
            style={{
              color: '#c9933a',
              background: 'rgba(201,147,58,0.1)',
              border: '1px solid rgba(201,147,58,0.3)',
              fontFamily: 'var(--font-sans)',
              cursor: 'pointer',
            }}
          >
            Complete ✓
          </button>
        )}
      </div>
    </motion.div>
  );
}
