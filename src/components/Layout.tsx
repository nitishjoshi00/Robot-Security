import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hexagon, 
  Menu, 
  X, 
  Mail, 
  Linkedin, 
  Youtube, 
  Github,
  Home,
  Shield,
  Zap,
  Users,
  MessageSquare
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LoadingScreen, CookieBanner, CustomCursor } from './Effects';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <div className="bg-primary text-white py-2 px-4 relative z-50 text-center text-[10px] md:text-sm font-medium tracking-wide">
      <span className="mr-2">🔬</span>
      Research Partnership: Maynooth University × RoliRobotics Limited | Now Accepting Enterprise Pilots
      <button onClick={() => setIsVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity">
        <X size={14} />
      </button>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Technology', href: '/technology' },
    { name: 'Partnership', href: '/partnership' },
    { name: 'Impact', href: '/impact' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-3 border-b border-primary/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Hexagon className="text-accent fill-accent/10 group-hover:rotate-90 transition-transform duration-500" size={32} />
            <span className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent fill-accent" xmlns="http://www.w3.org/2000/svg">
                {/* Quadruped Silhouette */}
                <path d="M19,15 L17,15 L16,12 L8,12 L7,15 L5,15 L6,10 L8,8 L16,8 L18,10 L19,15 Z M12,7 C13.1,7 14,6.1 14,5 C14,3.9 13.1,3 12,3 C10.9,3 10,3.9 10,5 C10,6.1 10.9,7 12,7 Z" />
              </svg>
            </span>
          </div>
          <div>
            <div className="font-orbitron font-black text-xl tracking-tighter leading-none">RoliRobotics</div>
            <div className="font-sans text-[8px] uppercase tracking-[4px] text-accent font-bold">LIMITED</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${location.pathname === link.href ? 'text-accent' : 'text-muted hover:text-accent'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/demo" className="hidden sm:block px-6 py-2 border border-accent text-accent font-orbitron text-[10px] font-bold tracking-widest hover:bg-accent hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(0,255,209,0.2)]">
            REQUEST DEMO
          </Link>
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-background z-50 flex flex-col p-8"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Hexagon className="text-accent" size={32} />
                <div className="font-orbitron font-black text-xl">RoliRobotics</div>
              </div>
              <div className="font-sans text-[8px] uppercase tracking-[4px] text-accent font-bold ml-11 -mt-2">LIMITED</div>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`text-3xl font-orbitron font-bold transition-colors ${location.pathname === link.href ? 'text-accent' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/demo" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-accent text-background font-orbitron font-bold text-lg text-center"
              >
                REQUEST DEMO
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MobileBottomNav = () => {
  const location = useLocation();
  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Shield, label: 'Tech', href: '/technology' },
    { icon: Users, label: 'Partner', href: '/partnership' },
    { icon: MessageSquare, label: 'Demo', href: '/demo' },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-white/5 z-40 px-6 py-3 pb-8">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <Link 
            key={item.label} 
            to={item.href}
            className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === item.href ? 'text-accent' : 'text-muted'}`}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const FloatingDemoCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-40 hidden sm:block"
    >
      <Link 
        to="/demo"
        className="group relative flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-[0_0_30px_rgba(10,132,255,0.4)] hover:scale-110 transition-transform"
      >
        <div className="absolute inset-0 rounded-full border border-accent animate-ping opacity-20"></div>
        <Zap className="text-white group-hover:text-accent transition-colors" size={24} />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-surface border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <span className="font-orbitron text-[10px] font-bold text-accent tracking-widest">SECURE YOUR FACILITY</span>
        </div>
      </Link>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary pt-24 pb-24 lg:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Hexagon className="text-accent" size={32} />
              <div className="font-orbitron font-black text-xl">RoliRobotics</div>
            </div>
            <div className="font-sans text-[8px] uppercase tracking-[4px] text-accent font-bold ml-11 -mt-2 mb-6">LIMITED</div>
            <p className="text-muted text-sm leading-relaxed">Securing Human Lives Through Intelligent Machines. Built with academic excellence and industrial precision.</p>
            <div className="flex gap-4">
              <Linkedin className="text-muted hover:text-accent cursor-pointer transition-colors" size={20} />
              <Youtube className="text-muted hover:text-accent cursor-pointer transition-colors" size={20} />
              <Github className="text-muted hover:text-accent cursor-pointer transition-colors" size={20} />
            </div>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-sm mb-6 tracking-widest">TECHNOLOGY</h4>
            <ul className="space-y-4 text-xs text-muted font-medium uppercase tracking-widest">
              <li className="hover:text-accent cursor-pointer transition-colors">Autonomous Navigation</li>
              <li className="hover:text-accent cursor-pointer transition-colors">AI Threat Detection</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Sensor Integration</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Edge Computing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-sm mb-6 tracking-widest">PARTNERSHIP</h4>
            <ul className="space-y-4 text-xs text-muted font-medium uppercase tracking-widest">
              <li className="hover:text-accent cursor-pointer transition-colors">Maynooth University</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Research Projects</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Student Careers</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Ethics Framework</li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-sm mb-6 tracking-widest">CONTACT</h4>
            <ul className="space-y-4 text-xs text-muted font-medium">
              <li className="flex items-center gap-2"><Mail size={16} className="text-accent" /> contact@rolirobotics.ie</li>
              <li className="flex items-center gap-2"><Hexagon size={16} className="text-accent" /> Maynooth, Co. Kildare, Ireland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted font-bold uppercase tracking-widest">
          <div>© 2025 RoliRobotics Limited. All Rights Reserved. Registered in Ireland.</div>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Ethics Statement</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>
        
        <div className="mt-8 text-center text-[10px] text-muted/40 uppercase tracking-[0.3em]">
          Research conducted at Maynooth University, Co. Kildare, Ireland
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-background text-white selection:bg-accent selection:text-background min-h-screen flex flex-col">
      <LoadingScreen />
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <FloatingDemoCTA />
      <MobileBottomNav />
      <Footer />
      <CookieBanner />
    </div>
  );
};
