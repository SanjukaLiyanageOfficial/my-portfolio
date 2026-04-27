import sys

file_path = r'src\components\Contact.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

prefix = content.split('].map((card, i) => (')[0]
suffix_split = content.split('            ))}')[1]
suffix = '            ))}' + suffix_split[0:] # keeping original indentation logic by splitting properly

if len(content.split('].map((card, i) => (')) != 2:
    print('Could not find split string')
    sys.exit(1)

# Now we inject the new mapped cards:
new_cards = '''].map((card, i) => (
              <motion.a key={card.label} href={card.href} target={(card as any).target} rel={(card as any).target ? "noreferrer" : undefined}
                initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.5 }}
                whileHover={{ y:-4 }}
                className="relative overflow-hidden bg-white dark:bg-[#0c101a] border border-slate-200/60 dark:border-slate-800/60 p-5 md:p-6 flex items-center gap-5 rounded-2xl shadow-sm group hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:shadow-saas transition-all duration-300 select-none">
                
                {/* Glow ring on hover */}
                <div className={bsolute -right-8 -top-8 w-40 h-40 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 dark:group-hover:opacity-10 transition-opacity duration-500 pointer-events-none  dark:} />
                
                <div className={elative z-10 w-14 h-14   rounded-[14px] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:rotate-6 transition-transform duration-500 shadow-sm border border-white/50 dark:border-slate-700/30}>
                  <card.icon size={22} className="opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="relative z-10 w-full flex justify-between items-center transition-transform duration-300">
                  <div className="flex flex-col gap-0.5 transform group-hover:translate-x-1 transition-transform duration-300">
                    <p className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">{card.label}</p>
                    <p className="text-slate-800 dark:text-slate-100 font-bold font-mono text-[13px] md:text-sm">{card.value}</p>
                  </div>
                  <div className={w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white dark:group-hover:bg-slate-800  shadow-sm -translate-x-4 group-hover:translate-x-0 bg-slate-50 dark:bg-slate-800/50 shrink-0}>
                     <ArrowUpRight size={14} /> 
                  </div>
                </div>
              </motion.a>
            ))}'''

new_content = prefix + new_cards + suffix_split

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Updated successfully")
