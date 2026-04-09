// import { motion, AnimatePresence } from 'motion/react';
// import { useEffect, useState } from 'react';

// const facts = [
//   { label: 'The mold to make a plastic fork costs', value: '$100,000', suffix: 'The fork sells for 3¢.' },
//   { label: 'Your pen\'s tip is made of', value: 'Tungsten Carbide', suffix: 'Harder than most steels.' },
//   { label: 'A $6 toaster contains', value: '400+', suffix: 'Components from 6 continents.' },
//   { label: 'Nearly', value: '200 Billion', suffix: 'Aluminum cans are made every year.' },
//   { label: 'The pencil\'s graphite formula was invented during', value: 'War', suffix: 'France couldn\'t access English graphite.' },
// ];

// export default function DidYouKnow() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = window.setInterval(() => {
//       setIndex((i) => (i + 1) % facts.length);
//     }, 5000);
//     return () => window.clearInterval(interval);
//   }, []);

//   const fact = facts[index];

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: 2, duration: 0.6 }}
//       className="fixed bottom-24 right-4 md:right-6 w-56 rounded-lg p-4 z-20"
//       style={{
//         background: 'rgba(26,22,16,0.92)',
//         border: '1px solid rgba(46,36,22,0.9)',
//         backdropFilter: 'blur(8px)',
//         boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
//       }}
//     >
//       <p
//         className="text-xs tracking-widest uppercase mb-3"
//         style={{ color: 'rgba(201,147,58,0.6)', fontFamily: 'var(--font-sans)' }}
//       >
//         Did you know?
//       </p>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 8 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -8 }}
//           transition={{ duration: 0.4 }}
//         >
//           <p className="text-xs mb-1" style={{ color: 'rgba(138,122,96,0.8)', fontFamily: 'var(--font-sans)' }}>
//             {fact.label}
//           </p>
//           <p
//             className="text-lg font-bold leading-tight mb-1"
//             style={{ color: '#c9933a', fontFamily: 'var(--font-heading)' }}
//           >
//             {fact.value}
//           </p>
//           <p className="text-xs" style={{ color: 'rgba(240,232,216,0.5)', fontFamily: 'var(--font-sans)' }}>
//             {fact.suffix}
//           </p>
//         </motion.div>
//       </AnimatePresence>

//       {/* Progress dots */}
//       <div className="flex gap-1 mt-3">
//         {facts.map((_, i) => (
//           <div
//             key={i}
//             className="h-px flex-1 rounded-full transition-all duration-500"
//             style={{ background: i === index ? '#c9933a' : 'rgba(46,36,22,0.9)' }}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }


// import { motion, AnimatePresence } from 'motion/react';
// import { useEffect, useState } from 'react';
// import { X } from 'lucide-react'; // Assuming you use lucide-react, or use a simple SVG

// const facts = [
//   { label: 'Your pen\'s tip is made of', value: 'Tungsten Carbide', suffix: 'Harder than most steels.' },
//   { label: 'A $6 toaster contains', value: '400+', suffix: 'Components from 6 continents.' },
//   { label: 'Hard drive platters are polished to a', value: 'Mirror Finish', suffix: 'Even a fingerprint is like a mountain.' },
//   { label: 'The R/W head flies above the disk at', value: '5 Nanometers', suffix: 'That is the width of two strands of DNA.' },
//   { label: 'Inside a hard drive is cleaner than an', value: 'Operating Room', suffix: 'A single dust mote can crash the head.' },
//   { label: 'The mold to make a plastic fork costs', value: '$100,000', suffix: 'The fork sells for 3¢.' },
//   { label: 'Nearly', value: '200 Billion', suffix: 'Aluminum cans are made every year.' },
//   { label: 'The pencil\'s graphite formula was invented during', value: 'War', suffix: 'France couldn\'t access English graphite.' },
// ];

// export default function DidYouKnow() {
//   const [index, setIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     if (!isVisible) return;

//     const interval = window.setInterval(() => {
//       setIndex((i) => (i + 1) % facts.length);
//     }, 5000);
//     return () => window.clearInterval(interval);
//   }, [isVisible]);

