import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { TabType } from './types';
import { modules, roles, workflows, reportsList } from './data/maisData';
import Header from './components/Header';
import Tabs from './components/Tabs';
import ModuleCard from './components/ModuleCard';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('modules');
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);

  const activeModule = modules.find(m => m.id === activeModuleId);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto p-6 md:p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'modules' && (
            <motion.div
              key="modules-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Stats Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Core Modules', value: '10', icon: 'Layers' },
                  { label: 'User Roles', value: '8', icon: 'UserCheck' },
                  { label: 'Report Types', value: '24', icon: 'ClipboardList' },
                  { label: 'Audit Ready', value: 'COA', icon: 'ShieldCheck' },
                ].map((stat, i) => {
                  const Icon = (Icons as any)[stat.icon];
                  return (
                    <div key={i} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Module Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {modules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    isActive={activeModuleId === module.id}
                    onClick={() => setActiveModuleId(activeModuleId === module.id ? null : module.id)}
                  />
                ))}
              </div>

              {/* Detail Panel */}
              <AnimatePresence>
                {activeModule && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 20 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 md:p-8 shadow-xl shadow-blue-500/5">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeModule.color}`}>
                            {(() => {
                              const Icon = (Icons as any)[activeModule.icon];
                              return <Icon className="w-6 h-6 text-slate-700 dark:text-slate-200" />;
                            })()}
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                              {activeModule.title}
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Detailed sub-modules & system features
                            </p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setActiveModuleId(null)}
                          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          <Icons.X className="w-5 h-5 text-slate-400" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {activeModule.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800"
                          >
                            <div className={`w-2 h-2 rounded-full ${activeModule.dotColor}`} />
                            <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {activeTab === 'workflow' && (
            <motion.div
              key="workflow-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icons.GitBranch className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Core Transaction Workflows</h2>
              </div>

              {workflows.map((workflow, i) => (
                <div 
                  key={i} 
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm overflow-x-auto"
                >
                  <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white mb-4">
                    {workflow.title}
                  </h3>
                  <div className="flex items-center gap-2 min-w-max pb-2">
                    {workflow.steps.map((step, si) => (
                      <div key={si} className="flex items-center gap-2">
                        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[13px] font-medium text-slate-700 dark:text-slate-300">
                          {step}
                        </div>
                        {si < workflow.steps.length - 1 && (
                          <Icons.ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-4 italic bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg inline-block">
                    {workflow.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'roles' && (
            <motion.div
              key="roles-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icons.ShieldCheck className="w-6 h-6 text-emerald-500" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">User Roles & Access Control</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {roles.map((role, i) => (
                  <div 
                    key={i}
                    className="p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${role.color}15` }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: role.color }} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{role.name}</h3>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      {role.access}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'reports' && (
            <motion.div
              key="reports-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icons.FileText className="w-6 h-6 text-amber-500" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Financial & Compliance Reports</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {reportsList.map((report, i) => {
                  const colors = ['bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-indigo-500', 'bg-teal-500'];
                  const dotColor = colors[i % colors.length];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.02 }}
                      className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${dotColor}`} />
                      <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{report}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-12 py-12 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-slate-400 text-xs tracking-tight">
            Municipal Accounting Information System (MAIS) — Gasan, Marinduque
          </p>
          <p className="text-slate-300 dark:text-slate-700 text-[10px] mt-2">
            Fully interactive architecture visualization. Developed for government accounting efficiency.
          </p>
        </div>
      </footer>
    </div>
  );
}
