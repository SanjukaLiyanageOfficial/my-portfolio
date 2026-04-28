const fs = require('fs');

let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Add Download to lucide-react import
hero = hero.replace("import { Terminal, Cpu, Database, Cloud }", "import { Terminal, Cpu, Database, Cloud, Download }");

// Add button next to GitHub Profile
const newButton = `
          <a href="/SanjukaLiyanage_CV_2026.pdf" download="SanjukaLiyanage_CV_2026.pdf" className="px-8 py-4 bg-transparent hover:bg-indigo-50 border-2 border-primary text-primary rounded-xl font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
            <Download size={20} />
            Download CV
          </a>`;

hero = hero.replace('GitHub Profile\n          </a>', 'GitHub Profile\n          </a>' + newButton);

fs.writeFileSync('src/components/Hero.tsx', hero, 'utf8');