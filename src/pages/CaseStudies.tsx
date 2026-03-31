import { motion } from 'motion/react';
import { 
  Building2, 
  Warehouse, 
  GraduationCap, 
  Calendar, 
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  MapPin
} from 'lucide-react';

const CaseStudyRow = ({ title, location, type, impact, icon: Icon }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="data-row hover:bg-white/5 transition-all group cursor-pointer border-b border-white/5 p-8 grid md:grid-cols-[1fr_1fr_1fr_1fr_auto] items-center gap-8"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-white font-bold text-lg">{title}</div>
        <div className="text-muted text-[10px] uppercase tracking-widest font-mono">{type}</div>
      </div>
    </div>
    <div className="flex items-center gap-2 text-muted text-sm font-mono">
      <MapPin size={14} className="text-accent" />
      {location}
    </div>
    <div className="flex items-center gap-2 text-accent text-sm font-mono">
      <TrendingUp size={14} />
      {impact}
    </div>
    <div className="hidden md:block">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-1 h-3 rounded-full ${i < 4 ? 'bg-primary' : 'bg-white/10'}`}></div>
        ))}
      </div>
      <div className="text-[10px] text-muted uppercase tracking-widest mt-1">Success Rate: 98%</div>
    </div>
    <div className="text-white/20 group-hover:text-primary transition-colors">
      <ArrowRight size={24} />
    </div>
  </motion.div>
);

export const CaseStudies = () => {
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
              REAL-WORLD DEPLOYMENTS
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              PROVEN <span className="text-primary">RESULTS</span> IN THE FIELD.
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              From university campuses to industrial warehouses, RoliRobotics Limited's autonomous security robots are delivering measurable impact every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto border border-white/10 bg-surface/50 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-white/10 bg-white/5 grid md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-8 text-[10px] font-bold text-muted uppercase tracking-widest font-mono">
            <div>Project / Client</div>
            <div>Location</div>
            <div>Key Impact</div>
            <div className="hidden md:block">Success Metric</div>
            <div></div>
          </div>
          <CaseStudyRow 
            icon={GraduationCap}
            title="Maynooth University"
            location="Kildare, Ireland"
            type="Campus Security"
            impact="40% Incident Reduction"
          />
          <CaseStudyRow 
            icon={Warehouse}
            title="Global Logistics Hub"
            location="Dublin Port, Ireland"
            type="Industrial Security"
            impact="60% Cost Reduction"
          />
          <CaseStudyRow 
            icon={Building2}
            title="Tech Campus HQ"
            location="Silicon Docks, Dublin"
            type="Corporate Security"
            impact="24/7 Unbroken Patrol"
          />
          <CaseStudyRow 
            icon={Calendar}
            title="European Tech Summit"
            location="Lisbon, Portugal"
            type="Event Security"
            impact="100% Perimeter Integrity"
          />
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-primary font-orbitron text-xs font-bold tracking-[0.4em] mb-6">FEATURED DEPLOYMENT</div>
              <h2 className="text-4xl font-black mb-8 font-orbitron">DUBLIN PORT <br/><span className="text-primary">LOGISTICS HUB</span></h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                A 500,000 sq. ft. logistics facility required 24/7 security for high-value cargo. Human patrols were inconsistent and expensive.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-surface border border-white/5 rounded-3xl">
                  <div className="text-3xl font-black text-primary mb-2 font-orbitron">60%</div>
                  <div className="text-[10px] text-muted uppercase tracking-widest font-bold">Operational Cost Savings</div>
                </div>
                <div className="p-6 bg-surface border border-white/5 rounded-3xl">
                  <div className="text-3xl font-black text-accent mb-2 font-orbitron">100%</div>
                  <div className="text-[10px] text-muted uppercase tracking-widest font-bold">Patrol Compliance</div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary font-orbitron font-bold text-xs tracking-widest hover:gap-4 transition-all uppercase">
                Download full case study <ArrowRight size={16} />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-surface rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/port/1200/800" 
                  alt="Logistics Hub Security" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl flex justify-between items-center">
                  <div>
                    <div className="text-white font-bold text-lg">Industrial Patrol</div>
                    <div className="text-muted text-[10px] uppercase tracking-widest font-mono">Unit: ROLI-QUAD-04</div>
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Zap size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8">HAVE A SPECIFIC USE CASE?</h2>
          <p className="text-muted text-lg mb-12">
            Our team can help you design a custom autonomous security strategy tailored to your facility's unique requirements.
          </p>
          <button className="px-10 py-5 bg-accent text-background font-orbitron font-black text-sm tracking-widest hover:brightness-110 transition-all shadow-[0_0_40px_rgba(0,255,209,0.3)]">
            REQUEST A SECURITY AUDIT
          </button>
        </div>
      </section>
    </div>
  );
};
