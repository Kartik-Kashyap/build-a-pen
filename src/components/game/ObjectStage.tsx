import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PenSVG from './PenSVG';
import HardDiskSVG from '../hard-disk-journey/HardDiskSVG';
import ForkSVG from '../fork-journey/ForkSVG';
import LayerCard, { type Layer } from './LayerCard';
import LayerDetail from './LayerDetail';
import type { ProductId } from './ProductSelector';

// Layer icons as inline SVGs
const MaterialsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
  </svg>
);

const ManufacturingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20" />
    <path d="M5 20V8l5-5 5 5v12" />
    <path d="M14 20v-5h4v5" />
    <path d="M9 12h2" />
    <path d="M9 16h2" />
  </svg>
);

const SupplyChainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M7 6h10M6.5 7.5l4 9M17.5 7.5l-4 9" />
  </svg>
);

const ScienceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11l-5 5h16l-5-5V3" />
  </svg>
);

const EconomicsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const LegalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const PEN_LAYERS: Layer[] = [
  { id: 'materials', title: 'Raw Materials', stat: 'The tungsten carbide tip travels across 3 continents before reaching your hand. The ink is a precise chemical cocktail of dyes, solvents, and resins.', icon: <MaterialsIcon />, locked: false, color: '#c9933a' },
  { id: 'manufacturing', title: 'Manufacturing', stat: 'A single ballpoint tip requires tolerances of ±0.001mm. The brass housing is precision-turned on CNC lathes running 24 hours a day.', icon: <ManufacturingIcon />, locked: true, color: '#a0522d' },
  { id: 'supply-chain', title: 'Supply Chain', stat: 'Components cross 6+ national borders before assembly. A disruption in a single Chilean copper mine can delay pen production worldwide.', icon: <SupplyChainIcon />, locked: true, color: '#c9933a' },
  { id: 'science', title: 'Science & Engineering', stat: 'Ballpoint ink must flow at exactly the right viscosity — too thin and it leaks, too thick and it skips. This took decades of polymer chemistry to solve.', icon: <ScienceIcon />, locked: true, color: '#a0522d' },
  { id: 'economics', title: 'Economics & Business', stat: 'A pen sells for $0.10. The global pen industry is worth $18 billion. Billions of units are sold annually — margins are won in fractions of a cent.', icon: <EconomicsIcon />, locked: true, color: '#c9933a' },
  { id: 'legal', title: 'Laws & Regulations', stat: 'Pen ink must pass FDA food-contact safety tests. Patents on ballpoint mechanisms have shaped entire national industries. Trade tariffs have moved factories across continents.', icon: <LegalIcon />, locked: true, color: '#a0522d' },
];

const HARD_DISK_LAYERS: Layer[] = [
  { id: 'materials', title: 'Raw Materials', stat: 'Rare earth metals mined in China; aluminum from Australia. Extracting Neodymium and Platinum from the earth.', icon: <MaterialsIcon />, locked: false, color: '#c9933a' },
  { id: 'manufacturing', title: 'Manufacturing', stat: 'Platters assembled in Class 100 cleanrooms. The read/write head flies merely 2-5 nanometers above the disk.', icon: <ManufacturingIcon />, locked: true, color: '#a0522d' },
  { id: 'supply-chain', title: 'Supply Chain', stat: 'A fragile global network. The 2011 Thai floods submerged mega-factories, halting 30% of global production.', icon: <SupplyChainIcon />, locked: true, color: '#c9933a' },
  { id: 'science', title: 'Science & Engineering', stat: 'Relying on the Giant Magnetoresistance quantum effect and nanoscale lasers heating platters to 400°C for a nanosecond.', icon: <ScienceIcon />, locked: true, color: '#a0522d' },
  { id: 'economics', title: 'Economics & Business', stat: 'Storage cost dropped from $500k/GB to under $0.015/GB. Cloud infrastructure relies heavily on these vast spinning arrays.', icon: <EconomicsIcon />, locked: true, color: '#c9933a' },
  { id: 'legal', title: 'Laws & E-Waste', stat: 'GDPR forces physical shredding of drives. Thousands of tons of neodymium are lost as untreatable e-waste securely.', icon: <LegalIcon />, locked: true, color: '#a0522d' },
];

