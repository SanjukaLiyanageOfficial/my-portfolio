import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Cloud, Download, GitBranch, Server, Globe } from 'lucide-react';
// @ts-ignore
import profileImg from '../assets/profile.png';

const techPills = [
  { label: 'React JS',    color: '#61DAFB', bg: '#e8f9ff' },
  { label: 'Next.js',     color: '#6366f1', bg: '#eef0ff' },
  { label: 'Node.js',     color: '#339933', bg: '#edfaed' },
  { label: '.NET',        color: '#512BD4', bg: '#f3eeff' },
  { label: 'Flutter',     color: '#02569B', bg: '#e8f3ff' },
  { label: 'Kotlin',      color: '#7F52FF', bg: '#f2eeff' },
  { label: 'MongoDB',     color: '#47A248', bg: '#edfaf0' },
  { label: 'MySQL',       color: '#4479A1', bg: '#eef3ff' },
];

const stats = [
  { value: '6+', label: 'Month Internship' },
  { value: '15+', label: 'Projects' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col lg:flex-row justify-center items-center py-28 px-6 md:px-20 overflow-hidden bg-white dark:bg-[#0a0f1e] gap-10 transition-colors duration-300">

      {/* Background fine grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* LEFT */}
      <div className="z-10 w-full max-w-3xl flex flex-col items-start lg:w-[55%]">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-indigo-100 dark:border-indigo-900 rounded-full shadow-sm text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          Available for Development Roles
        </motion.div>

        {/* Main Heading with shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: 'easeOut' }}
          className="flex flex-col mb-2 relative z-10"
        >
          <span className="font-handwriting text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] text-primary font-bold -mb-3 pr-3 md:pr-4 pl-1 z-20 drop-shadow-sm">
            aspiring
          </span>
          <span className="relative font-comic tracking-widest text-[2rem] sm:text-[3.2rem] md:text-[5rem] lg:text-[7.5rem] leading-none pt-3 text-shimmer">
            SOFTWARE ENGINEER
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.2, duration: 1.5, ease: 'circOut' }}
              className="absolute bottom-1 left-0 h-3 md:h-6 bg-teal-400/20 -z-10 rounded-full"
            />
          </span>
        </motion.h1>

        {/* Tech Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap gap-2 mt-6 mb-8"
        >
          {techPills.map((p, i) => (
            <motion.span
              key={p.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.07, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.12, y: -4, boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
              style={{ color: p.color, background: p.bg, border: `1.5px solid ${p.color}22` }}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold font-sans cursor-default shadow-sm"
            >
              {p.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-sans leading-relaxed flex flex-col gap-4 border-l-4 border-primary pl-6 py-1"
        >
          <p>
            I am a Software Engineer finalizing my BSc (Hons) in Software Engineering at <span className="font-bold text-ink dark:text-white bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">SLIIT</span>,
            bringing hands-on experience from a eight months internship at{' '}
            <span className="font-bold text-ink dark:text-white bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">Cultive8</span>.
            I specialize in full stack development and cloud automation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex gap-8"
        >
          {stats.map((s, i) => (
            <motion.div key={i} className="flex flex-col" whileHover={{ y: -3 }}>
              <span className="font-comic tracking-widest text-3xl md:text-4xl text-primary font-bold">{s.value}</span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full"
        >
          <a href="https://github.com/SanjukaLiyanageOfficial" target="_blank" rel="noreferrer"
            className="px-8 py-4 bg-ink hover:bg-primary text-white dark:text-slate-900 rounded-xl font-bold shadow-saas hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
            <Terminal size={20} /> GitHub Profile
          </a>
          <a href="/SanjukaLiyanage_CV_2026.pdf" download="SanjukaLiyanage_CV_2026.pdf"
            className="px-8 py-4 bg-white dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border-2 border-primary text-primary rounded-xl font-bold shadow-sm hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
            <Download size={20} /> Download CV
          </a>
          <a href="#contact"
            className="px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl font-bold border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:border-primary hover:text-primary hover:-translate-y-1 flex items-center justify-center gap-2">
            <GitBranch size={18} /> Let's Connect
          </a>
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 mt-6 lg:mt-0 lg:w-[42%] flex justify-center items-center relative select-none min-h-[280px] sm:min-h-[360px] lg:min-h-[500px]"
      >
        {/* Floating tech icons */}
        <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-4 left-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-indigo-100 text-primary z-20">
          <Database size={24} />
        </motion.div>
        <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 -right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-indigo-50 text-secondary z-20">
          <Cloud size={24} />
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-16 -left-2 bg-slate-800/90 dark:bg-slate-950/90 backdrop-blur-md p-3 rounded-xl shadow-2xl text-white z-20 border border-slate-700">
          <Cpu size={20} />
        </motion.div>
        <motion.div animate={{ y: [0, -12, 0], x: [0, 6, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-2 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl shadow-lg border border-indigo-50 text-indigo-500 z-20">
          <Server size={18} />
        </motion.div>
        <motion.div animate={{ y: [0, 14, 0], x: [0, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-8 right-4 bg-teal-50/90 dark:bg-teal-950/80 backdrop-blur-md p-2.5 rounded-xl shadow-lg border border-teal-100 text-secondary z-20">
          <Globe size={18} />
        </motion.div>

        {/* Profile image */}
        <motion.img
          src={profileImg}
          alt="Sanjuka Liyanage"
          className="relative z-10 w-48 sm:w-64 lg:w-[340px] object-contain"
          style={{ filter: 'drop-shadow(0 20px 60px rgba(99,102,241,0.25))' }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};