//   const fact = facts[index];

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, x: 20, scale: 0.95 }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           exit={{ opacity: 0, x: 20, scale: 0.95 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           className="fixed bottom-24 right-4 md:right-6 w-64 rounded-lg p-5 z-20 group"
//           style={{
//             background: 'rgba(26,22,16,0.95)',
//             border: '1px solid rgba(201,147,58,0.2)',
//             backdropFilter: 'blur(12px)',
//             boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
//           }}
//         >
//           {/* Close Button */}
//           <button
//             onClick={() => setIsVisible(false)}
//             className="absolute top-3 right-3 p-1 rounded-md transition-colors"
//             style={{ color: 'rgba(201,147,58,0.4)' }}
//           >
//             <motion.div whileHover={{ scale: 1.1, color: '#c9933a' }} whileTap={{ scale: 0.9 }}>
//               <X size={14} />
//             </motion.div>
//           </button>

//           <p
//             className="text-[10px] tracking-[0.2em] uppercase mb-4"
//             style={{ color: 'rgba(201,147,58,0.6)', fontVariantCaps: 'all-small-caps' }}
//           >
//             Did you know?
//           </p>

//           <div className="min-h-[80px]">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.5, ease: "anticipate" }}
//               >
//                 <p className="text-xs mb-1.5" style={{ color: 'rgba(138,122,96,0.9)' }}>
//                   {fact.label}
//                 </p>
//                 <p
//                   className="text-xl font-bold leading-tight mb-2"
//                   style={{ color: '#c9933a', letterSpacing: '-0.02em' }}
//                 >
//                   {fact.value}
//                 </p>
//                 <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(240,232,216,0.4)' }}>
//                   {fact.suffix}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Progress dots */}
//           <div className="flex gap-1.5 mt-5">
//             {facts.map((_, i) => (
//               <div
//                 key={i}
//                 className="h-[2px] flex-1 rounded-full transition-all duration-700"
//                 style={{ 
//                   background: i === index ? '#c9933a' : 'rgba(201,147,58,0.1)',
//                   boxShadow: i === index ? '0 0 8px rgba(201,147,58,0.4)' : 'none'
//                 }}
//               />
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useCallback } from 'react';
import { X } from 'lucide-react';

const facts = [
  { label: 'Your pen\'s tip is made of', value: 'Tungsten Carbide', suffix: 'Harder than most steels.' },
  { label: 'A $6 toaster contains', value: '400+', suffix: 'Components from 6 continents.' },
  { label: 'Hard drive platters are polished to a', value: 'Mirror Finish', suffix: 'Even a fingerprint is like a mountain.' },
  { label: 'The R/W head flies above the disk at', value: '5 Nanometers', suffix: 'That is the width of two strands of DNA.' },
  { label: 'Inside a hard drive is cleaner than an', value: 'Operating Room', suffix: 'A single dust mote can crash the head.' },
  { label: 'The mold to make a plastic fork costs', value: '$100,000', suffix: 'The fork sells for 3¢.' },
  { label: 'Nearly', value: '200 Billion', suffix: 'Aluminum cans are made every year.' },
  { label: 'The pencil\'s graphite formula was invented during', value: 'War', suffix: 'France couldn\'t access English graphite.' },
];

export default function DidYouKnow() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-advance logic
  useEffect(() => {
    if (!isVisible) return;

    const interval = window.setInterval(() => {
      setIndex((i) => (i + 1) % facts.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [isVisible, index]); // Adding index to dependency reset the timer on manual click

  const fact = facts[index];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-24 right-4 md:right-6 w-64 rounded-lg p-5 z-20 group"
          style={{
            background: 'rgba(26,22,16,0.95)',
            border: '1px solid rgba(201,147,58,0.2)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 p-1 rounded-md transition-colors z-30"
            style={{ color: 'rgba(201,147,58,0.4)' }}
          >
            <motion.div whileHover={{ scale: 1.1, color: '#c9933a' }} whileTap={{ scale: 0.9 }}>
              <X size={14} />
            </motion.div>
          </button>

          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-4 pointer-events-none"
            style={{ color: 'rgba(201,147,58,0.6)', fontVariantCaps: 'all-small-caps' }}
          >
            Did you know?
          </p>

          <div className="min-h-[80px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "anticipate" }}
              >
                <p className="text-xs mb-1.5" style={{ color: 'rgba(138,122,96,0.9)' }}>
                  {fact.label}
                </p>
                <p
                  className="text-xl font-bold leading-tight mb-2"
                  style={{ color: '#c9933a', letterSpacing: '-0.02em' }}
                >
                  {fact.value}
                </p>
                <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(240,232,216,0.4)' }}>
                  {fact.suffix}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Clickable Progress Dots */}
          <div className="flex gap-1.5 mt-5">
            {facts.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="h-4 flex-1 group/dot relative flex items-center outline-none"
                aria-label={`View fact ${i + 1}`}
              >
                {/* Visual Bar */}
                <motion.div
                  className="h-[2px] w-full rounded-full transition-all duration-300"
                  animate={{ 
                    background: i === index ? '#c9933a' : 'rgba(201,147,58,0.15)',
                    boxShadow: i === index ? '0 0 8px rgba(201,147,58,0.4)' : '0 0 0px rgba(0,0,0,0)'
                  }}
                  whileHover={{ 
                    background: i === index ? '#c9933a' : 'rgba(201,147,58,0.4)' 
                  }}
                />
                
                {/* Hit area padding (invisible) */}
                <div className="absolute inset-0 -top-2 -bottom-2" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}