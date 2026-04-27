import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Database, Wrench, Server } from "lucide-react";

const skillCategories = [
  {
    label: "Programming Languages",
    title: "LANGUAGES",
    icon: Code2,
    gradient: "from-violet-500 to-purple-600",
    accent: "#7c3aed",
    skills: ["Java", "Python", "C", "C++", "Kotlin", "Dart"],
  },
  {
    label: "Web Development",
    title: "FRONTEND & WEB",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    accent: "#0ea5e9",
    skills: ["React JS", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", ".NET"],
  },
  {
    label: "Backend & APIs",
    title: "BACKEND",
    icon: Server,
    gradient: "from-indigo-500 to-blue-600",
    accent: "#6366f1",
    skills: ["Node.js", "Express.js", "REST API Development", "ASP.NET"],
  },
  {
    label: "Database",
    title: "DATABASES",
    icon: Database,
    gradient: "from-emerald-400 to-teal-500",
    accent: "#10b981",
    skills: ["MySQL", "MongoDB"],
  },
  {
    label: "Mobile Development",
    title: "MOBILE",
    icon: Smartphone,
    gradient: "from-pink-500 to-rose-500",
    accent: "#f43f5e",
    skills: ["Android Studio", "Flutter (Dart)", "Room Database"],
  },
  {
    label: "Tools & Platforms",
    title: "TOOLS",
    icon: Wrench,
    gradient: "from-amber-400 to-orange-500",
    accent: "#f59e0b",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Vercel", "MySQL Workbench"],
  },
];

export const LiveMetrics = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-14">
          <motion.div initial={{ opacity:0,y:10 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] font-mono">My Toolkit</span>
          </motion.div>
          <motion.h2 initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="font-handwriting text-primary border-transparent pr-3 md:pr-4">technical</span>{" "}
            <span className="font-comic tracking-widest text-ink dark:text-white uppercase">SKILLS</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">A comprehensive overview of my core technology stack spanning full stack web, mobile, and backend development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div key={i}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin: "-50px" }} transition={{ delay:i*0.07 }}
                whileHover={{ y:-6, scale:1.02 }}
                className="group relative bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_12px_40px_rgba(99,102,241,0.25)] transition-all duration-400 overflow-hidden p-7"
              >
                {/* Thick glow top border */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.gradient}`} />
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-40 h-40 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: category.accent }} />

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-[1rem] bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center border transition-all duration-300" style={{ borderColor:`${category.accent}30`, boxShadow:`0 4px 20px ${category.accent}15` }}>
                    <Icon size={24} style={{ color:category.accent }} />
                  </div>
                  <span className="text-[10px] font-bold uppercase px-3 py-1.5 rounded-full border bg-white dark:bg-slate-900" style={{ color:category.accent, borderColor:`${category.accent}40`, boxShadow:`0 0 10px ${category.accent}10` }}>
                    {category.label}
                  </span>
                </div>

                <h3 className="font-comic tracking-widest text-3xl text-ink dark:text-white mb-6 relative z-10">{category.title}</h3>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs font-bold font-mono px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors hover:scale-105 cursor-default select-none">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
