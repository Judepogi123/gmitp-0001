import { motion } from 'motion/react';
import { TabType } from '../types';

interface TabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string }[] = [
  { id: 'modules', label: 'Core Modules' },
  { id: 'workflow', label: 'Transaction Flow' },
  { id: 'roles', label: 'User Roles' },
  { id: 'reports', label: 'Compliance Reports' },
];

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex flex-wrap gap-2 p-4 md:px-8 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm sticky top-0 z-20">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            relative px-5 py-2 text-sm font-medium transition-colors
            ${activeTab === tab.id 
              ? 'text-white' 
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}
          `}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-slate-900 dark:bg-blue-600 rounded-full"
              transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
