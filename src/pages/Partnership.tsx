import { motion } from 'motion/react';
import { 
  GraduationCap, 
  FlaskConical, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Microscope
} from 'lucide-react';

const ResearchCard = ({ icon: Icon, title, description }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 bg-surface border border-white/5 rounded-[40px] hover:border-accent/30 transition-all group"
  >
    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
      <Icon className="text-accent" size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4 font-orbitron">{title}</h3>
    <p className="text-muted leading-relaxed">{description}</p>
  </motion.div>
);

export const Partnership = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent font-orbitron text-xs font-bold tracking-[0.4em] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent"></span>
              ACADEMIC EXCELLENCE
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              WHERE <span className="text-primary">RESEARCH</span> MEETS REALITY.
            </h1>
            <p className="text-muted text-xl leading-relaxed mb-10">
              Founded by Roland Begus, RoliRobotics Limited's autonomous security platform is built on years of rigorous research and development in partnership with Maynooth University, Ireland.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div className="text-white font-bold">Maynooth University</div>
                  <div className="text-muted text-xs uppercase tracking-widest">Primary Research Partner</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="text-white font-bold">Global Impact</div>
                  <div className="text-muted text-xs uppercase tracking-widest">European Research Hub</div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] bg-surface rounded-[60px] overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://picsum.photos/seed/roland-quad/1200/800" 
                alt="Roland Begus with RoliRobotics Quadruped" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 p-8 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-3xl max-w-xs">
                <div className="text-accent font-orbitron text-[10px] font-bold mb-2 tracking-widest">MU ROBOTICS LAB</div>
                <p className="text-white text-sm font-medium leading-relaxed">
                  "The collaboration with RoliRobotics Limited allows our students to apply theoretical AI to critical real-world security challenges."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 font-orbitron">THE RESEARCH PILLARS</h2>
            <p className="text-muted text-lg">Four core areas where MU research drives RoliRobotics innovation.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ResearchCard 
              icon={FlaskConical}
              title="Autonomous Navigation"
              description="Developing next-generation SLAM algorithms that allow robots to navigate complex, changing environments without GPS reliance."
            />
            <ResearchCard 
              icon={Users}
              title="Human-Robot Interaction"
              description="Studying how people perceive and interact with security robots to ensure they feel safe and comfortable in shared spaces."
            />
            <ResearchCard 
              icon={Lightbulb}
              title="Edge AI Optimization"
              description="Optimizing deep learning models to run efficiently on low-power edge hardware, ensuring real-time response times."
            />
            <ResearchCard 
              icon={Microscope}
              title="Sensor Fusion Research"
              description="Integrating data from diverse sensors — LiDAR, thermal, and acoustic — to create a complete picture of the environment."
            />
          </div>
        </div>
      </section>

      {/* Student Impact */}
      <section className="py-24 bg-accent/5 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface rounded-3xl overflow-hidden border border-white/5">
                  <img src="https://picsum.photos/seed/student1/400/400" alt="Student Research" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-surface rounded-3xl overflow-hidden border border-white/5 mt-8">
                  <img src="https://picsum.photos/seed/student2/400/400" alt="Robot Testing" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black mb-8 font-orbitron">EMPOWERING THE <br/><span className="text-accent">NEXT GENERATION</span></h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                Our partnership goes beyond technology. We provide MU students with internships, research grants, and hands-on experience with industrial-grade robotics.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Annual Robotics Excellence Scholarship",
                  "Direct pathway to RoliRobotics Engineering roles",
                  "Joint research publications in top-tier journals",
                  "Access to the RoliRobotics Testing Grounds"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle className="text-accent" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-accent font-orbitron font-bold text-xs tracking-widest hover:gap-4 transition-all uppercase">
                Learn about student opportunities <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8">ARE YOU A RESEARCHER?</h2>
          <p className="text-muted text-lg mb-12">
            We are always looking for new academic partners and researchers to join our mission of securing the future through robotics.
          </p>
          <button className="px-10 py-5 border border-accent text-accent font-orbitron font-black text-sm tracking-widest hover:bg-accent hover:text-background transition-all">
            CONTACT RESEARCH TEAM
          </button>
        </div>
      </section>
    </div>
  );
};
