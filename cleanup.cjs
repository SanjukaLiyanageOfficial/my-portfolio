const fs = require('fs');

// --- 1. CLEAN APP.TSX ---
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace("import { CustomCursor } from './components/CustomCursor';\n", "");
app = app.replace("      <CustomCursor />\n", "");
app = app.replace(" cursor-none", "");
fs.writeFileSync('src/App.tsx', app, 'utf8');

// --- 2. CLEAN INDEX.CSS ---
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/@media \(pointer: fine\) \{[\s\S]*?\}/, "");
fs.writeFileSync('src/index.css', css, 'utf8');

// --- 3. REWRITE NAVBAR.TSX TO GUARANTEE CLEAN EMOJIS ---
const navbarContent = `import { motion } from 'framer-motion';

const SocialIcon = ({ path }: { path: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={path}></path>
  </svg>
);

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/70 border-b border-slate-100 shadow-sm"
    >
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1.5"><span className="font-handwriting text-2xl text-primary font-bold">sachintha</span><span className="font-comic text-2xl text-ink tracking-widest pt-1">DAHAM</span></div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
        <a href="#deployments" className="hover:text-ink transition-colors flex items-center gap-1.5 hover:-translate-y-0.5 transform duration-200">
          Deployments 🚀
        </a>
        <a href="#experience" className="hover:text-ink transition-colors flex items-center gap-1.5 hover:-translate-y-0.5 transform duration-200">
          Experience 💼
        </a>
        <a href="https://github.com/SachinthaDaham" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors flex items-center gap-1.5 hover:-translate-y-0.5 transform duration-200">
          GitHub 🐙
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3 text-slate-400">
          <a href="https://www.facebook.com/dahams.sachintha/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <SocialIcon path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </a>
          <a href="https://www.instagram.com/daham_sachintha" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <SocialIcon path="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          </a>
          <a href="https://www.linkedin.com/in/sachinthadaham/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </a>
          <a href="https://github.com/SachinthaDaham" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </a>
          <a href="https://wa.me/94764220899" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <SocialIcon path="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </a>
          <a href="mailto:Dahamsachintha66@gmail.com" className="hover:text-primary transition-colors">
            <SocialIcon path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
          </a>
        </div>
        
        <a href="#contact" className="px-5 py-2 text-sm font-bold text-primary bg-white border-2 border-indigo-100 hover:border-primary rounded-xl transition-all shadow-sm">
          Contact
        </a>
      </div>
    </motion.nav>
  );
};
`;
fs.writeFileSync('src/components/Navbar.tsx', navbarContent, 'utf8');

// --- 4. CLEAN HERO.TSX (Remove AWS Badge & fix spacing/margins) ---
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
// remove the badge entirely
hero = hero.replace(/<motion\.div\s+initial=\{\{\s*opacity:\s*0,\s*y:\s*-20[\s\S]*?AWS Certified Architect<\/span>\s*<\/motion\.div>/, "");
// fix the 'architecting' -mb string to look cleaner
hero = hero.replace("-mb-4 md:-mb-8 tracking-tight pl-2", "-mb-2 tracking-tight pl-2 md:pl-4");
fs.writeFileSync('src/components/Hero.tsx', hero, 'utf8');
