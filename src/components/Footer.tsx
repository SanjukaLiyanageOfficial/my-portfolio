import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <section className="relative bg-[#ECEEF0] overflow-hidden flex flex-col justify-between" style={{ minHeight: '370px' }}>

      {/* TOP ROW — stacks on mobile, side-by-side on md+ */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between px-6 sm:px-12 md:px-[72px] pt-12 pb-8 md:pb-0 gap-8 md:gap-4" style={{ minHeight: '260px' }}>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }}
          className="flex-shrink-0 max-w-sm"
        >
          <h2 className="m-0 p-0 leading-tight mb-4">
            <span style={{ fontFamily: "'Bangers', cursive", fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 400, color: '#0D0D14', letterSpacing: '0.04em', display: 'block' }}>
              I ain&apos;t a{' '}
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(2.2rem, 6.5vw, 4.2rem)', fontWeight: 700, color: '#4338ca', fontStyle: 'italic' }}>typical</span>
            </span>
            <span style={{ fontFamily: "'Bangers', cursive", fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 400, color: '#0D0D14', letterSpacing: '0.04em', display: 'block' }}>
              engineer.
            </span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', color: '#505870', fontWeight: 600, lineHeight: 1.75, margin: 0 }}>
            whatever your problem,<br />
            let&apos;s architecturally solve &amp; engineer it<br />
            from the depth of its infrastructure.
          </p>
        </motion.div>

        {/* RIGHT — contact links */}
        <motion.div
          initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
          className="flex flex-col items-start md:items-end gap-2 max-w-full"
        >
          <motion.a
            href="tel:+94705852167"
            whileHover={{ scale: 1.04, x: -5 }}
            className="block text-right"
            style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(1.8rem, 5vw, 3.6rem)', fontWeight: 700, color: '#4338ca', textDecoration: 'none', lineHeight: 1.05, filter: 'drop-shadow(0 3px 6px rgba(67,56,202,0.18))' }}
          >
            (+94) 70 585 2167
          </motion.a>
          <motion.a
            href="mailto:liyanagesanju36@gmail.com"
            whileHover={{ scale: 1.02, x: -5 }}
            className="block text-left md:text-right break-all"
            style={{ fontFamily: "'Bangers', cursive", fontSize: 'clamp(0.95rem, 2.5vw, 2rem)', fontWeight: 400, color: '#0D0D14', textDecoration: 'none', letterSpacing: '0.07em', lineHeight: 1.15 }}
          >
            LIYANAGESANJU36@GMAIL.COM
          </motion.a>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-12 md:px-[72px] py-4 border-t border-black/[0.06]">
        <div className="flex items-center gap-1">
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.25rem', color: '#4338ca', fontWeight: 700 }}>sanjuka</span>
          <span style={{ fontFamily: "'Bangers', cursive", fontSize: '1.25rem', color: '#0D0D14', letterSpacing: '0.12em', marginLeft: '4px' }}>LIYANAGE</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-5 text-[0.78rem] font-bold text-slate-500" style={{ fontFamily: "'Inter', sans-serif" }}>
          <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
          <span className="text-slate-300">•</span>
          <a href="#" className="hover:text-indigo-600 transition-colors">Terms &amp; Conditions</a>
        </div>
        <div className="text-[0.72rem] font-bold text-slate-400 uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>
          © 2026 Sanjuka Liyanage
        </div>
      </div>

    </section>
  );
};