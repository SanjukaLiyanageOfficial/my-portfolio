const fs = require('fs');

// 1. Philosophy Fix
let phi = fs.readFileSync('src/components/Philosophy.tsx', 'utf8');
phi = phi.replace(/ðŸ‘¨â€ ðŸ’»/g, '👨‍💻');
phi = phi.replace(/ðŸ¤®/g, '🤮');
phi = phi.replace(/ðŸ˜…/g, '😅');
phi = phi.replace(/ðŸ§‘â€ ðŸ”¬/g, '🧑‍🔬');
phi = phi.replace(/ðŸ‘‡/g, '👇');
fs.writeFileSync('src/components/Philosophy.tsx', phi, 'utf8');

// 2. Deployments -> Bento Box Layout
const deploymentsCode = import { motion } from "framer-motion";
import { Cloud, Zap, Smartphone, BookOpen, Leaf, GitBranch, Trophy, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Library OS — Microservices Platform",
    year: "2026",
    tag: "Cloud Native",
    tagColor: "#4338ca",
    tagBg: "#eef2ff",
    icon: BookOpen,
    iconColor: "#4338ca",
    description: "A scalable 8-node cloud library system built with NestJS, React, and MongoDB. Containerized with Docker, orchestrated on Azure Kubernetes Service (AKS), deployed via zero-downtime GitOps using GitHub Actions and ArgoCD.",
    tech: ["NestJS", "React", "Docker", "Kubernetes", "Azure AKS", "ArgoCD", "API Gateway", "MongoDB"],
    gradient: "from-indigo-600 via-purple-600 to-indigo-600",
    glow: "rgba(79, 70, 229, 0.4)",
    github: "https://github.com/SachinthaDaham/Library-Manager-Microservices",
  },
  {
    title: "CocoSmart — Coconut Intelligence Platform",
    year: "2025",
    tag: "Research · AI / IoT",
    tagColor: "#16a34a",
    tagBg: "#f0fdf4",
    icon: Leaf,
    iconColor: "#16a34a",
    description: "Research project combining a Flutter app and a React web dashboard powered by CNN deep-learning models to identify coconut diseases. Integrates real-time IoT sensors for precision agriculture.",
    tech: ["Flutter", "React", "Python", "CNN/TensorFlow", "IoT", "Firebase"],
    gradient: "from-emerald-500 via-green-500 to-emerald-500",
    glow: "rgba(16, 185, 129, 0.4)",
    github: "https://github.com/SachinthaDaham/cocosmartapp",
  },
  {
    title: "Prana Yoga Management System",
    year: "2024",
    tag: "Full-Stack",
    tagColor: "#db2777",
    tagBg: "#fdf2f8",
    icon: Zap,
    iconColor: "#db2777",
    description: "A yoga studio platform built with MERN stack integrated with Dapper ORM and Ocelot API Gateway. Orchestrated with Kubernetes and scaled via Azure DevOps.",
    tech: ["MERN", ".NET Core", "Ocelot", "Dapper", "Kubernetes"],
    gradient: "from-pink-600 via-rose-500 to-pink-600",
    glow: "rgba(236, 72, 153, 0.4)",
    github: "https://github.com/SachinthaDaham/prana",
  },
  {
    title: "Formula 1 Live Hub",
    year: "2025",
    tag: "AWS · Real-Time",
    tagColor: "#dc2626",
    tagBg: "#fff1f2",
    icon: Trophy,
    iconColor: "#dc2626",
    description: "A fully cloud-deployed F1 fan platform built on React with live race scores, driver standings, constructor tables, latest news, and detailed track data. Deployed on AWS with Docker + Kubernetes.",
    tech: ["React", "Docker", "Kubernetes", "AWS", "ArgoCD", "AWS RDS"],
    gradient: "from-red-600 via-orange-600 to-red-600",
    glow: "rgba(239, 68, 68, 0.4)",
    github: "https://github.com/SachinthaDaham/Fomula-1-WebSite-",
  },
  {
    title: "PetHub Petcare App",
    year: "2025",
    tag: "Mobile",
    tagColor: "#7c3aed",
    tagBg: "#f5f3ff",
    icon: Smartphone,
    iconColor: "#7c3aed",
    description: "Mobile application in Flutter helping pet owners manage profiles and health records. Integrated with Firebase.",
    tech: ["Flutter", "Dart", "Firebase", "Auth"],
    gradient: "from-violet-600 via-fuchsia-600 to-violet-600",
    glow: "rgba(139, 92, 246, 0.4)",
    github: "https://github.com/SachinthaDaham/PETHUB",
  },
];

