import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundGrid from '@/components/game/BackgroundGrid';
import HardDiskSVG from '@/components/hard-disk-journey/HardDiskSVG';
import ChapterView from '@/components/journey/ChapterView';
import { HARD_DISK_CHAPTERS } from '@/components/hard-disk-journey/chapterData';

type View = 'overview' | 'chapter';

export default function HardDiskJourneyPage() {
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
    if (next < HARD_DISK_CHAPTERS.length) {
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

  const progress = Math.round((completedChapters.size / HARD_DISK_CHAPTERS.length) * 100);

  return (
    <>
      <title>The Hard Disk — Build A Pen</title>
      <meta name="description" content="Discover the invisible world behind your digital data — quantum physics, rare earth mining, ultra-clean factories, and the economics of the cloud." />

      <div className="relative w-full min-h-screen" style={{ background: '#0d0d0d' }}>
        <BackgroundGrid />

        {/* Ambient glow - Switched to Gold/Amber */}
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
            ← Object Study
          </button>

          <div className="flex items-center gap-4">
            {/* Progress - Gold Gradient */}
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
                {completedChapters.size}/{HARD_DISK_CHAPTERS.length}
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
                      {/* Note: Ensure HardDiskSVG is updated to handle 'glowing' with gold if possible */}
                      <HardDiskSVG className="w-24 h-auto" glowing />
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
                      Object Study No. 3
                    </motion.p>
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-5xl md:text-6xl font-bold mb-4"
                      style={{ color: '#f0e8d8', fontFamily: 'var(--font-heading)', lineHeight: 1.05 }}
                    >
                      The Hard Disk
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-base leading-relaxed max-w-lg"
                      style={{ color: 'rgba(138,122,96,0.8)', fontFamily: 'var(--font-sans)' }}
                    >
                      It stores the entire internet. It relies on quantum physics, nanoscale lasers, and rare earth metals mined from deep underground. Explore the six dimensions of complexity hidden inside the box that holds your digital life.
                    </motion.p>

                    {/* Stats strip - Gold accent */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-6 mt-6"
                    >
                      {[
                        { value: '6', label: 'Complexity layers' },
                        { value: '<$0.015', label: 'Per Gigabyte' },
                        { value: '1,000+', label: 'Exabytes per year' },
                        { value: '400°C', label: 'HAMR Laser Heat' },
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
                    {HARD_DISK_CHAPTERS.map((chapter, i) => {
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

                {/* Completion banner - Gold variant */}
                {completedChapters.size === HARD_DISK_CHAPTERS.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 rounded-xl p-8 text-center"
                    style={{ background: 'rgba(201,147,58,0.08)', border: '1px solid rgba(201,147,58,0.3)' }}
                  >
                    <p className="text-3xl font-bold mb-2" style={{ color: '#c9933a', fontFamily: 'var(--font-heading)' }}>
                      You've seen the whole drive.
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(138,122,96,0.8)', fontFamily: 'var(--font-sans)' }}>
                      Every byte is a physical miracle. Your data has weight, history, and a physical toll on Earth. 
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
                    chapter={HARD_DISK_CHAPTERS[activeChapter]}
                    chapterIndex={activeChapter}
                    totalChapters={HARD_DISK_CHAPTERS.length}
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