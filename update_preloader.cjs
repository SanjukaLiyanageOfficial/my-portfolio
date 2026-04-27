const fs = require('fs');

const preloaderContent = `import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const logSequence = [
    "[SYSTEM] Initiating boot sequence...",
    "[NETWORK] Resolving DNS routes... OK",
    "[AUTH] Validating IAM User Roles... OK",
    "[INFRA] Provisioning Kubernetes clusters...",
    "[INFRA] Scaling worker nodes to 100%... OK",
    "[DATA] Mounting cloud volumes... OK",
    "[SECURITY] Bypassing localized firewalls... WARN (Overridden)",
    "[UI] Injecting Framer Motion physics...",
    "[CORE] Compiling frontend assets...",
    "[SYSTEM] All systems nominal. Launching."
  ];

  useEffect(() => {
    let currentLog = 0;
    
    // Fast logging animation
    const logInterval = setInterval(() => {
      if (currentLog < logSequence.length) {
        setLogs(prev => [...prev, logSequence[currentLog]]);
        currentLog++;
      } else {
        clearInterval(logInterval);
      }
    }, 200);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 600); // give it a moment to finish exit animation
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 250);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  // Auto scroll terminal
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="w-full max-w-2xl px-6 relative z-10 flex flex-col items-center">
        
        {/* Terminal Window */}
        <div className="w-full bg-slate-50/80 backdrop-blur-md border border-indigo-100 rounded-2xl shadow-saas overflow-hidden flex flex-col h-64 md:h-80 relative">
          
          {/* Terminal Header */}
          <div className="h-10 bg-white border-b border-indigo-50 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="ml-4 text-xs font-mono font-bold text-slate-400 tracking-widest">DEPLOYMENT_LOGS.sh</span>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-6 overflow-hidden flex flex-col justify-end font-mono text-sm md:text-base">
            <AnimatePresence mode="popLayout">
              {logs.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-2"
                >
                  <span className="text-primary font-bold">{">"}</span> <span className={log.includes('WARN') ? 'text-amber-500' : 'text-slate-600'}>{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={logsEndRef} />
          </div>
        </div>

        {/* Progress Bar Area */}
        <div className="w-full mt-10">
          <div className="flex justify-between items-end mb-3 font-mono text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest">
            <span>Booting Infrastructure</span>
            <span className="text-primary text-xl font-black">{Math.min(progress, 100)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ type: "tween", ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};
`;

fs.writeFileSync('src/components/Preloader.tsx', preloaderContent, 'utf8');
console.log('Preloader Updated.');