export const Deployments = () => {
  return (
    <section id="deployments" className="py-32 px-6 md:px-24 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#ffffff0a_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="font-handwriting text-primary drop-shadow-sm">core</span>{" "}
            <span className="font-comic text-ink dark:text-white uppercase drop-shadow-sm">DEPLOYMENTS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(380px,auto)]">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            // Bento logic: Wide cards for highlights
            const isWide = idx === 0 || idx === 3;
            
            return (
              <motion.div key={idx}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:"-50px" }}
                transition={{ delay:idx*0.1, duration:0.6, type:"spring", stiffness:100 }}
                whileHover={{ y:-6, scale:1.01 }}
                className={\group relative h-full bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] p-1 shadow-sm transition-all duration-300 \\}
              >
                <div className={\bsolute inset-0 rounded-[2rem] bg-gradient-to-br \ opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md\} />
                <div className={\bsolute inset-0 rounded-[2rem] bg-gradient-to-br \ opacity-20 dark:opacity-40\} />

                <div className="relative h-full bg-slate-50 dark:bg-slate-900 rounded-[1.8rem] p-8 flex flex-col overflow-hidden z-10 border border-white/50 dark:border-slate-800">
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm" style={{ border: \1px solid \40\ }}>
                      <Icon size={28} style={{ color: project.tagColor }} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[11px] font-bold px-4 py-2 rounded-full border shadow-sm" style={{ color: project.tagColor, background: \color-mix(in srgb, \ 10%, transparent)\, borderColor: \\30\ }}>
                      {project.tag}
                    </span>
                  </div>

                  <h3 className={\ont-bold text-ink dark:text-white mb-4 group-hover:text-primary transition-colors \\}>
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
                      <span className="text-sm font-bold text-slate-400 dark:text-slate-500 font-mono">{project.year}</span>
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-800 hover:bg-primary dark:hover:bg-primary text-slate-400 hover:text-white transition-all shadow-sm group/btn hover:-translate-y-1 border border-slate-200 dark:border-slate-700 dark:hover:border-primary">
                        <ArrowUpRight size={20} className="group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
;
fs.writeFileSync('src/components/Deployments.tsx', deploymentsCode, 'utf8');

// 3. Experience -> Terminal/CLI styled Education and Certs
const experienceCode = import { motion } from "framer-motion";
import { Network, CheckCircle2, Calendar, MapPin, ExternalLink, Terminal, ShieldAlert } from "lucide-react";

