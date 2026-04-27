import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Zap, Trophy, BookOpen, ShoppingCart, Trash2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Web Based Vehicle Rental System",
    year: "2023",
    tag: "Group Project",
    icon: Trophy,
    description: "A web application for a vehicle rental company. Contributed to front-end and back-end development, specifically the Driver Management module.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#f59e0b",
    github: "https://github.com/SanjukaLiyanageOfficial",
  },
  {
    title: "E-Chanelling Website",
    year: "2023",
    tag: "Group Project",
    icon: Globe,
    description: "A web application for a medical channelling center. Contributed to Feedback Management using OOP principles across front-end and back-end.",
    tech: ["Java", "CSS", "MySQL"],
    color: "#0ea5e9",
    github: "https://github.com/SanjukaLiyanageOfficial",
  },
  {
    title: "Vehicle Management System (MERN)",
    year: "2024",
    tag: "Group Project",
    icon: Zap,
    description: "A full-featured web system for a vehicle service center covering 8 core functions. Contributed to the Inventory Management module using the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    color: "#6366f1",
    github: "https://github.com/SanjukaLiyanageOfficial/mern-vsms",
  },
  {
    title: "Android Mobile Game",
    year: "2024",
    tag: "Individual Project",
    icon: Smartphone,
    description: "A mobile game built with Android Studio featuring local data persistence using the Room database.",
    tech: ["Kotlin", "Room Database", "Android Studio"],
    color: "#10b981",
    github: "https://github.com/SanjukaLiyanageOfficial",
  },
  {
    title: "XPoint-Connect — EV Charging Station",
    year: "2025",
    tag: "Group Project",
    icon: Code2,
    description: "A comprehensive EV Charging Station Booking System with web, mobile, and API services.",
    tech: ["Kotlin"],
    color: "#8b5cf6",
    github: "https://github.com/SanjukaLiyanageOfficial/XPoint-Connect",
  },
  {
    title: "Plantation Management System",
    year: "2026",
    tag: "Group Project",
    icon: BookOpen,
    description: "A mobile application designed to assist Sri Lankan black pepper farmers in managing their plantations efficiently.",
    tech: ["Flutter", "Dart"],
    color: "#34d399",
    github: "https://github.com/SanjukaLiyanageOfficial/Plantation-Management-System-For-SriLankan-BlackPepper-Farmers",
  },
  {
    title: "VisionCart — Shopping for Visually Challenged",
    year: "2024",
    tag: "Group Project",
    icon: ShoppingCart,
    description: "A mobile shopping application specifically designed for visually challenged users, focusing on accessibility.",
    tech: ["Flutter", "Dart"],
    color: "#f472b6",
    github: "https://github.com/SanjukaLiyanageOfficial/visioncart",
  },
  {
    title: "Smart Waste Management System",
    year: "2024",
    tag: "Group Project",
    icon: Trash2,
    description: "A mobile application for smart urban waste management, built as part of Software Engineering Case Studies (SE3070).",
    tech: ["Flutter", "Dart"],
    color: "#fb923c",
    github: "https://github.com/SanjukaLiyanageOfficial/smart_waste_management_system",
  },
];

export const Deployments = () => {
  return (
    <section id="deployments" className="py-28 px-4 md:px-12 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 text-center">
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            <span className="font-handwriting text-primary drop-shadow-sm pr-3 md:pr-4">personal</span>{" "}
            <span className="font-comic tracking-widest text-ink dark:text-white uppercase drop-shadow-sm">PROJECTS</span>
          </motion.h2>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.2 }} className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            A collection of web, mobile, and full-stack projects demonstrating real-world problem solving and modern development practices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div key={idx}
                initial={{ opacity:0, scale:0.95, y:20 }}
                whileInView={{ opacity:1, scale:1, y:0 }}
                viewport={{ once:true, margin:"-50px" }}
                transition={{ delay:idx*0.08, duration:0.5, ease:"easeOut" }}
                whileHover={{ y:-4 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/20 via-slate-200 to-indigo-500/20 dark:from-indigo-500/30 dark:via-slate-800 dark:to-teal-500/30 opacity-70 group-hover:opacity-100 overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `conic-gradient(from 0deg, transparent 0%, transparent 60%, ${project.color} 80%, transparent 100%)` }}
                  />
                </div>

                <div className="relative h-full bg-white dark:bg-[#0c101a] rounded-[15px] p-5 flex flex-col overflow-hidden z-10 transition-colors">
                  <Icon className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.03] dark:opacity-[0.02] -rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" style={{ color: project.color }} />

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center border shadow-sm transition-all" style={{ background: `color-mix(in srgb, ${project.color} 10%, transparent)`, borderColor: `${project.color}30` }}>
                        <Icon size={14} style={{ color: project.color }} />
                      </div>
                      <span className="text-[10px] font-bold uppercase border px-2 py-0.5 rounded-full" style={{ color: project.color, borderColor: `${project.color}30` }}>
                        {project.tag}
                      </span>
                    </div>
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-white hover:bg-primary transition-colors border border-slate-100 dark:border-slate-700 shadow-sm z-20 pointer-events-auto"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-ink dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors duration-300 relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-5 flex-grow relative z-10">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto relative z-10">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-bold uppercase px-2 py-1 rounded bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
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