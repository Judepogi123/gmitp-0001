import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-wider uppercase rounded-full"
          >
            Municipal Government
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold tracking-wider uppercase rounded-full"
          >
            Gasan, Marinduque
          </motion.span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white"
        >
          Municipal Accounting Information System
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 dark:text-slate-400 mt-2 text-sm max-w-2xl"
        >
          Integrated financial management platform compliant with the Philippine Government Accounting Manual (GAM) and Commission on Audit (COA) requirements.
        </motion.p>
      </div>
    </header>
  );
}
