// import { motion } from 'motion/react';

// interface HardDiskSVGProps {
//   className?: string;
//   glowing?: boolean;
// }

// export default function HardDiskSVG({ className = '', glowing = false }: HardDiskSVGProps) {
//   // Use the specific color from the PenSVG
//   const themeColor = '#c9933a';

//   const drawTransition = (delay: number) => ({
//     pathLength: { delay, duration: 0.8, ease: "easeInOut" as const },
//     opacity: { delay, duration: 0.3 }
//   });

//   return (
//     <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
//       <svg viewBox="0 0 100 140" fill="none" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
        
//         {/* Define filter for internal component glow, matching PenSVG style */}
//         <defs>
//           <filter id="diskGlow" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur stdDeviation="2.5" result="blur" />
//             <feMerge>
//               <feMergeNode in="blur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* Outer casing */}
//         <motion.rect 
//           x="5" y="5" width="90" height="130" rx="8" 
//           fill="#1f1f1f" 
//           // Casing stroke matches theme color, optionally glowing
//           stroke={glowing ? themeColor : '#333'} 
//           strokeWidth="1.5" 
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={drawTransition(0)}
//           filter={glowing ? 'url(#diskGlow)' : 'none'}
//         />
//         <motion.rect 
//           x="10" y="10" width="80" height="120" rx="4" fill="#262626" 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//         />
        
//         {/* Platter Base */}
//         <motion.circle 
//           cx="50" cy="55" r="38" fill="#333" stroke="#444" strokeWidth="1" 
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={drawTransition(0.5)}
//         />
        
//         {/* Animated Platter Group */}
//         <motion.g
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//           style={{ transformOrigin: '50px 55px' }}
//         >
//           {/* Continuous Rotation */}
//           <motion.g
//             animate={{ rotate: 360 }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
//             style={{ transformOrigin: '50px 55px' }}
//           >
//             {/* The platter rings use themeColor with various opacities */}
//             <circle cx="50" cy="55" r="35" fill="none" stroke={themeColor} strokeWidth="1" opacity="0.6" />
//             <circle cx="50" cy="55" r="28" fill="none" stroke={themeColor} strokeWidth="0.5" opacity="0.4" />
//             <circle cx="50" cy="55" r="18" fill="none" stroke={themeColor} strokeWidth="0.5" opacity="0.2" />
            
//             {/* Grid lines on platter */}
//             <path d="M50 20 L50 90" stroke={themeColor} strokeWidth="1" opacity="0.1" />
//             <path d="M15 55 L85 55" stroke={themeColor} strokeWidth="1" opacity="0.1" />
//           </motion.g>
//         </motion.g>

//         {/* Spindle Motor */}
//         <motion.circle 
//           cx="50" cy="55" r="8" fill="#111" stroke="#666" strokeWidth="1.5" 
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={drawTransition(1.2)}
//         />
//         <circle cx="50" cy="55" r="3" fill="#aaa" />

//         {/* Actuator Base */}
//         <motion.path 
//           d="M10 100 Q 20 85 35 110 Q 25 125 10 120 Z" fill="#1a1a1a" stroke="#444" strokeWidth="1" 
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={drawTransition(1.4)}
//         />
        
//         {/* Actuator Arm - Sequence drawing then swinging */}
//         <motion.g
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.6 }}
//           style={{ transformOrigin: '22px 110px' }}
//         >
//           <motion.g
//             animate={{ rotate: [-5, 15, -5, 20, 0, -5] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//             style={{ transformOrigin: '22px 110px' }}
//           >
//             <motion.path 
//               d="M22 110 L48 65 L52 64 L50 62 L20 106 Z" 
//               fill={themeColor} // Main arm now themeColor
//               stroke={themeColor} 
//               strokeWidth="0.5"
//               opacity="0.8"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ delay: 1.6, duration: 0.8 }}
//             />
//             {/* R/W head - The active point now 'glows' with the themeColor */}
//             <rect 
//                 x="49" y="62" width="3" height="4" 
//                 fill={themeColor} 
//                 opacity={glowing ? 1 : 0.6} 
//                 transform="rotate(35 50 64)"
//                 filter={glowing ? 'url(#diskGlow)' : 'none'}
//             />
//           </motion.g>
//         </motion.g>

//         {/* PCB Details */}
//         <motion.rect 
//           x="65" y="105" width="20" height="20" rx="2" fill="#1a1a1a" stroke="#444" strokeWidth="0.5" 
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={drawTransition(1.8)}
//         />
//         {[110, 115, 120].map((y, i) => (
//           <motion.line 
//             key={y} x1="70" y1={y} x2="80" y2={y} 
//             stroke={themeColor} // PCB lines match themeColor
//             strokeWidth="0.5" 
//             opacity="0.7"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 0.7 }}
//             transition={{ delay: 2.0 + (i * 0.1), duration: 0.4 }}
//           />
//         ))}
//       </svg>

