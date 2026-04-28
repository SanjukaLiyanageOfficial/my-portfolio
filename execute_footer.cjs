const fs = require('fs');

const darkFooterContent = `import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <section className="relative min-h-[90vh] bg-[#0A0A0A] overflow-hidden flex flex-col justify-end text-white border-t-2 border-indigo-500/20">
      
      {/* Absolute Infinite Kinetic Background Marquee */}
      <div className="absolute top-[20%] inset-x-0 w-[200vw] rotate-[-2deg] opacity-5 pointer-events-none select-none z-0">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap font-comic text-[12rem] tracking-widest text-white leading-none uppercase"
        >
          ENTERPRISE ARCHITECTURE • ZERO DOWNTIME • HIGH AVAILABILITY • ENTERPRISE ARCHITECTURE • ZERO DOWNTIME • HIGH AVAILABILITY • 
        </motion.div>
      </div>

      {/* Massive Glowing Ambient Orbs for contrast depth */}
      <div className="absolute top-[10%] left-[-10%] w-[50vh] h-[50vh] bg-indigo-600/30 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] bg-cyan-600/20 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      {/* Central Glassmorphism Terminal */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 pb-32 pt-24">
        
        <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 lg:p-24 shadow-2xl overflow-hidden group hover:border-indigo-500/30 transition-colors duration-700">
          
          {/* Subtle Glare Sweep inside the glass container */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent transform -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Manifesto */}
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-[6rem] leading-[1] mb-6 tracking-tight">
                <span className="font-comic text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] block">I AIN'T A TYPICAL</span>
                <span className="font-handwriting text-cyan-400 font-bold block transform -rotate-3 mt-2 md:-mt-2 pl-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">engineer.</span>
              </h2>
              <p className="text-slate-400 font-sans text-lg md:text-xl max-w-md leading-relaxed font-medium">
                Whatever your problem, let's architecturally solve & engineer it from the absolute depth of its infrastructure.
              </p>
            </div>

            {/* Right Contact Terminal */}
            <div className="flex flex-col items-start lg:items-end gap-8">
              
              <div className="flex flex-col lg:items-end group/contact cursor-pointer">
                <span className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Direct Line
                </span>
                <motion.a 
                  href="tel:+94705852167"
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="font-handwriting text-4xl md:text-5xl lg:text-[4rem] text-white group-hover/contact:text-cyan-300 transition-colors duration-300 transform -rotate-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  (+94) 70 585 2167
                </motion.a>
              </div>

              <div className="flex flex-col lg:items-end group/email cursor-pointer mt-4">
                <span className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-2">Secure Link</span>
                <motion.a 
                  href="mailto:liyanagesanju36@gmail.com"
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="font-comic tracking-widest text-2xl md:text-3xl lg:text-4xl text-slate-300 group-hover/email:text-white transition-colors duration-300 transform rotate-1 bg-white/5 px-6 py-4 rounded-xl border border-white/10 group-hover/email:border-white/30"
                >
                  LIYANAGESANJU36@GMAIL.COM
                </motion.a>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Minimalist Status Bar */}
      <div className="relative z-20 w-full px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-500 font-sans border-t border-white/10 gap-6 bg-[#050505]">
        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-handwriting text-lg text-white font-bold">sanjuka</span>
          <span className="font-comic text-lg text-slate-300 tracking-widest pt-1">LIYANAGE</span>
        </div>
        
        <div className="flex gap-8 uppercase tracking-widest">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <span className="hidden md:inline text-slate-700">•</span>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms Conditions</a>
        </div>

        <div className="uppercase tracking-widest text-slate-600">
          © {new Date().getFullYear()} Enterprise Architecture
        </div>
      </div>

    </section>
  );
};
`;

fs.writeFileSync('src/components/Footer.tsx', darkFooterContent, 'utf8');

console.log('Massive Dark Footer Overwritten Successfully.');