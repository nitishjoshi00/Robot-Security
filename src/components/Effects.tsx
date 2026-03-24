import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hexagon } from 'lucide-react';

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-10"
            >
              <Hexagon className="text-accent w-24 h-24" strokeWidth={1} />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-orbitron font-black text-xl text-accent animate-pulse">RB</span>
            </div>
            
            {/* Scanning line effect */}
            <motion.div
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-accent/50 shadow-[0_0_10px_#00FFD1] z-20"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="font-orbitron text-xs font-bold tracking-[0.5em] text-accent mb-2">INITIALIZING SYSTEMS</div>
            <div className="font-mono text-[10px] text-muted">ROLAND BEGUS AUTONOMOUS SECURITY v2.5.0</div>
          </motion.div>
          
          <div className="mt-12 w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-primary shadow-[0_0_10px_#0A84FF]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-[60] bg-surface/90 backdrop-blur-xl border border-primary/20 p-6 rounded-2xl shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Hexagon className="text-accent" size={20} />
            </div>
            <div>
              <h4 className="font-orbitron font-bold text-xs tracking-wider mb-2">DATA CLEARANCE</h4>
              <p className="text-muted text-xs leading-relaxed mb-4">
                We use cookies to optimize your experience and analyze system traffic. By continuing, you authorize our data protocols.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={accept}
                  className="flex-1 px-4 py-2 bg-accent text-background font-orbitron font-bold text-[10px] tracking-widest hover:brightness-110 transition-all"
                >
                  AUTHORIZE
                </button>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="px-4 py-2 border border-white/10 text-muted font-orbitron font-bold text-[10px] tracking-widest hover:bg-white/5 transition-all"
                >
                  DECLINE
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{ 
          x: position.x - 16, 
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#00FFD1' : '#0A84FF'
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[100] hidden md:block"
      />
      <motion.div
        animate={{ 
          x: position.x - 2, 
          y: position.y - 2,
          backgroundColor: isHovering ? '#00FFD1' : '#0A84FF'
        }}
        className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[100] hidden md:block"
      />
    </>
  );
};
