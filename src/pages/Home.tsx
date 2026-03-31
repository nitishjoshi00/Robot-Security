import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Radar, 
  ArrowRight, 
  Moon, 
  Map, 
  Cpu, 
  Eye, 
  Lock, 
  CheckCircle2, 
  Play, 
  ChevronRight, 
  Users, 
  Globe, 
  Award,
  Camera,
  Target,
  Maximize,
  Video,
  Layers,
  Activity,
  Box,
  TrendingUp,
  ChevronDown
} from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Grid with Parallax */}
      <motion.div 
        style={{ y: y1, perspective: '1000px', transform: 'rotateX(20deg) translateY(-10%)' }}
        className="absolute inset-0 bg-grid opacity-20 pointer-events-none" 
      ></motion.div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, Math.random() * 100 + '%'],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
        >
          <div className="text-accent font-orbitron text-[10px] md:text-xs font-bold tracking-[0.4em] mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent"></span>
            NEXT-GENERATION PHYSICAL SECURITY
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.85] mb-8 tracking-tighter">
            SECURITY THAT<br />
            <span className="text-primary text-glow">NEVER SLEEPS.</span><br />
            NEVER FALTERS.
          </h1>
          <p className="text-muted text-base md:text-lg max-w-xl mb-10 leading-relaxed font-medium">
            A four-legged autonomous patrol robot — built low, built fast, built to cover ground that traditional security cannot. Developed in partnership with Maynooth University's world-class robotics research teams.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/demo" className="px-8 py-4 bg-accent text-background font-orbitron font-extrabold text-[10px] tracking-[0.2em] hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(0,255,209,0.3)] group">
              WATCH THE ROBOT IN ACTION <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/technology" className="px-8 py-4 border border-white/20 text-white font-orbitron font-extrabold text-[10px] tracking-[0.2em] hover:bg-white/5 transition-all">
              READ THE RESEARCH
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 opacity-60">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
              <span className="text-accent">🏛️</span> MAYNOOTH PARTNER
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
              <span className="text-accent">🐾</span> QUADRUPED — RUNS, JUMPS, CLIMBS
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
              <span className="text-accent">🛡️</span> ETHICAL AI
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: y2 }}
          className="relative flex justify-center"
        >
          {/* Robot Dog SVG */}
          <div className="relative w-full max-w-md group flex items-center justify-center">
            <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_0_50px_rgba(0,255,209,0.2)] animate-[float_4s_ease-in-out_infinite]">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <style>{`
                  @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                `}</style>
              </defs>
              
              {/* Body */}
              <rect x="80" y="80" width="140" height="60" rx="10" 
                    fill="#0D1117" stroke="#00FFD1" strokeWidth="1.5" filter="url(#glow)"/>
              
              {/* Neck */}
              <rect x="175" y="60" width="20" height="28" rx="4"
                    fill="#0D1117" stroke="#00FFD1" strokeWidth="1.5"/>
              
              {/* Head with camera */}
              <rect x="165" y="38" width="42" height="28" rx="6"
                    fill="#0D1117" stroke="#00FFD1" strokeWidth="1.5" filter="url(#glow)"/>
              
              {/* Camera lens on head */}
              <circle cx="200" cy="52" r="7" fill="#080C14" stroke="#00FFD1" strokeWidth="1.5"/>
              <circle cx="200" cy="52" r="3" fill="#00FFD1" opacity="0.8"/>
              
              {/* Pulsing camera ring */}
              <circle cx="200" cy="52" r="10" fill="none" stroke="#00FFD1" strokeWidth="1"
                      opacity="0.6">
                <animate attributeName="r" values="10;16;10" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
              </circle>

              {/* Head rotation indicator arc */}
              <path d="M 172 38 Q 186 28 200 36" fill="none" stroke="#00FFD1" 
                    strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
              
              {/* LIDAR on top of body */}
              <rect x="130" y="72" width="40" height="10" rx="3"
                    fill="#0D1117" stroke="#7C3AED" strokeWidth="1.5"/>
              
              {/* Front Left Leg (upper) */}
              <line x1="105" y1="138" x2="90" y2="165" 
                    stroke="#00FFD1" strokeWidth="2" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate"
                  values="0 105 138; 12 105 138; 0 105 138; -8 105 138; 0 105 138"
                  dur="1.2s" repeatCount="indefinite"/>
              </line>
              {/* Front Left Leg (lower) */}
              <line x1="90" y1="165" x2="82" y2="188" 
                    stroke="#00FFD1" strokeWidth="1.5" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate"
                  values="0 90 165; -10 90 165; 0 90 165; 8 90 165; 0 90 165"
                  dur="1.2s" repeatCount="indefinite"/>
              </line>
              
              {/* Front Right Leg (upper) */}
              <line x1="145" y1="138" x2="130" y2="165" 
                    stroke="#00FFD1" strokeWidth="2" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate"
                  values="0 145 138; -8 145 138; 0 145 138; 12 145 138; 0 145 138"
                  dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
              </line>
              {/* Front Right Leg (lower) */}
              <line x1="130" y1="165" x2="122" y2="188" 
                    stroke="#00FFD1" strokeWidth="1.5" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate"
                  values="0 130 165; 8 130 165; 0 130 165; -10 130 165; 0 130 165"
                  dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
              </line>
              
              {/* Rear Left Leg (upper) */}
              <line x1="175" y1="138" x2="190" y2="165" 
                    stroke="#00FFD1" strokeWidth="2" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate"
                  values="0 175 138; -12 175 138; 0 175 138; 8 175 138; 0 175 138"
                  dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
              </line>
              {/* Rear Left Leg (lower) */}
              <line x1="190" y1="165" x2="198" y2="188" 
                    stroke="#00FFD1" strokeWidth="1.5" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate"
                  values="0 190 165; 10 190 165; 0 190 165; -8 190 165; 0 190 165"
                  dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
              </line>
              
              {/* Rear Right Leg (upper) */}
              <line x1="215" y1="138" x2="228" y2="165" 
                    stroke="#00FFD1" strokeWidth="2" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate"
                  values="0 215 138; 8 215 138; 0 215 138; -12 215 138; 0 215 138"
                  dur="1.2s" repeatCount="indefinite"/>
              </line>
              {/* Rear Right Leg (lower) */}
              <line x1="228" y1="165" x2="234" y2="188" 
                    stroke="#00FFD1" strokeWidth="1.5" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate"
                  values="0 228 165; -8 228 165; 0 228 165; 10 228 165; 0 228 165"
                  dur="1.2s" repeatCount="indefinite"/>
              </line>

              {/* Ground shadow */}
              <ellipse cx="158" cy="198" rx="70" ry="6" 
                       fill="#00FFD1" opacity="0.08"/>
              
              {/* Camera FOV sweep line */}
              <line x1="200" y1="52" x2="240" y2="30" 
                    stroke="#00FFD1" strokeWidth="1" strokeDasharray="4,3" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate"
                  values="0 200 52; 45 200 52; 0 200 52; -45 200 52; 0 200 52"
                  dur="4s" repeatCount="indefinite" calcMode="spline"
                  keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"/>
              </line>

              {/* Status HUD */}
              <rect x="10" y="10" width="170" height="62" rx="6" 
                    fill="rgba(13,17,23,0.9)" stroke="rgba(0,255,209,0.3)" strokeWidth="1"/>
              <text x="18" y="26" fontFamily="JetBrains Mono, monospace" 
                    fontSize="9" fill="#00FFD1">STATUS: PATROLLING</text>
              <text x="18" y="39" fontFamily="JetBrains Mono, monospace" 
                    fontSize="9" fill="#94A3B8">SPEED: 1.2 m/s</text>
              <text x="18" y="52" fontFamily="JetBrains Mono, monospace" 
                    fontSize="9" fill="#10B981">CAM: TRACKING ●</text>
              <text x="18" y="65" fontFamily="JetBrains Mono, monospace" 
                    fontSize="9" fill="#94A3B8">THREAT: NOMINAL</text>
            </svg>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const StatCounter = ({ end, label, suffix = "", prefix = "", icon: Icon }: any) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHasStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <div ref={ref} className="text-center p-8 border-glow bg-surface/30 rounded-2xl">
      <div className="flex justify-center mb-4">
        <Icon className="text-accent" size={32} />
      </div>
      <div className="font-mono text-4xl font-bold mb-2 text-primary">
        {prefix}{count}{suffix}
      </div>
      <div className="text-muted text-sm font-medium uppercase tracking-widest">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCounter icon={Shield} end={0} label="Humans Endangered" />
        <StatCounter icon={Zap} end={3.5} suffix=" m/s" label="Maximum Sprint Speed" />
        <StatCounter icon={Moon} end={90} prefix="±" suffix="°" label="Independent Camera Rotation" />
        <StatCounter icon={Zap} end={0.3} prefix="<" suffix="s" label="Camera Lock-On Time" />
      </div>
    </section>
  );
};

const MovingCamera = () => {
  return (
    <section id="moving-camera" className="py-24 bg-[#0A0A14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Column: SVG Demo */}
          <div className="flex-1 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Scanning background effect */}
              <div className="absolute inset-0 bg-accent/5 rounded-full animate-pulse"></div>
              
              <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                {/* Base platform */}
                <rect x="150" y="300" width="100" height="40" rx="4" fill="#1A1A2E" stroke="#00FFD1" strokeWidth="2"/>
                
                {/* Rotating neck/base */}
                <motion.g
                  animate={{ rotate: [0, 45, 0, -45, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ originX: "200px", originY: "300px" }}
                >
                  <rect x="185" y="240" width="30" height="60" fill="#1A1A2E" stroke="#00FFD1" strokeWidth="2"/>
                  
                  {/* Camera Head */}
                  <g transform="translate(160, 180)">
                    <rect width="80" height="60" rx="8" fill="#0D1117" stroke="#00FFD1" strokeWidth="2"/>
                    {/* Lens */}
                    <circle cx="40" cy="30" r="15" fill="#080C14" stroke="#00FFD1" strokeWidth="2"/>
                    <circle cx="40" cy="30" r="6" fill="#00FFD1" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Scanning Beam */}
                    <path d="M 40 30 L -100 -50 L -100 110 Z" fill="url(#beamGrad)" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
                    </path>
                  </g>
                </motion.g>
                
                <defs>
                  <linearGradient id="beamGrad" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#00FFD1" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Floating UI tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-0 bg-accent/10 backdrop-blur-md border border-accent/30 p-3 rounded-lg font-mono text-[10px]"
              >
                <div className="text-accent font-bold mb-1">TRACKING ACTIVE</div>
                <div className="text-white/60">LOCK: TARGET_042</div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              MOVING CAMERA <span className="text-accent">TRACKING SYSTEM</span>
            </h2>
            <p className="text-muted mb-10 leading-relaxed">
              Our proprietary independent camera mount allows the robot to maintain a fixed visual lock on threats while the body navigates complex terrain.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Maximize, title: "±90° Rotation", desc: "Full lateral coverage without turning the robot body." },
                { icon: Target, title: "Active Lock-On", desc: "AI-driven focus that stays on target during high-speed movement." },
                { icon: Video, title: "Stable Imaging", desc: "Gyro-stabilized mount for crystal clear 4K security footage." },
                { icon: Zap, title: "0.3s Response", desc: "Instantaneous head-tracking triggered by perimeter sensors." }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/20 transition-colors">
                  <item.icon className="text-accent mb-3" size={20} />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductEcosystem = () => {
  const products = [
    {
      tag: "CORE SYSTEM",
      title: "Autonomous Security Patrol",
      subtitle: "Quadruped Robot Dog",
      features: ["SLAM Navigation", "Threat Detection", "24/7 Patrol"],
      color: "from-accent/20 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-accent/40 fill-accent/40" xmlns="http://www.w3.org/2000/svg">
          <path d="M19,15 L17,15 L16,12 L8,12 L7,15 L5,15 L6,10 L8,8 L16,8 L18,10 L19,15 Z M12,7 C13.1,7 14,6.1 14,5 C14,3.9 13.1,3 12,3 C10.9,3 10,3.9 10,5 C10,6.1 10.9,7 12,7 Z" />
        </svg>
      )
    },
    {
      tag: "ATTACHMENT",
      title: "Neural-Link Arm System",
      subtitle: "Precision Manipulation",
      features: ["6-DOF Movement", "Haptic Feedback", "Object Handling"],
      color: "from-purple-500/20 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-purple-500/40 fill-purple-500/40" xmlns="http://www.w3.org/2000/svg">
          <path d="M2,12 L6,12 L8,4 L16,4 L18,12 L22,12 L22,14 L18,14 L16,20 L8,20 L6,14 L2,14 Z" />
        </svg>
      )
    },
    {
      tag: "MODULE",
      title: "Gait-Prediction Modules",
      subtitle: "Bipedal Stability",
      features: ["Balance Control", "Terrain Adaptation", "High Speed"],
      color: "from-blue-500/20 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-500/40 fill-blue-500/40" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,2 L14,2 L14,10 L18,22 L16,22 L12,12 L8,22 L6,22 L10,10 Z" />
        </svg>
      )
    },
    {
      tag: "WEARABLE",
      title: "Integrated Exoskeleton",
      subtitle: "Human Augmentation",
      features: ["Load Bearing", "Impact Protection", "Power Assist"],
      color: "from-orange-500/20 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-orange-500/40 fill-orange-500/40" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,2 L16,4 L16,20 L12,22 L8,20 L8,4 Z M12,6 L14,7 L14,19 L12,20 L10,19 L10,7 Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">
            PRODUCT <span className="text-accent">ECOSYSTEM</span>
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-3xl bg-secondary/30 border border-white/5 p-8 flex flex-col md:flex-row gap-8"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Product Visual Placeholder */}
              <div className="w-full md:w-48 h-48 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center relative z-10 shrink-0">
                {product.icon}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-32 h-32 rounded-full border border-accent/20 animate-ping"></div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-widest text-accent mb-2">{product.tag}</span>
                <h3 className="text-2xl font-bold mb-1">{product.title}</h3>
                <p className="text-muted text-sm mb-4">{product.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((f, j) => (
                    <span key={j} className="text-[9px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted text-sm max-w-2xl mx-auto italic">
            "RoliRobotics Limited is not just building robots; we are building a modular ecosystem of autonomous solutions designed to integrate seamlessly into existing security infrastructures."
          </p>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <MovingCamera />
      
      <section className="py-24 px-6 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <div className="text-accent font-orbitron text-xs font-bold tracking-widest mb-4 uppercase">CORE TECHNOLOGY</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">BUILT TO <span className="text-primary">ENDURE.</span></h2>
            </div>
            <p className="text-muted max-w-md text-sm leading-relaxed">
              The RoliRobotics platform is built on the AEGIS architecture — a modular, high-performance robotics framework designed for extreme reliability in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-secondary/30 border border-white/5 hover:border-accent/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Quadrupedal Locomotion</h3>
              <p className="text-muted text-sm leading-relaxed">
                Advanced four-legged gait control allows for movement across stairs, rubble, and steep inclines where wheels and tracks fail.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-white/5 hover:border-accent/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">360° Threat Awareness</h3>
              <p className="text-muted text-sm leading-relaxed">
                Multi-spectral sensors and LIDAR provide a complete, unbroken view of the environment, even in total darkness or heavy fog.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-white/5 hover:border-accent/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Ethical AI Guardrails</h3>
              <p className="text-muted text-sm leading-relaxed">
                Our AI is hard-coded with ethical constraints. The robot identifies threats and alerts humans — it never takes offensive action autonomously.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductEcosystem />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">WHY HUMAN SECURITY HAS LIMITS</h2>
            <p className="text-muted text-xl">Traditional security puts people in danger. We change that.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Moon className="text-accent" />,
                title: "Human Fatigue",
                headline: "Guards get tired. Robots don't.",
                body: "Human security personnel working night shifts suffer from attention lapses, fatigue, and reduced reaction time after hours on duty. Studies show a 40% drop in alertness after 6 continuous hours of patrol. Our robots maintain 100% operational efficiency from hour 1 to hour 10,000."
              },
              {
                icon: <Shield className="text-accent" />,
                title: "Physical Risk to Personnel",
                headline: "Stop putting humans in danger.",
                body: "Security guards face real physical threats — confrontations, violence, and hostile situations that put lives at risk every day. RoliRobotics' autonomous robots stand between threats and humans, absorbing risk so your people never have to. When a situation escalates, the robot responds — not a person."
              },
              {
                icon: <Map className="text-accent" />,
                title: "Coverage Gaps",
                headline: "No blind spots. No gaps.",
                body: "A single human guard can only be in one place at a time. Even teams of guards leave coverage gaps, especially in large warehouses, campuses, or event venues. Our robots operate in coordinated fleets — sharing sensor data in real time, creating an unbroken perimeter of awareness."
              },
              {
                icon: <TrendingUp className="text-accent" />,
                title: "Cost Escalation",
                headline: "Scalable security without staffing costs.",
                body: "Hiring, training, managing, and retaining a qualified security workforce is expensive and operationally complex. Autonomous robots scale instantly — add a unit to expand coverage, redeploy remotely in minutes, and reduce the total cost of security operations by up to 60% over 3 years."
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-surface border border-white/5 rounded-3xl hover:border-primary/30 transition-all duration-500"
              >
                <div className="mb-6">{p.icon}</div>
                <div className="text-accent font-orbitron text-xs font-bold mb-2 uppercase tracking-widest">{p.title}</div>
                <h3 className="text-2xl font-bold mb-4">{p.headline}</h3>
                <p className="text-muted leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-12 bg-primary/10 border border-primary/20 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <p className="text-2xl font-orbitron font-bold text-white max-w-4xl mx-auto leading-tight">
              "Our mission is simple: technology should protect people, not endanger them. Every robot deployed is a human security guard kept safe." — Roland Begus, Founder
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-primary/20 to-background border-y border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">READY TO SECURE THE FUTURE?</h2>
          <p className="text-muted text-xl mb-12 leading-relaxed">
            Book a private demonstration of the RoliRobotics Limited autonomous security platform. We'll show you the robot, walk through deployment options, and answer every question.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/demo" className="px-10 py-5 bg-accent text-background font-orbitron font-black text-sm tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,255,209,0.4)]">
              BOOK A PRIVATE DEMO
            </Link>
            <Link to="/technology" className="px-10 py-5 border border-white/20 text-white font-orbitron font-black text-sm tracking-widest hover:bg-white/5 transition-all">
              DOWNLOAD WHITEPAPER
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
