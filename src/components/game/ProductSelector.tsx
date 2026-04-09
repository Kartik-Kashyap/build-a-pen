import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export type ProductId = 'pen' | 'fork' | 'toaster' | 'can' | 'hard-disk' | 'piano' | 'saree' | 'medicine';

interface Product {
  id: ProductId | 'soon';
  label: string;
  icon: React.ReactNode;
  available: boolean;
}

// --- New Icons ---
const PianoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <path d="M2 13h20M6 13v8M10 13v8M14 13v8M18 13v8" />
  </svg>
);

// const SareeIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M6 21c3.5-7 12-7 12-14s-3-5-6-5-6 3-6 7 2 7 6 7c1 0 3-1 4-3" />
//     <path d="M12 2v2M9 3v1M15 3v1" />
//   </svg>
// );

const SareeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M 15.382812 5.976562 L 14.582031 3.09375 C 14.554688 2.992188 14.476562 2.914062 14.375 2.878906 L 12.367188 2.238281 L 12.261719 2.203125 C 12.230469 2.191406 12.199219 2.1875 12.167969 2.1875 L 7.835938 2.1875 C 7.804688 2.1875 7.769531 2.195312 7.742188 2.203125 L 5.625 2.878906 C 5.523438 2.910156 5.445312 2.992188 5.417969 3.09375 L 4.617188 5.984375 C 4.539062 6.304688 4.609375 6.640625 4.8125 6.902344 C 5.015625 7.164062 5.324219 7.316406 5.65625 7.316406 L 7.132812 7.316406 C 7.097656 7.800781 7 8.28125 6.835938 8.742188 C 5.992188 11.148438 6.613281 16.914062 6.640625 17.160156 C 6.65625 17.289062 6.746094 17.394531 6.867188 17.429688 C 6.953125 17.449219 8.316406 17.8125 10.113281 17.8125 C 11.039062 17.8125 12.085938 17.714844 13.128906 17.429688 C 13.25 17.394531 13.339844 17.289062 13.355469 17.164062 C 13.382812 16.917969 14.007812 11.152344 13.160156 8.742188 C 13 8.285156 12.902344 7.804688 12.867188 7.320312 L 14.34375 7.320312 C 14.675781 7.320312 14.988281 7.167969 15.191406 6.90625 C 15.390625 6.644531 15.460938 6.304688 15.382812 5.976562 M 10.320312 3.644531 L 10.113281 3.671875 C 9.484375 3.757812 9.007812 3.675781 8.695312 3.429688 C 8.488281 3.265625 8.371094 3.039062 8.308594 2.820312 L 10.449219 2.820312 C 10.460938 3.007812 10.441406 3.300781 10.320312 3.644531 Z M 5.304688 6.519531 C 5.222656 6.410156 5.191406 6.269531 5.222656 6.144531 L 5.976562 3.421875 L 7.679688 2.878906 C 7.761719 3.230469 7.941406 3.625 8.3125 3.914062 C 8.65625 4.1875 9.109375 4.324219 9.664062 4.324219 C 9.765625 4.324219 9.875 4.320312 9.984375 4.308594 C 9.601562 4.867188 8.917969 5.476562 7.710938 5.976562 C 7.570312 5.007812 7.257812 4.371094 7.230469 4.324219 C 7.148438 4.179688 6.96875 4.125 6.820312 4.199219 C 6.671875 4.277344 6.605469 4.453125 6.675781 4.605469 C 6.679688 4.617188 7.097656 5.464844 7.144531 6.6875 L 5.65625 6.6875 C 5.519531 6.695312 5.390625 6.628906 5.304688 6.519531 Z M 7.429688 8.949219 C 7.726562 8.109375 7.800781 7.320312 7.773438 6.632812 C 10.804688 5.4375 11.109375 3.613281 11.082031 2.816406 L 11.898438 2.816406 C 11.78125 4.148438 11.0625 9.578125 7.023438 12.679688 C 7.023438 11.265625 7.117188 9.835938 7.429688 8.949219 Z M 12.589844 9.011719 C 12.648438 9.1875 12.699219 9.382812 12.742188 9.597656 C 12.382812 9.738281 11.53125 10.007812 10.199219 10.070312 C 10.34375 9.839844 10.480469 9.609375 10.609375 9.371094 C 11.507812 9.300781 12.167969 9.144531 12.589844 9.011719 Z M 12.757812 16.878906 C 10.367188 17.476562 7.949219 17.03125 7.242188 16.871094 C 7.195312 16.351562 7.070312 14.964844 7.035156 13.441406 C 8.164062 12.648438 9.0625 11.707031 9.773438 10.703125 C 11.3125 10.683594 12.332031 10.410156 12.847656 10.222656 C 13.148438 12.539062 12.84375 15.992188 12.757812 16.878906 Z M 14.695312 6.519531 C 14.609375 6.628906 14.480469 6.691406 14.339844 6.691406 L 12.855469 6.691406 C 12.902344 5.472656 13.320312 4.621094 13.324219 4.609375 C 13.394531 4.457031 13.328125 4.277344 13.179688 4.203125 C 13.03125 4.128906 12.851562 4.183594 12.769531 4.328125 C 12.726562 4.410156 11.851562 6.1875 12.414062 8.414062 C 12.085938 8.515625 11.601562 8.632812 10.945312 8.710938 C 12.121094 6.261719 12.4375 3.882812 12.519531 2.945312 L 14.023438 3.421875 L 14.777344 6.132812 C 14.808594 6.273438 14.78125 6.414062 14.695312 6.519531 "/>
  </svg>
);

const MedicineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

// Existing icons...
const PenIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>;
const ForkIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>;
const ToasterIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="20" height="10" rx="2" /><path d="M8 9V5a2 2 0 0 1 4 0v4" /><path d="M12 9V5a2 2 0 0 1 4 0v4" /><path d="M6 19v2" /><path d="M18 19v2" /></svg>;
const CanIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l1 3H5L6 3z" /><path d="M5 6h14v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6z" /><path d="M9 6v14" /><path d="M15 6v14" /></svg>;
const HardDiskIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><circle cx="12" cy="12" r="3" /><path d="M12 15v3" /><path d="M20 8v.01" /></svg>;

const initialProducts: Product[] = [
  { id: 'pen', label: 'Pen', icon: <PenIcon />, available: true },
  { id: 'fork', label: 'Fork', icon: <ForkIcon />, available: true },
  { id: 'hard-disk', label: 'Hard Disk', icon: <HardDiskIcon />, available: true },
  { id: 'toaster', label: 'Toaster', icon: <ToasterIcon />, available: false },
  { id: 'can', label: 'Can', icon: <CanIcon />, available: false },
];

const extendedProducts: Product[] = [
  { id: 'piano', label: 'Piano', icon: <PianoIcon />, available: false },
  { id: 'saree', label: 'Saree', icon: <SareeIcon />, available: false },
  { id: 'medicine', label: 'Medicine', icon: <MedicineIcon />, available: false },
];

interface ProductSelectorProps {
  active: ProductId;
  onSelect: (id: ProductId) => void;
}

export default function ProductSelector({ active, onSelect }: ProductSelectorProps) {
  const [showMore, setShowMore] = useState(false);
  const [showSoonPopup, setShowSoonPopup] = useState<ProductId | null>(null);

  const handleProductClick = (product: Product) => {
    if (product.id === 'soon') {
      setShowMore(!showMore);
      return;
    }
    
    if (product.available) {
      onSelect(product.id as ProductId);
    } else {
      // Trigger temporary "Soon" popup
      setShowSoonPopup(product.id as ProductId);
      setTimeout(() => setShowSoonPopup(null), 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-20 flex justify-center pb-4"
    >
      <div
        className="flex items-center gap-1 rounded-xl px-3 py-2 transition-all duration-500"
        style={{
          background: 'rgba(13,13,13,0.9)',
          border: '1px solid rgba(46,36,22,0.9)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.4)',
        }}
      >
        {/* Render Original List + Extended List if showMore is true */}
        {[...initialProducts, ...(showMore ? extendedProducts : [])].map((product) => {
          const isActive = product.id === active;
          const isAvailable = product.available;
          const isPopupActive = showSoonPopup === product.id;

          return (
            <motion.button
              layout
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="relative flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                background: isActive ? 'rgba(201,147,58,0.12)' : 'transparent',
                color: isActive ? '#c9933a' : isAvailable ? 'rgba(240,232,216,0.5)' : 'rgba(138,122,96,0.25)',
                cursor: 'pointer',
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProduct"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: 'rgba(201,147,58,0.08)', border: '1px solid rgba(201,147,58,0.3)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              
              <span className="relative z-10">{product.icon}</span>
              <span className="relative z-10 text-[10px] tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>
                {product.label}
              </span>

              {/* Animated "Soon" Popup */}
              <AnimatePresence>
                {isPopupActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -30, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute z-30 px-2 py-0.5 rounded text-black font-bold whitespace-nowrap"
                    style={{ background: '#c9933a', fontSize: '9px' }}
                  >
                    COMING SOON
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}

        {/* The Toggle Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="relative flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200"
          style={{
            color: showMore ? '#c9933a' : 'rgba(240,232,216,0.5)',
            cursor: 'pointer',
          }}
        >
          <motion.div 
            animate={{ rotate: showMore ? 45 : 0 }} 
            className="relative z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </motion.div>
          <span className="relative z-10 text-[10px] tracking-wide">
            {showMore ? 'Less' : 'More'}
          </span>
        </button>
      </div>
    </motion.div>
  );
}