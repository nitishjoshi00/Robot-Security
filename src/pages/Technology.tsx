import { motion } from 'motion/react';
import { 
  Cpu, 
  Eye, 
  Zap, 
  ShieldCheck, 
  Network, 
  Database,
  ArrowRight,
  Layers,
  Activity
} from 'lucide-react';

const TechCard = ({ icon: Icon, title, description, specs }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-surface border border-white/5 rounded-3xl hover:border-primary/30 transition-all group"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-accent" size={24} />
    </div>
    <h3 className="text-2xl font-bold mb-4 font-orbitron tracking-tight">{title}</h3>
    <p className="text-muted mb-6 leading-relaxed">{description}</p>
    <div className="space-y-2">
      {specs.map((spec: string, i: number) => (
        <div key={i} className="flex items-center gap-2 text-[10px] font-mono text-accent/70 uppercase tracking-widest">
          <div className="w-1 h-1 bg-accent rounded-full"></div>
          {spec}
        </div>
      ))}
    </div>
  </motion.div>
);

export const Technology = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-accent font-orbitron text-xs font-bold tracking-[0.4em] mb-6">
              THE ROLIROBOTICS CORE STACK
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              AUTONOMOUS <span className="text-primary">INTELLIGENCE</span> AT THE EDGE.
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Our robots don't just follow paths — they understand environments. Built on a foundation of sensor fusion, real-time SLAM, and ethical AI decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechCard 
            icon={Eye}
            title="Sensor Fusion"
            description="360° situational awareness combining LiDAR, depth cameras, and ultrasonic sensors for millimetre-perfect obstacle avoidance."
            specs={["Dual Ouster OS1 LiDAR", "Intel RealSense D455", "360° Ultrasonic Array"]}
          />
          <TechCard 
            icon={Cpu}
            title="Edge Computing"
            description="On-board processing handles all navigation and threat detection locally. No dependency on cloud latency for critical safety."
            specs={["NVIDIA Jetson Orin AGX", "64GB LPDDR5 RAM", "275 TOPS AI Performance"]}
          />
          <TechCard 
            icon={Network}
            title="SLAM Navigation"
            description="Simultaneous Localization and Mapping allows the robot to build and update its own maps in dynamic, changing environments."
            specs={["Real-time 3D Mapping", "Dynamic Path Planning", "GPS-Denied Navigation"]}
          />
          <TechCard 
            icon={ShieldCheck}
            title="Ethical AI"
            description="Our 'Human-First' protocol ensures the robot always prioritizes human safety and de-escalation over physical intervention."
            specs={["Non-Lethal Response", "Privacy-Preserving Vision", "Audit-Ready Decision Logs"]}
          />
          <TechCard 
            icon={Zap}
            title="Power Systems"
            description="High-density battery technology with autonomous docking. The robot monitors its own health and returns to base when needed."
            specs={["12-Hour Active Patrol", "Auto-Docking System", "Fast-Charge Ready"]}
          />
          <TechCard 
            icon={Layers}
            title="Modular Chassis"
            description="Industrial-grade hardware designed for longevity and easy maintenance. All components are field-replaceable."
            specs={["IP65 Weather Rating", "All-Terrain Drive", "Payload Expansion Bay"]}
          />
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 bg-secondary/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 font-orbitron">THE MAYNOOTH <br/><span className="text-primary">RESEARCH PARTNERSHIP</span></h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              The RoliRobotics platform is the result of a deep collaboration with Maynooth University's Department of Computer Science and Electronic Engineering. 
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Advanced Computer Vision",
                  desc: "Research into low-light object detection and behavioral analysis."
                },
                {
                  title: "Swarm Intelligence",
                  desc: "Coordinated multi-robot patrol strategies for large-scale facilities."
                },
                {
                  title: "Human-Robot Interaction",
                  desc: "Designing intuitive ways for security teams to manage autonomous fleets."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-accent"><Activity size={20} /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-grid opacity-20 absolute inset-0 rounded-3xl"></div>
            <div className="relative z-10 p-8 border border-primary/20 bg-surface/50 backdrop-blur-xl rounded-3xl shadow-2xl">
              <div className="font-mono text-[10px] text-accent mb-4 uppercase tracking-widest">Research Data Feed // MU-ROBOTICS-LAB</div>
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: Math.random() * 100 + '%' }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-primary"
                      ></motion.div>
                    </div>
                    <div className="flex-1 font-mono text-[10px] text-muted">
                      {["LOCALIZATION_ERROR", "SENSOR_LATENCY", "PATH_EFFICIENCY", "THREAT_CONFIDENCE", "BATTERY_DISCHARGE", "THERMAL_STATUS"][i]}
                    </div>
                    <div className="font-mono text-[10px] text-white">
                      {(Math.random() * 100).toFixed(2)}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                <div className="text-[10px] font-bold text-muted uppercase tracking-tighter">Status: Peer Reviewed</div>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8">WANT THE FULL TECHNICAL SPECIFICATION?</h2>
          <p className="text-muted text-lg mb-12">
            Download our detailed whitepaper covering the RoliRobotics platform architecture, security protocols, and MU research findings.
          </p>
          <button className="px-10 py-5 bg-primary text-white font-orbitron font-black text-sm tracking-widest hover:brightness-110 transition-all shadow-[0_0_40px_rgba(10,132,255,0.3)]">
            DOWNLOAD WHITEPAPER (PDF)
          </button>
        </div>
      </section>
    </div>
  );
};
