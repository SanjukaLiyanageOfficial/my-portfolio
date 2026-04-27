const fs = require('fs');

// --- 1. Modify Hero.tsx Context ---
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
const oldBioTarget = />AWS, Python, SQL, and server management<\/strong>/;
const newBioTarget = `>AWS, Azure, Kubernetes, Docker, Terraform, CI/CD (GitHub Actions, ArgoCD), and Linux Server Administration</strong>`;
hero = hero.replace(oldBioTarget, newBioTarget);
fs.writeFileSync('src/components/Hero.tsx', hero, 'utf8');


// --- 2. Create the massive Footer Component ---
const footerComponent = `import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <section className="relative min-h-[70vh] bg-subtle overflow-hidden flex flex-col justify-end">
      
      {/* Structural Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200/60" />

      {/* Massive 3D Background 'Planet' Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[50%] md:-bottom-[80%] left-1/2 -translate-x-1/2 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] rounded-[100%] bg-gradient-to-t from-indigo-900 via-indigo-400 to-transparent shadow-[inset_0_100px_100px_rgba(255,255,255,0.4)] pointer-events-none"
      />
      <div className="absolute -bottom-[40%] md:-bottom-[60%] left-1/2 -translate-x-1/2 w-[550px] md:w-[1100px] h-[550px] md:h-[1100px] rounded-[100%] bg-gradient-to-t from-teal-400 via-blue-300 to-transparent blur-[10px] opacity-60 pointer-events-none mix-blend-screen" />
      
      {/* Floating Debris / Abstract Moons */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[20%] w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),_0_20px_40px_rgba(0,0,0,0.1)] pointer-events-none flex items-center justify-center opacity-90"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[15%] w-12 h-12 md:w-16 md:h-16 bg-slate-200 rounded-full shadow-[inset_-5px_-5px_10px_rgba(0,0,0,0.2)] pointer-events-none opacity-80"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-32">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Left Hero Statement */}
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] mb-6 drop-shadow-sm">
              <span className="font-comic text-ink tracking-wide block">I ain't a typical</span>
              <span className="font-handwriting text-primary font-bold block transform -rotate-2 -mt-4 pl-4 md:pl-8">engineer.</span>
            </h2>
            <p className="text-slate-700 font-sans font-semibold text-lg md:text-xl max-w-md leading-relaxed">
              whatever your problem, let's architecturally solve & engineer it from the depth of its infrastructure.
            </p>
          </div>

          {/* Right Giant Contact Triggers */}
          <div className="flex flex-col items-end self-end lg:self-center">
            <motion.a 
              href="tel:+94764220899"
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="font-handwriting text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-bold text-primary hover:text-indigo-700 transition-colors transform -rotate-3 mb-2 drop-shadow-sm inline-block"
            >
              (+94) 76 422 0899
            </motion.a>
            <motion.a 
              href="mailto:Dahamsachintha66@gmail.com"
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="font-comic tracking-widest text-2xl md:text-3xl lg:text-4xl text-ink hover:text-slate-700 transition-colors transform rotate-1 drop-shadow-sm inline-block"
            >
              Dahamsachintha66@gmail.com
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Nav Strip */}
      <div className="relative z-20 w-full px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-slate-500 font-sans border-t border-slate-200/30 gap-6 backdrop-blur-md bg-white/10">
        <div className="flex items-center gap-2">
          <span className="font-handwriting text-xl text-primary font-bold">sachintha</span>
          <span className="font-comic text-xl text-ink tracking-widest pt-1">DAHAM</span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span className="hidden md:inline text-slate-300">•</span>
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
fs.writeFileSync('src/components/Footer.tsx', footerComponent, 'utf8');

// --- 3. Integrate Footer into App.tsx ---
let app = fs.readFileSync('src/App.tsx', 'utf8');
// Import Footer
if (!app.includes('import { Footer }')) {
  app = app.replace("import { Contact } from './components/Contact';", "import { Contact } from './components/Contact';\nimport { Footer } from './components/Footer';");
}

// Remove old footer tags and inject <Footer />
app = app.replace(/<footer[\s\S]*?<\/footer>/, '<Footer />');
fs.writeFileSync('src/App.tsx', app, 'utf8');

console.log('Successfully completed DOM overwrites');