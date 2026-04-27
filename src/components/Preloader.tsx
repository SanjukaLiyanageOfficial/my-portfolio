import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const calledRef = useRef(false);

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
    let i = 0;
    const logTimer = setInterval(() => {
      if (i < logSequence.length) {
        const entry = logSequence[i];
        setLogs(prev => [...prev, entry]);
        i++;
      } else {
        clearInterval(logTimer);
      }
    }, 220);

    let p = 0;
    const progressTimer = setInterval(() => {
      p = Math.min(p + Math.floor(Math.random() * 12) + 6, 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(progressTimer);
        setDone(true);
      }
    }, 260);

    return () => {
      clearInterval(logTimer);
      clearInterval(progressTimer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (done && !calledRef.current) {
      calledRef.current = true;
      const t = setTimeout(() => onComplete(), 700);
      return () => clearTimeout(t);
    }
  }, [done, onComplete]);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white font-sans"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Purple / Indigo ambient orbs */}
      <div className="absolute top-[8%] right-[8%] w-[28vh] h-[28vh] bg-purple-200 rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-[8%] left-[8%] w-[38vh] h-[38vh] bg-indigo-200 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="w-full max-w-2xl px-6 relative z-10 flex flex-col items-center gap-8">

        {/* Terminal window */}
        <div className="w-full rounded-2xl overflow-hidden border border-indigo-100 shadow-[0_20px_60px_-10px_rgba(99,102,241,0.25)] flex flex-col h-72">

          {/* Title bar */}
          <div className="h-10 bg-slate-50 border-b border-indigo-100 flex items-center px-4 gap-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-xs font-mono font-bold text-slate-400 tracking-widest">system_boot.sh</span>
          </div>

          {/* Log body */}
          <div className="flex-1 bg-white/80 backdrop-blur-sm p-5 overflow-hidden flex flex-col">
            <AnimatePresence mode="popLayout">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mb-1.5 font-mono text-sm whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  <span className="text-indigo-500 font-bold mr-2">$</span>
                  <span className={log.includes('WARN') ? 'text-amber-500 font-semibold' : 'text-slate-700'}>
                    {log}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={logsEndRef} />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-lg">
          <div className="flex justify-between mb-2 font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
            <span>Booting Infrastructure</span>
            <span className="text-indigo-500">{Math.min(progress, 100)}%</span>
          </div>
          <div className="w-full h-1.5 bg-indigo-50 rounded-full border border-indigo-100 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};