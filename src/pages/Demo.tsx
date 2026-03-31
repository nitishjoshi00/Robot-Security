import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap
} from 'lucide-react';

export const Demo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sector: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

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
              EXPERIENCE THE FUTURE
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              BOOK A <span className="text-primary">PRIVATE</span> DEMONSTRATION.
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              See the RoliRobotics Limited autonomous security platform in action. We'll walk you through deployment, sensor fusion, and real-time response.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black mb-6 font-orbitron">WHAT TO EXPECT</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: <Shield className="text-primary" />,
                    title: "Live Robot Patrol",
                    desc: "Watch the ROLI-QUAD-04 navigate a complex environment in real-time."
                  },
                  {
                    icon: <Zap className="text-accent" />,
                    title: "HUD & Control Interface",
                    desc: "See how security teams manage autonomous fleets through our intuitive dashboard."
                  },
                  {
                    icon: <Calendar className="text-primary" />,
                    title: "Custom Strategy Session",
                    desc: "A 1-on-1 discussion about your facility's specific security challenges."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-primary/5 border border-primary/20 rounded-[40px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-white font-bold">Location Options</div>
                  <div className="text-muted text-xs uppercase tracking-widest font-mono">Virtual or On-Site</div>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                We offer virtual demonstrations via high-definition video link, or on-site demonstrations at our testing facility in Kildare, Ireland.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-surface border border-white/10 p-10 md:p-16 rounded-[60px] shadow-2xl relative overflow-hidden">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 text-accent">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-black mb-4 font-orbitron">REQUEST RECEIVED</h2>
                <p className="text-muted text-lg mb-8">
                  Thank you for your interest. A member of our security strategy team will contact you within 24 hours to schedule your demo.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-accent font-orbitron font-bold text-xs tracking-widest hover:gap-4 transition-all uppercase flex items-center gap-2 mx-auto"
                >
                  Back to form <ArrowRight size={16} />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest ml-4">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:outline-none transition-all text-white"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest ml-4">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:outline-none transition-all text-white"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest ml-4">Company</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Acme Corp"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:outline-none transition-all text-white"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest ml-4">Sector</label>
                    <select 
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:outline-none transition-all text-white appearance-none"
                      value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    >
                      <option value="" disabled>Select Sector</option>
                      <option value="logistics">Logistics & Warehousing</option>
                      <option value="education">Education & Campus</option>
                      <option value="corporate">Corporate Office</option>
                      <option value="events">Events & Public Spaces</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted uppercase tracking-widest ml-4">Message / Requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your security needs..."
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:outline-none transition-all text-white resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-primary text-white font-orbitron font-black text-sm tracking-widest hover:brightness-110 transition-all shadow-[0_0_40px_rgba(10,132,255,0.3)] flex items-center justify-center gap-3 group"
                >
                  REQUEST PRIVATE DEMO <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-[10px] text-muted uppercase tracking-widest">
                  By submitting, you agree to our privacy policy and data handling.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 opacity-30 grayscale">
          <div className="text-2xl font-black font-orbitron">MAYNOOTH UNIVERSITY</div>
          <div className="text-2xl font-black font-orbitron">DUBLIN PORT</div>
          <div className="text-2xl font-black font-orbitron">TECH SUMMIT</div>
          <div className="text-2xl font-black font-orbitron">AEGIS SECURITY</div>
        </div>
      </section>
    </div>
  );
};
