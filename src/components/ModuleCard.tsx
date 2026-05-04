import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  isActive: boolean;
  onClick: () => void;
}

export default function ModuleCard({ module, isActive, onClick }: ModuleCardProps) {
  const IconComponent = (Icons as any)[module.icon];

  return (
    <motion.div
      layout
      onClick={onClick}
      className={`
        relative p-5 rounded-2xl cursor-pointer border transition-all duration-200
        ${isActive 
          ? 'border-blue-500 shadow-lg bg-white dark:bg-slate-900 z-10' 
          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'}
      `}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col gap-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${module.color}`}>
          {IconComponent && <IconComponent className={`w-6 h-6 ${module.isActive ? 'text-blue-600' : 'text-slate-600 dark:text-slate-300'}`} />}
        </div>
        
        <div>
          <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white leading-tight">
            {module.title}
          </h3>
          <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
            {module.description}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
            {module.count}
          </span>
          {isActive && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-1.5 h-1.5 rounded-full bg-blue-500"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