//       {/* Outer Glow Effect, matching PenSVG drop-shadow color and style */}
//       {glowing && (
//         <motion.div
//           className="absolute inset-0 rounded-lg pointer-events-none"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: [0.4, 0.6, 0.4] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
//           style={{ boxShadow: '0 0 25px rgba(201, 147, 58, 0.4)' }}
//         />
//       )}
//     </div>
//   );
// }


// import { motion } from 'motion/react';

// interface HardDiskSVGProps {
//   className?: string;
//   glowing?: boolean;
// }

// export default function HardDiskSVG({ className = '', glowing = false }: HardDiskSVGProps) {
//   const strokeColor = '#c9933a';
//   const glowFilter = glowing ? 'url(#diskGlow)' : 'none';

//   const drawTransition = (delay: number) => ({
//     pathLength: { delay, duration: 0.8, ease: "easeInOut" as const },
//     opacity: { delay, duration: 0.3 }
//   });

//   return (
//     <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
//       <svg 
//         viewBox="0 0 100 140" 
//         fill="none" 
//         className="w-full h-full" 
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ filter: glowing ? `drop-shadow(0 0 12px rgba(201,147,58,0.5))` : 'none' }}
//       >
//         <defs>
//           <filter id="diskGlow" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur stdDeviation="3" result="blur" />
//             <feMerge>
//               <feMergeNode in="blur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* Outer casing - Transparent with stroke */}
//         <motion.rect 
//           x="5" y="5" width="90" height="130" rx="8" 
//           stroke={strokeColor} 
//           strokeWidth="1.2" 
//           fill="none"
//           filter={glowFilter}
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={drawTransition(0)}
//         />
        
//         {/* Inner frame detail */}
//         <motion.rect 
//           x="10" y="10" width="80" height="120" rx="4" 
//           stroke={strokeColor} 
//           strokeWidth="0.8" 
//           fill="none"
//           opacity="0.3"
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 0.3 }}
//           transition={drawTransition(0.4)}
//         />
        
//         {/* Platter Base Circle */}
//         <motion.circle 
//           cx="50" cy="55" r="38" 
//           stroke={strokeColor} 
//           strokeWidth="1" 
//           fill="none"
//           opacity="0.4"
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 0.4 }}
//           transition={drawTransition(0.6)}
//         />
        
//         {/* Animated Rotating Platters */}
//         <motion.g style={{ transformOrigin: '50px 55px' }}>
//           <motion.g
//             animate={{ rotate: 360 }}
//             transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
//             style={{ transformOrigin: '50px 55px' }}
//           >
//             <circle cx="50" cy="55" r="35" stroke={strokeColor} strokeWidth="0.8" opacity="0.6" fill="none" />
//             <circle cx="50" cy="55" r="25" stroke={strokeColor} strokeWidth="0.5" opacity="0.3" fill="none" />
//             {/* Crosshair/Tech lines on platter */}
//             <path d="M50 25 L50 40 M50 70 L50 85" stroke={strokeColor} strokeWidth="0.5" opacity="0.5" />
//             <path d="M20 55 L35 55 M65 55 L80 55" stroke={strokeColor} strokeWidth="0.5" opacity="0.5" />
//           </motion.g>
//         </motion.g>

//         {/* Spindle / Center Hub */}
//         <motion.circle 
//           cx="50" cy="55" r="6" 
//           stroke={strokeColor} 
//           strokeWidth="1" 
//           fill="none"
//           filter={glowFilter}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//         />

//         {/* Actuator Arm - Fully Transparent/Stroke style */}
//         <motion.g
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.4 }}
//           style={{ transformOrigin: '22px 110px' }}
//         >
//           <motion.g
//             animate={{ rotate: [-5, 15, -5, 20, 0, -5] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//             style={{ transformOrigin: '22px 110px' }}
//           >
//             <motion.path 
//               d="M22 110 L48 65 L52 64 L50 62 L20 106 Z" 
//               stroke={strokeColor} 
//               strokeWidth="1" 
//               fill="none"
//               filter={glowFilter}
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ delay: 1.5, duration: 1 }}
//             />
//             {/* R/W Head point */}
//             <rect 
//                 x="49" y="62" width="3" height="4" 
//                 fill={strokeColor} 
//                 opacity={glowing ? 0.9 : 0.5} 
//                 transform="rotate(35 50 64)"
//             />
//           </motion.g>
//         </motion.g>

