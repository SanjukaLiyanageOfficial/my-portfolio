import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <section style={{ position: 'relative', background: '#ECEEF0', overflow: 'hidden', minHeight: '370px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

      {/* Subtle ambient top-left glow */}
      <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(199,210,254,0.5) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />

      {/* TOP ROW */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '52px 72px 0', minHeight: '260px' }}>

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} style={{ flex: '0 0 auto', maxWidth: '380px' }}>
          <h2 style={{ margin: 0, padding: 0, lineHeight: 1.0, marginBottom: '18px' }}>
            <span style={{ fontFamily: "'Bangers', cursive", fontSize: 'clamp(2.8rem, 4.5vw, 4rem)', fontWeight: 400, color: '#0D0D14', letterSpacing: '0.04em', display: 'block' }}>
              I ain&apos;t a{' '}
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(3rem, 5vw, 4.2rem)', fontWeight: 700, color: '#4338ca', fontStyle: 'italic' }}>typical</span>
            </span>
            <span style={{ fontFamily: "'Bangers', cursive", fontSize: 'clamp(2.8rem, 4.5vw, 4rem)', fontWeight: 400, color: '#0D0D14', letterSpacing: '0.04em', display: 'block' }}>
              engineer.
            </span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', color: '#505870', fontWeight: 600, lineHeight: 1.75, margin: 0 }}>
            whatever your problem,<br />
            let&apos;s architecturally solve &amp; engineer it<br />
            from the depth of its infrastructure.
          </p>
        </motion.div>

        {/* CENTER spacer â€” planet is absolute */}
        <div style={{ flex: 1 }} />

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }} style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', maxWidth: '440px' }}>
          <motion.a
            href="tel:+94705852167"
            whileHover={{ scale: 1.04, x: -5 }}
            style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 700, color: '#4338ca', textDecoration: 'none', lineHeight: 1.05, display: 'block', textAlign: 'right', filter: 'drop-shadow(0 3px 6px rgba(67,56,202,0.18))' }}
          >
            (+94) 70 585 2167
          </motion.a>
          <motion.a
            href="mailto:liyanagesanju36@gmail.com"
            whileHover={{ scale: 1.02, x: -5 }}
            style={{ fontFamily: "'Bangers', cursive", fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400, color: '#0D0D14', textDecoration: 'none', letterSpacing: '0.07em', lineHeight: 1.15, display: 'block', textAlign: 'right' }}
          >
            LIYANAGESANJU36@GMAIL.COM
          </motion.a>
        </motion.div>
      </div>

      {/* ===== PLANET SCENE ===== */}
      <div style={{ position: 'absolute', bottom: '44px', left: '50%', transform: 'translateX(-52%)', zIndex: 5 }}>

        {/* Outer orbit ring (decorative) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            bottom: '-215px', left: '50%', transform: 'translateX(-50%)',
            width: '620px', height: '620px',
            borderRadius: '50%',
            border: '1.5px dashed rgba(129,140,248,0.25)',
            pointerEvents: 'none',
          }}
        >
          {/* Orbit dot */}
          <div style={{ position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '10px', borderRadius: '50%', background: '#818cf8', boxShadow: '0 0 10px rgba(129,140,248,0.8)' }} />
        </motion.div>

        {/* PLANET */}
        <div style={{
          position: 'absolute',
          bottom: '-230px', left: '50%', transform: 'translateX(-50%)',
          width: '560px', height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at 37% 28%, #ddd6fe 0%, #a5b4fc 16%, #818cf8 34%, #4f46e5 54%, #3730a3 74%, #1e1b4b 100%)',
          boxShadow: '0 -8px 80px rgba(139,92,246,0.3), 0 0 120px rgba(67,56,202,0.12)',
        }}>
          {/* Gloss */}
          <div style={{ position: 'absolute', top: '8%', left: '19%', width: '140px', height: '90px', borderRadius: '50%', background: 'rgba(255,255,255,0.22)', filter: 'blur(20px)', pointerEvents: 'none' }} />
          {/* Equator band */}
          <div style={{ position: 'absolute', top: '44%', left: '5%', right: '5%', height: '18px', borderRadius: '50%', background: 'rgba(168,139,250,0.18)', filter: 'blur(6px)' }} />

          {/* White egg 1 */}
          <div style={{ position: 'absolute', bottom: '31%', left: '14%', width: '82px', height: '106px', background: 'linear-gradient(145deg, #fff 55%, #dde4ff 100%)', borderRadius: '50% 50% 48% 48% / 58% 58% 42% 42%', transform: 'rotate(-13deg)', boxShadow: '4px 8px 24px rgba(0,0,0,0.13)' }} />
          {/* White egg 2 */}
          <div style={{ position: 'absolute', bottom: '29%', left: '31%', width: '46px', height: '60px', background: 'linear-gradient(145deg, #fff 55%, #e8edff 100%)', borderRadius: '50% 50% 48% 48% / 58% 58% 42% 42%', transform: 'rotate(7deg)', boxShadow: '2px 5px 14px rgba(0,0,0,0.11)' }} />
        </div>

        {/* UFO */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '18px', left: '53%', transform: 'translateX(-50%)' }}
        >
          {/* Dome */}
          <div style={{ position: 'absolute', top: '-32px', left: '50%', transform: 'translateX(-50%)', width: '58px', height: '34px', background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, #c4b5fd 55%, #818cf8 100%)', borderRadius: '50% 50% 0 0', boxShadow: 'inset 0 4px 14px rgba(255,255,255,0.55), 0 0 20px rgba(167,139,250,0.4)' }} />
          {/* Saucer body */}
          <div style={{ width: '136px', height: '38px', background: 'linear-gradient(180deg, #c4b5fd 0%, #818cf8 40%, #4338ca 100%)', borderRadius: '50%', position: 'relative', boxShadow: '0 10px 40px rgba(99,102,241,0.6), 0 0 30px rgba(139,92,246,0.3)' }}>
            <div style={{ position: 'absolute', top: '6px', left: '16px', right: '16px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', filter: 'blur(3px)' }} />
          </div>
          {/* Spotlight */}
          <div style={{ position: 'absolute', top: '36px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '38px solid transparent', borderRight: '38px solid transparent', borderTop: '190px solid rgba(255,255,255,0.16)', filter: 'blur(6px)' }} />
          {/* UFO glow */}
          <div style={{ position: 'absolute', top: '0px', left: '50%', transform: 'translateX(-50%)', width: '140px', height: '20px', borderRadius: '50%', background: 'rgba(139,92,246,0.35)', filter: 'blur(12px)', pointerEvents: 'none' }} />
        </motion.div>

        {/* Satellite orb */}
        <motion.div
          animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          style={{ position: 'absolute', top: '48%', right: '-22px', width: '54px', height: '54px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 32%, #6366f1 0%, #1e1b4b 100%)', boxShadow: '0 8px 28px rgba(79,70,229,0.5), 0 0 20px rgba(99,102,241,0.3)' }}
        />
      </div>

      {/* BOTTOM BAR */}
      <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '14px 72px 18px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.25rem', color: '#4338ca', fontWeight: 700 }}>sanjuka</span>
          <span style={{ fontFamily: "'Bangers', cursive", fontSize: '1.25rem', color: '#0D0D14', letterSpacing: '0.12em', marginLeft: '4px' }}>LIYANAGE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.78rem', fontWeight: 700, color: '#64748b', fontFamily: "'Inter', sans-serif" }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <span style={{ color: '#94a3b8' }}>â€¢</span>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms &amp; Conditions</a>
        </div>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          © 2026 Sanjuka Liyanage
        </div>
      </div>

    </section>
  );
};