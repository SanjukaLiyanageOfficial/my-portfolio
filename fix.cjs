const fs = require('fs');

// 1. Fix Philosophy.tsx
let phi = fs.readFileSync('src/components/Philosophy.tsx', 'utf8');
phi = phi.replace(/ðŸ‘¨â€ ðŸ’»/g, '👨‍💻');
phi = phi.replace(/ðŸ¤®/g, '🤮');
phi = phi.replace(/ðŸ˜…/g, '😅');
phi = phi.replace(/ðŸ§‘â€ ðŸ”¬/g, '🧑‍🔬');
phi = phi.replace(/ðŸ‘‡/g, '👇');
fs.writeFileSync('src/components/Philosophy.tsx', phi, 'utf8');

// 2. Make Deployments (Projects) more unique -> Bento Box Grid
let dep = fs.readFileSync('src/components/Deployments.tsx', 'utf8');
// Update grid container and add complex col-span based on index
const bentoGridContainer = <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[minmax(350px,auto)]">;
dep = dep.replace(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">/, bentoGridContainer);
const oldCardWrapper = /className="group relative h-full bg-white dark:bg-slate-900\\/80 backdrop-blur-md/g;
const newCardWrapper = 'className={group relative h-full bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] p-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 }';
// Replace the exact className string in the map
dep = dep.replace(/className="group relative h-full bg-white dark:bg-slate-900\\/80 backdrop-blur-md rounded-\\[2rem\\] p-1 shadow-\\[0_10px_40px_-10px_rgba\\(0,0,0,0\\.08\\)\\] dark:shadow-\\[0_10px_40px_-10px_rgba\\(0,0,0,0\\.4\\)\\] transition-all duration-300"/g, newCardWrapper);
fs.writeFileSync('src/components/Deployments.tsx', dep, 'utf8');

console.log('Update Complete');