export const Experience = () => (
  <section id="experience" className="py-28 px-6 md:px-24 relative bg-slate-50 dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
    <div className="max-w-5xl mx-auto relative z-10">
      <div className="mb-16">
        <motion.div initial={{ opacity:0,y:10 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:false, margin:"-50px" }} className="flex items-center gap-2 mb-3">
          <div className="h-px w-8 bg-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] font-mono">Career Timeline</span>
        </motion.div>
        <motion.h2 initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:false, margin:"-50px" }} className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="font-handwriting text-primary">my professional</span>{" "}
          <span className="font-comic text-ink dark:text-white uppercase">TRAJECTORY</span>
        </motion.h2>
      </div>

      <div className="relative z-10 mb-20">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-indigo-300 to-transparent" />
        <motion.div initial={{ opacity:0,x:-24 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:false, margin:"-50px" }} className="relative pl-20 group">
          <div className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-indigo-50 dark:bg-indigo-900 border-2 border-indigo-200 dark:border-indigo-700 z-10">
            <Network className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-ink dark:text-white mb-1">DevOps & Cloud Engineer Intern</h3>
            <a href="https://arimac.digital/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary font-bold hover:underline mb-6">Arimac Digital <ExternalLink size={14} /></a>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><Calendar size={14} /> 2024 - 2025</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><MapPin size={14} /> Colombo, Sri Lanka</span>
            </div>
            <ul className="space-y-4">
              {[
                "Orchestrated cloud-native microservices infrastructure on Azure Kubernetes Service (AKS)",
                "Automated end-to-end CI/CD GitOps pipelines with GitHub Actions & ArgoCD — zero manual deployments",
                "Managed multi-node Kubernetes clusters and containerized enterprise applications via Docker & Helm",
                "Configured API Gateways, RabbitMQ event-driven messaging, Redis caching and scaled MongoDB/PostgreSQL",
                "Implemented infrastructure-as-code with Terraform and maintained 99.9% uptime SLAs"
              ].map((m, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:false, margin:"-50px" }} className="w-full bg-[#0a0f1e] rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-[#12182b] border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-xs font-bold">
            <Terminal size={14} /> bash/credentials
          </div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-8 font-mono text-sm">
          <div className="mb-6">
            <span className="text-green-400 font-bold">root@devops-admin</span><span className="text-white">:</span><span className="text-blue-400">~/academics</span><span className="text-white">$</span> <span className="text-slate-300">cat education.json</span>
          </div>
          <div className="text-slate-300 pl-4 border-l border-slate-700/50 mb-10">
            <span className="text-pink-400">{'{'}</span><br/>
            &nbsp;&nbsp;<span className="text-blue-300">"degree"</span>: <span className="text-amber-300">"BSc (Hons) in Software Engineering"</span>,<br/>
            &nbsp;&nbsp;<span className="text-blue-300">"university"</span>: <span className="text-amber-300">"SLIIT - Sri Lanka Institute of Information Technology"</span>,<br/>
            &nbsp;&nbsp;<span className="text-blue-300">"duration"</span>: <span className="text-amber-300">"2022 – 2026"</span>,<br/>
            &nbsp;&nbsp;<span className="text-blue-300">"status"</span>: <span className="text-green-400">"Active / In Progress"</span><br/>
            <span className="text-pink-400">{'}'}</span>
          </div>

          <div className="mb-6">
            <span className="text-green-400 font-bold">root@devops-admin</span><span className="text-white">:</span><span className="text-blue-400">~/certs</span><span className="text-white">$</span> <span className="text-slate-300">./list_certifications.sh</span>
          </div>
          <div className="pl-4 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded border border-amber-500/30 font-bold w-fit">AWS</span>
              <div>
                <div className="text-slate-200 font-bold">AWS Certified Solutions Architect</div>
                <div className="text-slate-500 text-xs mt-1">Amazon Web Services <span className="text-slate-400 mx-2">|</span> <span className="text-green-400 animate-pulse">Running task: Preparation</span></div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 font-bold w-fit">CKA</span>
              <div>
                <div className="text-slate-200 font-bold">Certified Kubernetes Administrator</div>
                <div className="text-slate-500 text-xs mt-1">CNCF / Linux Foundation <span className="text-slate-400 mx-2">|</span> <span className="text-green-400 animate-pulse">Running task: Preparation</span></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center text-slate-500">
            <span className="animate-pulse font-black text-lg mr-2 text-primary">_</span> awaiting execution...
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
;
fs.writeFileSync('src/components/Experience.tsx', experienceCode, 'utf8');
console.log('Done rewriting files gracefully!');
