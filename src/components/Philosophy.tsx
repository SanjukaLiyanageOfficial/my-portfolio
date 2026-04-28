import { motion } from "framer-motion";

const highlights = [
  { emoji: "🎓", label: "Undergraduate at SLIIT" },
  { emoji: "💼", label: "Intern @ Cultive8 Pvt. Ltd." },
  { emoji: "🟢", label: "Open to Opportunities" },
];

export const Philosophy = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-24 bg-slate-50 dark:bg-slate-900/60 relative border-y border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-12">
          <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:2, repeat:Infinity, ease:"easeInOut" }} className="text-4xl">👋</motion.div>
          <div>
            <motion.div initial={{ opacity:0,y:10 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="flex items-center gap-2 mb-1">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] font-mono">About Me</span>
            </motion.div>
            <h2 className="text-3xl sm:text-5xl font-comic text-ink dark:text-white tracking-wide uppercase drop-shadow-sm">WHO I AM</h2>
          </div>
        </div>

        {/* Main card */}
        <div className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 shadow-saas dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-indigo-50 dark:border-slate-800 relative mb-12">
          {/* Left — paragraphs */}
          <div className="lg:w-3/5 p-10 md:p-14 relative border-b lg:border-b-0 lg:border-r border-indigo-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex flex-col justify-center gap-7">
            {[
              `I'm Sanjuka Liyanage, an undergraduate student specializing in Software Engineering at the Sri Lanka Institute of Information Technology (SLIIT), expected to graduate in 2026. I have hands-on experience as a Full Stack Developer Intern at Cultive8 Company Pvt. Ltd., where I worked with .NET and React to build web applications and REST APIs.`,
              `I'm a smart, hardworking, and self-motivated individual with a strong passion for technology. I enjoy building web and mobile applications that solve real-world problems — from EV charging systems to plantation management platforms — and I'm always eager to learn and grow as a developer.`,
              `I'm currently seeking new opportunities in the IT field where I can apply my full stack skills, contribute meaningfully to a team, and continue growing as a software engineer.`,
            ].map((para, i) => (
              <motion.p key={i}
                initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i * 0.15 }}
                className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-l-4 border-primary pl-5"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right — highlight badges */}
          <div className="lg:w-2/5 p-10 md:p-14 bg-gradient-to-br from-white dark:from-slate-900 to-blue-50/50 dark:to-indigo-950/20 flex flex-col justify-center gap-6">
            {highlights.map((h, i) => (
              <motion.div key={i}
                initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: i * 0.15 }}
                whileHover={{ y:-4, scale:1.03 }}
                className="flex items-center gap-4 bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-600 rounded-2xl px-7 py-5 shadow-sm hover:shadow-saas-hover transition-all"
              >
                <span className="text-3xl">{h.emoji}</span>
                <span className="text-base font-bold text-ink dark:text-white">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};