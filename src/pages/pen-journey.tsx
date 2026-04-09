import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundGrid from '@/components/game/BackgroundGrid';
import PenSVG from '@/components/game/PenSVG';
import ChapterView from '@/components/journey/ChapterView';
import { PEN_CHAPTERS } from '@/components/pen-journey/chapterData';

type View = 'overview' | 'chapter';

export default function PenJourneyPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<View>('overview');
  const [activeChapter, setActiveChapter] = useState(0);
  const [completedChapters, setCompletedChapters] = useState<Set<number>>(new Set());

  const openChapter = (index: number) => {
    setActiveChapter(index);
    setView('chapter');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextChapter = () => {
    const next = activeChapter + 1;
    setCompletedChapters((prev) => new Set([...prev, activeChapter]));
    if (next < PEN_CHAPTERS.length) {
      setActiveChapter(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevChapter = () => {
    if (activeChapter > 0) {
      setActiveChapter(activeChapter - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const closeChapter = () => {
    setCompletedChapters((prev) => new Set([...prev, activeChapter]));
    setView('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = Math.round((completedChapters.size / PEN_CHAPTERS.length) * 100);

  return (
    <>
      <title>The Pen — Build A Pen</title>
      <meta name="description" content="Discover the hidden world behind the ballpoint pen — raw materials, manufacturing, supply chains, science, economics, and law." />

      <div className="relative w-full min-h-screen" style={{ background: '#0d0d0d' }}>
        <BackgroundGrid />

        {/* Ambient glow */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(201,147,58,0.04) 0%, transparent 70%)',
            zIndex: 0,
          }}
        />

        {/* Top nav */}
        <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-5 py-4"
          style={{ background: 'rgba(13,13,13,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(46,36,22,0.4)' }}>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs tracking-widest uppercase transition-colors"
            style={{ color: 'rgba(138,122,96,0.6)', fontFamily: 'var(--font-sans)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#c9933a')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(138,122,96,0.6)')}
          >
            ← Build A Pen
          </button>

          <div className="flex items-center gap-4">
            {/* Progress */}
            <div className="flex items-center gap-2">
              <div className="w-24 h-1 rounded-full" style={{ background: 'rgba(46,36,22,0.9)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #c9933a, #a0522d)' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-xs" style={{ color: 'rgba(138,122,96,0.6)', fontFamily: 'var(--font-sans)' }}>
                {completedChapters.size}/{PEN_CHAPTERS.length}
              </span>
            </div>

            {view === 'chapter' && (
              <button
                onClick={() => setView('overview')}
                className="text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{
                  color: 'rgba(138,122,96,0.6)',
                  border: '1px solid rgba(46,36,22,0.6)',
                  fontFamily: 'var(--font-sans)',
                  background: 'rgba(13,13,13,0.6)',
                }}
              >
                Overview
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative pt-20 pb-16 px-4 md:px-8" style={{ zIndex: 1 }}>
          <AnimatePresence mode="wait">
            {view === 'overview' ? (
              <motion.div
                key="overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl mx-auto"
              >
                {/* Hero */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16 pt-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex-shrink-0"
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const }}
                    >
                      <PenSVG className="w-20 h-auto" glowing />
                    </motion.div>
                  </motion.div>

                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs tracking-widest uppercase mb-3"
                      style={{ color: 'rgba(201,147,58,0.6)', fontFamily: 'var(--font-sans)' }}
                    >
                      Object Study No. 1
                    </motion.p>
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-5xl md:text-6xl font-bold mb-4"
                      style={{ color: '#f0e8d8', fontFamily: 'var(--font-heading)', lineHeight: 1.05 }}
                    >
                      The Ballpoint Pen
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-base leading-relaxed max-w-lg"
                      style={{ color: 'rgba(138,122,96,0.8)', fontFamily: 'var(--font-sans)' }}
                    >
                      It costs $0.10. It took centuries of science, thousands of workers, and a global supply chain spanning six continents to make. Explore the six dimensions of complexity hidden inside the object you hold without a second thought.
                    </motion.p>

                    {/* Stats strip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-6 mt-6"
                    >
                      {[
                        { value: '6', label: 'Complexity layers' },
                        { value: '$0.10', label: 'Retail price' },
                        { value: '100B+', label: 'BIC Cristals sold' },
                        { value: '6+', label: 'Continents involved' },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <p className="text-xl font-bold" style={{ color: '#c9933a', fontFamily: 'var(--font-heading)' }}>{stat.value}</p>
                          <p className="text-xs" style={{ color: 'rgba(138,122,96,0.6)', fontFamily: 'var(--font-sans)' }}>{stat.label}</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Chapter grid */}
                <div>
                  <p className="text-xs tracking-widest uppercase mb-6" style={{ color: 'rgba(201,147,58,0.5)', fontFamily: 'var(--font-sans)' }}>
                    Six Layers of Complexity
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PEN_CHAPTERS.map((chapter, i) => {
                      const isCompleted = completedChapters.has(i);
                      return (
                        <motion.button
                          key={chapter.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                          whileHover={{ y: -3, scale: 1.01 }}
                          onClick={() => openChapter(i)}
                          className="text-left rounded-xl p-6 transition-all duration-200 group"
                          style={{
                            background: isCompleted ? 'rgba(201,147,58,0.06)' : 'rgba(26,22,16,0.8)',
                            border: `1px solid ${isCompleted ? 'rgba(201,147,58,0.25)' : 'rgba(46,36,22,0.8)'}`,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,147,58,0.4)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(201,147,58,0.08)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = isCompleted ? 'rgba(201,147,58,0.25)' : 'rgba(46,36,22,0.8)';
                            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                          }}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <span
                              className="text-xs tracking-widest uppercase px-2 py-0.5 rounded"
                              style={{ background: 'rgba(201,147,58,0.1)', color: 'rgba(201,147,58,0.7)', fontFamily: 'var(--font-sans)' }}
                            >
                              Ch. {chapter.number}
                            </span>
                            {isCompleted && (
                              <span className="text-xs" style={{ color: 'rgba(201,147,58,0.6)', fontFamily: 'var(--font-sans)' }}>✓ Read</span>
                            )}
                          </div>

                          <h3 className="text-xl font-bold mb-1" style={{ color: '#f0e8d8', fontFamily: 'var(--font-heading)' }}>
                            {chapter.title}
                          </h3>
                          <p className="text-xs mb-3" style={{ color: 'rgba(138,122,96,0.6)', fontFamily: 'var(--font-sans)' }}>
                            {chapter.subtitle}
                          </p>
                          <p className="text-sm italic" style={{ color: 'rgba(201,147,58,0.7)', fontFamily: 'var(--font-heading)' }}>
                            "{chapter.hook}"
                          </p>

                          <div className="flex items-center gap-1.5 mt-4">
                            <span className="text-xs" style={{ color: 'rgba(201,147,58,0.5)', fontFamily: 'var(--font-sans)' }}>
                              {chapter.facts.length} key facts
                            </span>
                            {chapter.timeline && (
                              <>
                                <span style={{ color: 'rgba(46,36,22,0.9)' }}>·</span>
                                <span className="text-xs" style={{ color: 'rgba(201,147,58,0.5)', fontFamily: 'var(--font-sans)' }}>
                                  {chapter.timeline.length} timeline events
                                </span>
                              </>
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Completion banner */}
                {completedChapters.size === PEN_CHAPTERS.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 rounded-xl p-8 text-center"
                    style={{ background: 'rgba(201,147,58,0.08)', border: '1px solid rgba(201,147,58,0.3)' }}
                  >
                    <p className="text-3xl font-bold mb-2" style={{ color: '#c9933a', fontFamily: 'var(--font-heading)' }}>
                      You've seen the whole pen.
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(138,122,96,0.8)', fontFamily: 'var(--font-sans)' }}>
                      Every object you use is a civilizational miracle. Use them well. Waste less.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="chapter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto pt-4"
              >
                <AnimatePresence mode="wait">
                  <ChapterView
                    key={activeChapter}
                    chapter={PEN_CHAPTERS[activeChapter]}
                    chapterIndex={activeChapter}
                    totalChapters={PEN_CHAPTERS.length}
                    onNext={nextChapter}
                    onPrev={prevChapter}
                    onClose={closeChapter}
                  />
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