// const FORK_LAYERS: Layer[] = [
//   { id: 'materials', title: 'Raw Materials', stat: 'Ancient algae and crude oil polymerized into Polystyrene resin. A material born 300 million years ago.', icon: <MaterialsIcon />, locked: false, color: '#c9933a' },
//   { id: 'engineering', title: 'Tooling & Engineering', stat: 'A $100,000 block of high-grade tool steel precisely machined to the negative space of a single fork.', icon: <ManufacturingIcon />, locked: true, color: '#a0522d' },
//   { id: 'manufacturing', title: 'Manufacturing', stat: 'Molten plastic injected at 20,000 PSI—pressure equal to the bottom of the Mariana Trench—every 4 seconds.', icon: <ScienceIcon />, locked: true, color: '#c9933a' },
//   { id: 'aftermath', title: 'The Aftermath', stat: 'A 10-minute lifecycle followed by a 500-year ghost. Polystyrene bonds that nature does not recognize.', icon: <LegalIcon />, locked: true, color: '#a0522d' },
// ];

import { type Layer } from '../journey/types'; // Adjust import path as needed

export const FORK_LAYERS: Layer[] = [
  { 
    id: 'materials', 
    title: 'Raw Materials', 
    stat: 'Forged from 18/10 stainless steel—an alloy of iron, 18% chromium, and 10% nickel mined across Australia and Indonesia.', 
    icon: <MaterialsIcon />, 
    locked: false, 
    color: '#64748b' 
  },
  { 
    id: 'manufacturing', 
    title: 'Manufacturing', 
    stat: 'Stamping presses apply over 150 tons of force to cut the four tines, followed by ceramic tumbling for a sanitary, mirror finish.', 
    icon: <ManufacturingIcon />, 
    locked: true, 
    color: '#475569' 
  },
  { 
    id: 'supply-chain', 
    title: 'Supply Chain', 
    stat: 'Millions of forks are exported weekly from Jieyang, China—the global cutlery capital—via massive ocean freight containers.', 
    icon: <SupplyChainIcon />, 
    locked: true, 
    color: '#64748b' 
  },
  { 
    id: 'science', 
    title: 'Science & Engineering', 
    stat: 'A 2-nanometer, self-healing layer of chromium oxide prevents rust. The four tines and camber provide perfect ergonomic balance.', 
    icon: <ScienceIcon />, 
    locked: true, 
    color: '#475569' 
  },
  { 
    id: 'economics', 
    title: 'Economics & Business', 
    stat: 'Once a luxury of silver, mass automation dropped marginal costs below ten cents, fueling a $14 billion global commodity market.', 
    icon: <EconomicsIcon />, 
    locked: true, 
    color: '#64748b' 
  },
  { 
    id: 'legal', 
    title: 'Laws & Regulation', 
    stat: 'Strict migration testing prevents heavy metal leaching, while new single-use plastic bans are reviving reusable steel cutlery.', 
    icon: <LegalIcon />, 
    locked: true, 
    color: '#475569' 
  },
];

interface ObjectStageProps {
  activeProduct: ProductId;
}

