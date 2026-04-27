const fs = require('fs');

const lightFooterContent = `import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <section className="relative min-h-[60vh] bg-white overflow-hidden flex flex-col justify-center py-20">
      
      {/* Massive Graphic Circle On The Right */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] -right-[10%] md:-right-[20%] w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] rounded-full bg-gradient-to-br from-indigo-400 via-indigo-300 to-blue-200 opacity-90 pointer-events-none z-0"
      />

      {/* Small floating orb */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[30%] w-16 h-16 bg-white/80 backdrop-blur-md rounded-full shadow-lg pointer-events-none z-0 hidden md:block"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start pt-10">
            <h2 className="text-6xl md:text-7xl lg:text-[6rem] leading-[1] mb-6 tracking-tight flex flex-col items-center md:items-start drop-shadow-sm">
              <span className="font-comic text-ink  uppercase w-full text-center md:text-left">I AIN'T A TYPICAL</span>
              <span className="font-handwriting text-primary font-bold md:-mt-4 lowercase">engineer.</span>
            </h2>
            <p className="text-slate-600 font-sans text-lg max-w-lg leading-relaxed text-center md:text-left">
              whatever your problem, let's architecturally solve & engineer it from the depth of its infrastructure.
            </p>
          </div>

          {/* Right Contact Details */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6 pb-20">
            <motion.a 
              href="tel:+94764220899"
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="font-handwriting text-4xl md:text-5xl lg:text-[4rem] text-primary hover:text-indigo-700 transition-colors transform rotate-[-2deg] drop-shadow-md"
            >
              (+94) 76 422 0899
            </motion.a>
            <motion.a 
              href="mailto:Dahamsachintha66@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="font-comic tracking-widest text-2xl md:text-3xl lg:text-4xl text-ink hover:text-slate-800 transition-colors uppercase drop-shadow-md"
            >
              DAHAMSACHINTHA66@GMAIL.COM
            </motion.a>
          </div>

        </div>
      </div>

      {/* Bottom Nav Strip */}
      <div className="absolute bottom-0 inset-x-0 z-20 w-full px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-500 font-sans border-t border-white/30 backdrop-blur-md bg-white/20 gap-4">
        <div className="flex items-center gap-2">
          <span className="font-handwriting text-lg text-primary font-bold">sachintha</span>
          <span className="font-comic text-lg text-ink tracking-widest pt-1">DAHAM</span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span className="hidden md:inline text-slate-400">•</span>
          <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
        </div>

        <div>
          ©2026 SACHINTHA DAHAM
        </div>
      </div>

    </section>
  );
};
`;

fs.writeFileSync('src/components/Footer.tsx', lightFooterContent, 'utf8');

console.log('Restored Light Footer');