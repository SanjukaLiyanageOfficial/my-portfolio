import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MapPin, ExternalLink, Briefcase, GraduationCap, School } from "lucide-react";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    role: "Full Stack Developer Intern",
    org: "Cultive8 Company Pvt. Ltd.",
    orgHref: "#",
    period: "— Present",
    location: "Sri Lanka",
    bullets: [
      "Developed and maintained web applications using React JS and .NET",
      "Built and integrated RESTful APIs for various business features",
      "Collaborated with the development team on full stack features across both frontend and backend layers",
      "Gained hands-on experience with enterprise-level software development workflows",
    ],
    accent: "#6366f1",
    bg: "bg-indigo-50 dark:bg-indigo-900",
    border: "border-indigo-200 dark:border-indigo-700",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    type: "education",
    icon: GraduationCap,
    role: "BSc (Hons) Information Technology — Software Engineering",
    org: "Sri Lanka Institute of Information Technology (SLIIT)",
    orgHref: "https://www.sliit.lk/",
    period: "2022 – Present (Expected 2026)",
    location: "Malabe, Sri Lanka",
    bullets: [
      "Specializing in Software Engineering",
      "Completed multiple group and individual real-world projects across web, mobile, and research domains",
    ],
    accent: "#0ea5e9",
    bg: "bg-sky-50 dark:bg-sky-900/40",
    border: "border-sky-200 dark:border-sky-700",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    type: "education",
    icon: School,
    role: "Secondary & Advanced Level Education",
    org: "Rahula College, Matara",
    orgHref: "#",
    period: "2011 – 2020",
    location: "Matara, Sri Lanka",
    bullets: [
      "G.C.E. Advanced Level (2020): Combined Maths, Physics, Chemistry : 3 Cs",
      "G.C.E. Ordinary Level (2016): 7 A's, 1 B, 1 C",
    ],
    accent: "#10b981",
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    border: "border-emerald-200 dark:border-emerald-700",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export const Experience = () => (
  <section id="experience" className="py-28 px-6 md:px-24 relative bg-slate-50 dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="mb-16">
        <motion.div initial={{ opacity:0,y:10 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:false, margin:"-50px" }} className="flex items-center gap-2 mb-3">
          <div className="h-px w-8 bg-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] font-mono">Career & Education</span>
        </motion.div>
        <motion.h2 initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:false, margin:"-50px" }} className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="font-handwriting text-primary pr-3 md:pr-4">my professional</span>{" "}
          <span className="font-comic tracking-widest text-ink dark:text-white uppercase">TRAJECTORY</span>
        </motion.h2>
      </div>

      <div className="relative z-10 flex flex-col gap-10">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-indigo-300 to-transparent" />

        {timeline.map((entry, idx) => {
          const Icon = entry.icon;
          return (
            <motion.div key={idx}
              initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:false, margin:"-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-20 group"
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${entry.bg} border ${entry.border} z-10 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${entry.iconColor}`} />
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_8px_30px_rgba(67,56,202,0.12)] transition-all">
                <h3 className="text-2xl font-bold text-ink dark:text-white mb-1">{entry.role}</h3>
                <a href={entry.orgHref} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold hover:underline mb-6 transition-colors"
                  style={{ color: entry.accent }}
                >
                  {entry.org} <ExternalLink size={14} />
                </a>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <Calendar size={14} /> {entry.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <MapPin size={14} /> {entry.location}
                  </span>
                </div>
                <ul className="space-y-4">
                  {entry.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: entry.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
