interface Tool {
  name: string;
  color: string;
  icon: string; // devicon class
}

const tools: Tool[] = [
  { name: "React",          color: "#61DAFB", icon: "devicon-react-original colored" },
  { name: "Next.js",        color: "#ffffff", icon: "devicon-nextjs-plain" },
  { name: "Node.js",        color: "#339933", icon: "devicon-nodejs-plain colored" },
  { name: "JavaScript",     color: "#F7DF1E", icon: "devicon-javascript-plain colored" },
  { name: "Java",           color: "#ED8B00", icon: "devicon-java-plain colored" },
  { name: "Python",         color: "#3776AB", icon: "devicon-python-plain colored" },
  { name: "Kotlin",         color: "#7F52FF", icon: "devicon-kotlin-plain colored" },
  { name: "Dart",           color: "#0175C2", icon: "devicon-dart-plain colored" },
  { name: "Flutter",        color: "#02569B", icon: "devicon-flutter-plain colored" },
  { name: "MongoDB",        color: "#47A248", icon: "devicon-mongodb-plain colored" },
  { name: "MySQL",          color: "#4479A1", icon: "devicon-mysql-plain colored" },
  { name: "Tailwind CSS",   color: "#06B6D4", icon: "devicon-tailwindcss-plain colored" },
  { name: "HTML5",          color: "#E34F26", icon: "devicon-html5-plain colored" },
  { name: "CSS3",           color: "#1572B6", icon: "devicon-css3-plain colored" },
  { name: ".NET",           color: "#512BD4", icon: "devicon-dot-net-plain colored" },
  { name: "Git",            color: "#F05032", icon: "devicon-git-plain colored" },
  { name: "GitHub",         color: "#ffffff", icon: "devicon-github-original" },
  { name: "Figma",          color: "#F24E1E", icon: "devicon-figma-plain colored" },
  { name: "Android Studio", color: "#3DDC84", icon: "devicon-androidstudio-plain colored" },
  { name: "Postman",        color: "#FF6C37", icon: "devicon-postman-plain colored" },
  { name: "VS Code",        color: "#007ACC", icon: "devicon-vscode-plain colored" },
];

// Double for seamless loop
const doubled = [...tools, ...tools];

export const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-ink py-6" aria-hidden="true">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink via-ink/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink via-ink/80 to-transparent z-10 pointer-events-none" />

      {/* Subtle glow lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="animate-marquee whitespace-nowrap">
        {doubled.map((tool, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-8 cursor-default group"
          >
            <i
              className={`${tool.icon} text-2xl transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_currentColor]`}
              style={{ color: tool.color }}
            />
            <span
              className="text-sm font-bold font-mono uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors duration-300"
            >
              {tool.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