export default function ObjectStage({ activeProduct }: ObjectStageProps) {
  const navigate = useNavigate();
  const isHardDisk = activeProduct === 'hard-disk';
  const isFork = activeProduct === 'fork';
  const initialLayers = isHardDisk ? HARD_DISK_LAYERS : isFork ? FORK_LAYERS : PEN_LAYERS;

  const [layers, setLayers] = useState<Layer[]>(initialLayers);
  const [expandedLayer, setExpandedLayer] = useState<Layer | null>(null);
  const [unlockedCount, setUnlockedCount] = useState(1);

  useEffect(() => {
    setLayers(isHardDisk ? HARD_DISK_LAYERS : isFork ? FORK_LAYERS : PEN_LAYERS);
    setUnlockedCount(1);
    setExpandedLayer(null);
  }, [isHardDisk, isFork]);

  const handleUnlock = (id: string) => {
    setLayers((prev) =>
      prev.map((l) => (l.id === id ? { ...l, locked: false } : l))
    );
    setUnlockedCount((c) => c + 1);
  };

  const handleExpand = (id: string) => {
    const chapterMap: Record<string, number> = {
      materials: 0,
      manufacturing: 1,
      'supply-chain': 2,
      science: 3,
      economics: 4,
      legal: 5,
    };
    const chapterIndex = chapterMap[id];
    if (chapterIndex !== undefined) {
      navigate(`/${activeProduct}#${id}`);
    } else {
      const layer = layers.find((l) => l.id === id);
      if (layer) setExpandedLayer(layer);
    }
  };

  const progress = Math.round((unlockedCount / layers.length) * 100);

  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col items-center pt-8 pb-24 px-4" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl flex items-center justify-between mb-8"
        >
          <div>
            <p className="text-xs tracking-widest uppercase" style={{ color: isHardDisk ? 'rgba(201,147,58,0.6)' : 'rgba(201,147,58,0.6)', fontFamily: 'var(--font-sans)' }}>
              Object Study
            </p>
            <h2 className="text-2xl font-bold" style={{ color: '#f0e8d8', fontFamily: 'var(--font-heading)' }}>
              {isHardDisk ? 'The Hard Disk' : activeProduct === 'fork' ? 'The Plastic Fork' : 'The Ballpoint Pen'}
            </h2>
          </div>

          <div className="flex flex-col items-end gap-1">
            <p className="text-xs" style={{ color: 'rgba(138,122,96,0.7)', fontFamily: 'var(--font-sans)' }}>
              {unlockedCount}/{layers.length} layers revealed
            </p>
            <div className="w-32 h-1 rounded-full" style={{ background: 'rgba(46,36,22,0.9)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #c9933a, #a0522d)' }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 grid grid-cols-1 gap-3 w-full lg:max-w-xs">
            {layers.slice(0, 3).map((layer, i) => (
              <LayerCard
                key={layer.id}
                layer={layer}
                index={i}
                onUnlock={handleUnlock}
                onExpand={handleExpand}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="flex flex-col items-center gap-4 flex-shrink-0 min-w-[240px]"
          >
            <div className="relative flex items-center justify-center">
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute rounded-full border"
                  style={{
                    width: `${ring * 80 + 80}px`,
                    height: `${ring * 80 + 80}px`,
                    borderColor: `rgba(201,147,58,${0.06 - ring * 0.015})`,
                  }}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 30 + ring * 10, repeat: Infinity, ease: 'linear' as const }}
                />
              ))}

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
                className="relative z-10"
              >
                {isHardDisk ? (
                  <HardDiskSVG className="w-16 h-auto" glowing />
                ) : isFork ? (
                  <ForkSVG className="w-16 h-auto" glowing />
                ) : (
                  <PenSVG className="w-14 h-auto" glowing />
                )}
              </motion.div>
            </div>

            <div className="text-center mt-4">
              <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(201,147,58,0.5)', fontFamily: 'var(--font-sans)' }}>
                {isHardDisk ? 'Hard Disk Drive' : isFork ? 'Fork' : 'Ballpoint Pen'}
              </p>
              <p className="text-xs mt-1" style={{ color: 'rgba(138,122,96,0.5)', fontFamily: 'var(--font-sans)' }}>
                {isHardDisk ? '<$0.015 per GB' : isFork ? '~$0.03 unit cost' : '~$0.10 retail price'}
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(`/${activeProduct}`)}
                className="mt-3 text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all"
                style={{
                  color: '#c9933a',
                  border: '1px solid rgba(201,147,58,0.35)',
                  background: 'rgba(201,147,58,0.07)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Deep Dive →
              </motion.button>
            </div>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 gap-3 w-full lg:max-w-xs">
            {layers.slice(3).map((layer, i) => (
              <LayerCard
                key={layer.id}
                layer={layer}
                index={i + 3}
                onUnlock={handleUnlock}
                onExpand={handleExpand}
              />
            ))}
          </div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 max-w-xl text-center"
        >
          <p
            className="text-sm italic leading-relaxed"
            style={{ color: 'rgba(138,122,96,0.5)', fontFamily: 'var(--font-heading)' }}
          >
            "Every object is a physical record of millions of decisions by thousands of people."
          </p>
        </motion.blockquote>
      </div>

      <LayerDetail layer={expandedLayer} onClose={() => setExpandedLayer(null)} />
    </>
  );
}
