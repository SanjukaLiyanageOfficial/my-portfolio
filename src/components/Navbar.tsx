import { motion, useScroll } from "framer-motion";
import { Sun, Moon, Menu, X, Rocket, Briefcase, GitBranch as GitIcon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/Sanjuka2000/", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Instagram", href: "https://www.instagram.com/sanjuka__/", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjukaliyanage/", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { label: "GitHub", href: "https://github.com/SanjukaLiyanageOfficial", path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
  { label: "WhatsApp", href: "https://wa.me/94705852167", path: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" },
  { label: "Email", href: "mailto:liyanagesanju36@gmail.com", path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
];

const navLinks = [
  { label: "Deployments", icon: Rocket, href: "#deployments" },
  { label: "Experience", icon: Briefcase, href: "#experience" },
  { label: "GitHub", icon: GitIcon, href: "https://github.com/SanjukaLiyanageOfficial", external: true },
];

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary via-indigo-400 to-secondary z-[9999] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-3 inset-x-0 z-[100] px-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 shadow-[0_4px_24px_rgba(0,0,0,0.07)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-colors duration-300">

          <a href="#hero" className="flex items-center shrink-0 group">
            <span className="font-handwriting text-2xl text-primary font-bold group-hover:text-indigo-700 transition-colors leading-none">Sanjuka</span>
            <span className="font-comic text-xl text-ink dark:text-slate-100 tracking-widest uppercase ml-1.5 pt-0.5 leading-none">LIYANAGE</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-all duration-200">
                  <Icon size={16} className="text-slate-400 group-hover:text-primary dark:group-hover:text-indigo-400 transition-colors" />
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden lg:flex items-center gap-2.5 text-slate-400 dark:text-slate-500">
              {socials.map((s) => (
                <a key={s.label} href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel={s.label !== "Email" ? "noreferrer" : undefined}
                  title={s.label}
                  className="hover:text-primary dark:hover:text-indigo-400 hover:scale-125 transition-all duration-150 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            <motion.button onClick={toggle}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:text-indigo-400 transition-all duration-200"
              aria-label="Toggle dark mode">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <a href="#contact"
              className="hidden sm:flex px-5 py-2 text-sm font-bold text-white bg-primary hover:bg-indigo-700 rounded-xl transition-all shadow-sm hover:shadow-[0_4px_16px_rgba(99,102,241,0.4)] hover:-translate-y-0.5">
              Contact
            </a>

            <button onClick={() => setMobileOpen(o => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl p-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  target={link.external ? "_blank" : undefined}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all">
                  <Icon size={16} className="text-slate-400" />
                  {link.label}
                </a>
              );
            })}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 mt-1">
              {socials.map((s) => (
                <a key={s.label} href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel={s.label !== "Email" ? "noreferrer" : undefined}
                  className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-primary px-2.5 py-1 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};