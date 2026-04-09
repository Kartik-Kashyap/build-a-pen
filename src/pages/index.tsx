import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import BackgroundGrid from '@/components/game/BackgroundGrid';
import HeroStage from '@/components/game/HeroStage';
import ObjectStage from '@/components/game/ObjectStage';
import ProductSelector, { type ProductId } from '@/components/game/ProductSelector';
import DidYouKnow from '@/components/game/DidYouKnow';

type Stage = 'hero' | 'explore';

export default function HomePage() {
  const [stage, setStage] = useState<Stage>('hero');
  const [activeProduct, setActiveProduct] = useState<ProductId>('pen');

  return (
    <>
      <title>Build A Pen — The Hidden World Behind Everyday Objects</title>
      <meta
        name="description"
        content="Discover the centuries of science, thousands of workers, and global supply chains behind the simple objects you use every day."
      />

      <div
        className="relative w-full min-h-screen overflow-x-hidden"
        style={{ background: '#0d0d0d' }}
      >
        {/* Animated background */}
        <BackgroundGrid />

        {/* Radial ambient glow */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,147,58,0.04) 0%, transparent 70%)',
            zIndex: 0,
          }}
        />

        {/* Stage transitions */}
        <AnimatePresence mode="wait">
          {stage === 'hero' ? (
            <motion.div
              key="hero"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.6, ease: 'easeInOut' as const }}
            >
              <HeroStage onBegin={() => setStage('explore')} />
            </motion.div>
          ) : (
            <motion.div
              key="explore"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' as const }}
            >
              <ObjectStage activeProduct={activeProduct} />
              <ProductSelector active={activeProduct} onSelect={setActiveProduct} />
              <DidYouKnow />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top-left brand mark (always visible) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="fixed top-5 left-5 z-30"
        >
          <p
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: 'rgba(201,147,58,0.4)', fontFamily: 'var(--font-sans)' }}
          >
            Build A Pen
          </p>
        </motion.div>

        {/* Top-right — stage indicator */}
        {stage === 'explore' && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => setStage('hero')}
            className="fixed top-5 right-5 z-30 text-xs tracking-widest uppercase px-3 py-1.5 rounded-full transition-colors"
            style={{
              color: 'rgba(138,122,96,0.5)',
              border: '1px solid rgba(46,36,22,0.6)',
              fontFamily: 'var(--font-sans)',
              background: 'rgba(13,13,13,0.6)',
            }}
          >
            ← Intro
          </motion.button>
        )}
      </div>
    </>
  );
}
