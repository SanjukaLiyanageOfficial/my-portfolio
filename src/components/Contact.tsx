import { Mail, Phone, MessageSquare, Send, User, Loader2, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="py-24 px-6 md:px-24 bg-white dark:bg-[#030712] border-t border-slate-200/50 dark:border-white/5 overflow-hidden relative transition-colors duration-500">
      {/* Moddish Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[160px]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/10 dark:bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100/80 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full text-[10px] font-black tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase mb-8 shadow-sm"
          >
            <Sparkles size={12} className="text-primary animate-pulse" />
            Let's build something epic
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold text-ink dark:text-white mb-6 tracking-tighter"
          >
            <span className="font-handwriting text-primary block md:inline-block md:-rotate-3 translate-y-2">initialize</span>
            <span className="font-comic tracking-widest text-slate-900 dark:text-white relative px-4">
              CONNECTION
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
          </motion.h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to architect high-availability environments or optimize your scaling strategy? Reach out and let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contact Cards - Left Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {[
              { href: "mailto:liyanagesanju36@gmail.com", icon: Mail, label: "Email", value: "liyanagesanju36@gmail.com", color: "from-blue-500/20 to-indigo-500/20", iconColor: "text-blue-500" },
              { href: "https://wa.me/94705852167", target: "_blank", icon: MessageSquare, label: "WhatsApp", value: "+94 70 585 2167", color: "from-emerald-500/20 to-teal-500/20", iconColor: "text-emerald-500" },
              { href: "tel:+94705852167", icon: Phone, label: "Mobile", value: "+94 70 585 2167", color: "from-slate-500/20 to-slate-700/20", iconColor: "text-slate-500" },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <TiltCard className="group">
                  <a
                    href={card.href}
                    target={(card as any).target}
                    rel={(card as any).target ? "noreferrer" : undefined}
                    className="block relative overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 p-6 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 group"
                  >
                    {/* Background Shine */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="absolute -inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:animate-gradient-x group-hover:opacity-100 transition-all" />

                    <div className="relative z-10 flex items-center gap-6" style={{ transform: "translateZ(30px)" }}>
                      <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg border border-slate-100 dark:border-white/10 ${card.iconColor} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <card.icon size={28} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-1">{card.label}</p>
                        <p className="text-lg text-slate-900 dark:text-slate-100 font-bold truncate group-hover:translate-x-1 transition-transform duration-300">
                          {card.value}
                        </p>
                      </div>

                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                        <ArrowUpRight size={20} className="text-slate-600 dark:text-slate-300" />
                      </div>
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/40 via-primary/20 to-white/10 dark:from-white/10 dark:via-primary/30 dark:to-white/5 shadow-2xl relative overflow-hidden group">
              {/* Animated Border Light */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent w-1/2 h-full -translate-x-full animate-[shimmer_3s_infinite] opacity-0 group-hover:opacity-20 pointer-events-none" />

              <div className="relative bg-white/60 dark:bg-[#0c101a]/95 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12">
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
                  <span className="font-handwriting text-primary text-4xl mr-3 block md:inline">Send me</span>
                  <span className="font-comic tracking-widest uppercase text-2xl md:text-3xl">A MESSAGE</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">
                        <User size={18} />
                      </div>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name"
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary dark:focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 dark:text-white font-medium"
                      />
                    </div>
                    <div className="group relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">
                        <Mail size={18} />
                      </div>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Your Email"
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary dark:focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 dark:text-white font-medium"
                      />
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute left-4 top-5 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">
                      <MessageSquare size={18} />
                    </div>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Share your vision or project details..."
                      className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary dark:focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 dark:text-white font-medium resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full group/btn relative py-5 rounded-2xl font-black text-lg tracking-widest uppercase overflow-hidden transition-all duration-300
                      ${status === "success" ? "bg-green-500" : status === "error" ? "bg-red-500" : "bg-primary shadow-[0_20px_40px_-12px_rgba(67,56,202,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(67,56,202,0.6)]"}
                      text-white
                    `}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
                    <span className="relative flex items-center justify-center gap-3">
                      {status === "sending" && <><Loader2 size={24} className="animate-spin" /> Processing...</>}
                      {status === "success" && <><Sparkles size={24} /> Message Sent!</>}
                      {status === "error" && <>Submission Failed</>}
                      {status === "idle" && <><Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /> Dispatch Message</>}
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};
