import { motion } from 'motion/react';
import { 
  Heart, 
  Shield, 
  Users, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Globe
} from 'lucide-react';

const ImpactCard = ({ icon: Icon, title, description, stats }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 bg-surface border border-white/5 rounded-[40px] hover:border-primary/30 transition-all group"
  >
    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
      <Icon className="text-primary" size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4 font-orbitron">{title}</h3>
    <p className="text-muted leading-relaxed mb-8">{description}</p>
    <div className="pt-8 border-t border-white/5 flex justify-between items-center">
      <div className="text-3xl font-black text-white font-orbitron">{stats}</div>
      <div className="text-[10px] font-bold text-muted uppercase tracking-widest">Impact Metric</div>
    </div>
  </motion.div>
);

export const Impact = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section - Editorial Style */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <div className="text-primary font-orbitron text-xs font-bold tracking-[0.4em] mb-8">
              THE HUMAN MISSION
            </div>
            <h1 className="text-6xl md:text-[10vw] font-black leading-[0.85] mb-12 tracking-tighter uppercase">
              PROTECTING <br/>
              <span className="text-accent text-glow">HUMANITY</span> <br/>
              FROM DANGER.
            </h1>
            <p className="text-muted text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
              Roland Begus's autonomous security robots stand between threats and humans, absorbing risk so your people never have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ImpactCard 
            icon={Heart}
            title="Life Preservation"
            description="Our primary goal is to reduce human casualties in security-related incidents. Every robot deployed is a human guard kept safe."
            stats="0 LIVES LOST"
          />
          <ImpactCard 
            icon={Shield}
            title="Risk Reduction"
            description="By automating high-risk patrols, we reduce the physical and psychological burden on human security personnel."
            stats="95% LESS RISK"
          />
          <ImpactCard 
            icon={Users}
            title="Community Safety"
            description="AEGIS robots provide a visible, non-lethal deterrent that makes public spaces, campuses, and events safer for everyone."
            stats="10M+ PROTECTED"
          />
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-24 bg-secondary/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video bg-surface rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/campus/1200/800" 
                  alt="University Campus Security" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-10 left-10 p-6 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-2xl">
                  <div className="text-white font-bold text-xl mb-2">MAYNOOTH CAMPUS</div>
                  <div className="text-primary text-xs font-bold uppercase tracking-widest">Deployment: Active</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-8 font-orbitron">REAL-WORLD <br/><span className="text-primary">IMPACT</span></h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                At Maynooth University, our robots have successfully patrolled the campus for over 18 months, providing an unbroken perimeter of awareness and reducing security incidents by 40%.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  "Reduced response time to incidents by 60%",
                  "Zero physical confrontations involving human guards",
                  "100% coverage of blind spots in parking facilities",
                  "Enhanced student and staff sense of safety"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-primary" size={20} />
                    {item}
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 text-primary font-orbitron font-bold text-xs tracking-widest hover:gap-4 transition-all uppercase">
                Read the full case study <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Mission */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 text-primary">
            <Globe size={40} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-8">A GLOBAL MISSION FOR <br/><span className="text-primary">ETHICAL SECURITY</span></h2>
          <p className="text-muted text-lg mb-12 leading-relaxed">
            We believe that technology should be a force for good. Our robots are designed with strict ethical guidelines to ensure privacy, transparency, and human-centric security.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Privacy First", desc: "Real-time face blurring and data encryption." },
              { title: "Non-Lethal", desc: "No weapons. Only deterrents and communication." },
              { title: "Audit Ready", desc: "Complete transparency in AI decision-making." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-surface/50 rounded-3xl border border-white/5">
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
