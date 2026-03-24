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
            Roland Begus's autonomous security robots patrol, detect, and respond — protecting humans by removing them from danger. Developed in partnership with Maynooth University's world-class robotics research teams.
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
              <span className="text-accent">🤖</span> AI NAVIGATION
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
          {/* Robot SVG with CSS Animations */}
          <div className="relative w-full max-w-md group">
            <svg viewBox="0 0 400 600" className="w-full h-auto drop-shadow-[0_0_50px_rgba(10,132,255,0.2)]">
              <defs>
                <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#111318" />
                  <stop offset="100%" stopColor="#080A0F" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Robot Body */}
              <motion.path 
                d="M150,100 L250,100 L270,150 L270,450 L250,550 L150,550 L130,450 L130,150 Z" 
                fill="url(#robotGrad)" 
                stroke="#0A84FF" 
                strokeWidth="1.5"
                animate={{ strokeOpacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Internal Circuitry Pattern */}
              <path d="M160,150 L240,150 M160,200 L240,200 M200,150 L200,500" stroke="#0A84FF" strokeWidth="0.5" strokeOpacity="0.1" />

              {/* Head Section */}
              <path d="M170,80 L230,80 L240,120 L160,120 Z" fill="#111318" stroke="#0A84FF" strokeWidth="1.5" />
              
              {/* Pulsing Sensor Ring */}
              <circle cx="200" cy="100" r="45" fill="none" stroke="#00FFD1" strokeWidth="0.5" className="animate-ping opacity-20" />
              <circle cx="200" cy="100" r="40" fill="none" stroke="#00FFD1" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
              
              {/* Glowing Eyes */}
              <circle cx="185" cy="100" r="3" fill="#00FFD1" filter="url(#glow)" className="animate-pulse" />
              <circle cx="215" cy="100" r="3" fill="#00FFD1" filter="url(#glow)" className="animate-pulse" />
              
              {/* Scanning Laser */}
              <motion.rect 
                x="130" 
                width="140" 
                height="2" 
                fill="#00FFD1" 
                filter="url(#glow)"
                animate={{ y: [150, 450, 150] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
 
            {/* HUD Overlay Elements */}
            <div className="absolute top-1/4 -right-4 md:-right-12 bg-surface/80 backdrop-blur-md border border-primary/30 p-4 font-mono text-[10px] rounded-lg shadow-2xl border-l-4 border-l-accent">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent uppercase font-bold">SYSTEM: ACTIVE</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between gap-4">
                  <span className="text-muted">THREAT:</span>
                  <span className="text-white">NONE</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-muted">BATTERY:</span>
                  <span className="text-accent">94%</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-muted">SIGNAL:</span>
                  <span className="text-white">OPTIMAL</span>
                </div>
              </div>
              <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '94%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-accent"
                ></motion.div>
              </div>
            </div>

            <div className="absolute bottom-1/4 -left-4 md:-left-12 bg-surface/80 backdrop-blur-md border border-primary/30 p-4 font-mono text-[10px] rounded-lg shadow-2xl border-r-4 border-r-primary">
              <div className="text-accent mb-2 font-bold tracking-tighter">ENVIRONMENT SCAN</div>
              <div className="grid grid-cols-4 gap-1">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
                    className="w-full h-4 bg-primary/20"
                  ></motion.div>
                ))}
              </div>
            </div>
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
        <StatCounter icon={Radar} end={360} suffix="°" label="Perimeter Awareness" />
        <StatCounter icon={Moon} end={24} suffix="/7" label="Patrol Coverage" />
        <StatCounter icon={Zap} end={0.3} prefix="<" suffix="s" label="Detection Response" />
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      
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
                body: "Security guards face real physical threats — confrontations, violence, and hostile situations that put lives at risk every day. Roland Begus's autonomous robots stand between threats and humans, absorbing risk so your people never have to. When a situation escalates, the robot responds — not a person."
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
              "Roland Begus's mission is simple: technology should protect people, not endanger them. Every robot deployed is a human security guard kept safe."
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-primary/20 to-background border-y border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">READY TO SECURE THE FUTURE?</h2>
          <p className="text-muted text-xl mb-12 leading-relaxed">
            Book a private demonstration of the Roland Begus autonomous security platform. We'll show you the robot, walk through deployment options, and answer every question.
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