//         {/* PCB / Tech Detail in Corner */}
//         <motion.rect 
//           x="68" y="108" width="18" height="18" rx="2" 
//           stroke={strokeColor} 
//           strokeWidth="0.8" 
//           fill="none"
//           opacity="0.4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.4 }}
//           transition={{ delay: 1.8 }}
//         />
//         {[113, 117, 121].map((y, i) => (
//           <motion.line 
//             key={y} x1="72" y1={y} x2="82" y2={y} 
//             stroke={strokeColor} 
//             strokeWidth="0.6" 
//             opacity="0.5"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ delay: 2.0 + (i * 0.1), duration: 0.5 }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }


import { motion } from 'motion/react';

interface HardDiskSVGProps {
  className?: string;
  glowing?: boolean;
}

export default function HardDiskSVG({ className = '', glowing = false }: HardDiskSVGProps) {
  const strokeColor = '#c9933a';
  const glowFilter = glowing ? 'url(#diskGlow)' : 'none';

  const drawTransition = (delay: number) => ({
    pathLength: { delay, duration: 0.8, ease: "easeInOut" as const },
    opacity: { delay, duration: 0.3 }
  });

  return (
    <svg 
      viewBox="0 0 100 140" 
      fill="none" 
      className={`w-full h-full ${className}`} 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: glowing ? 'drop-shadow(0 0 12px rgba(201,147,58,0.5))' : 'none' }}
    >
      <defs>
        <filter id="diskGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer casing */}
      <motion.rect 
        x="5" y="5" width="90" height="130" rx="8" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="1.2" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(0)}
        filter={glowFilter}
      />
      
      {/* Inner casing detail (converted to a dashed line-art boundary) */}
      <motion.rect 
        x="10" y="10" width="80" height="120" rx="4" 
        fill="none"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeDasharray="2 4"
        opacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={drawTransition(0.4)}
      />
      
      {/* Platter Base */}
      <motion.circle 
        cx="50" cy="55" r="38" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="1.2" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(0.5)}
        filter={glowFilter}
      />
      
      {/* Animated Platter Group */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{ transformOrigin: '50px 55px' }}
      >
        {/* Continuous Rotation */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50px 55px' }}
        >
          {/* The platter rings */}
          <circle cx="50" cy="55" r="35" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
          <circle cx="50" cy="55" r="28" fill="none" stroke={strokeColor} strokeWidth="0.5" opacity="0.4" />
          <circle cx="50" cy="55" r="18" fill="none" stroke={strokeColor} strokeWidth="0.5" opacity="0.2" />
          
          {/* Grid lines on platter */}
          <path d="M50 20 L50 90" stroke={strokeColor} strokeWidth="0.5" opacity="0.3" />
          <path d="M15 55 L85 55" stroke={strokeColor} strokeWidth="0.5" opacity="0.3" />
        </motion.g>
      </motion.g>

      {/* Spindle Motor */}
      <motion.circle 
        cx="50" cy="55" r="8" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="1.2" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(1.2)}
      />
      {/* Spindle center pin */}
      <circle cx="50" cy="55" r="3" fill="none" stroke={strokeColor} strokeWidth="0.8" opacity="0.6" />

      {/* Actuator Base */}
      <motion.path 
        d="M10 100 Q 20 85 35 110 Q 25 125 10 120 Z" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="1" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(1.4)}
        filter={glowFilter}
      />

        <circle cx="22" cy="110" r="5" fill="none" stroke={strokeColor} strokeWidth="1" />
      
      {/* Actuator Arm - Sequence drawing then swinging */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ transformOrigin: '22px 110px' }}
      >
        <motion.g
          animate={{ rotate: [-5, 15, -5, 20, 0, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ transformOrigin: '22px 110px' }}
        >
          <motion.path 
            d="M22 110 L48 65 L52 64 L50 62 L20 106 Z" 
            fill="none"
            stroke={strokeColor} 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            filter={glowFilter}
          />
          {/* R/W head */}
          <motion.rect 
            x="49" y="62" width="3" height="4" 
            fill="rgba(201,147,58,0.2)"
            stroke={strokeColor}
            strokeWidth="0.8"
            opacity={glowing ? 1 : 0.6} 
            transform="rotate(35 50 64)"
            filter={glowFilter}
          />
        </motion.g>
      </motion.g>

      {/* PCB Details */}
      <motion.rect 
        x="65" y="105" width="20" height="20" rx="2" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="0.8" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={drawTransition(1.8)}
      />
      {[110, 115, 120].map((y, i) => (
        <motion.line 
          key={y} x1="70" y1={y} x2="80" y2={y} 
          stroke={strokeColor}
          strokeWidth="0.8" 
          opacity="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 2.0 + (i * 0.1), duration: 0.4 }}
        />
      ))}
    </svg>
  );
}