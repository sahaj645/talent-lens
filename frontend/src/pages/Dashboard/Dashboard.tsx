import React, { useEffect, useState } from 'react';
import { 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Target, 
  RefreshCcw,
  ArrowUpRight,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const StatCard: React.FC<{ title: string, value: string, icon: React.ReactNode, delta?: string, color: string }> = ({ title, value, icon, delta, color }) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    // Simple counter animation
    const target = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }
    
    let current = 0;
    const increment = Math.ceil(target / 20);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current.toLocaleString() + (value.includes('%') ? '%' : ''));
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="enterprise-card group transition-all duration-500">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg bg-${color}/10 text-${color} group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        {delta && (
          <div className="flex items-center gap-1 text-primary text-xs font-bold px-2 py-1 bg-primary/10 rounded-full">
            <TrendingUp size={12} />
            {delta}
          </div>
        )}
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1">{title}</p>
        <h3 className="text-3xl font-bold">{displayValue}</h3>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-5 h-5 rounded-full border border-black bg-secondary" />
          ))}
        </div>
        <span className="text-[10px] text-gray-500 font-medium">+12 analyzed today</span>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const skillData = [
    { name: 'Python', value: 92 },
    { name: 'Machine Learning', value: 88 },
    { name: 'React', value: 75 },
    { name: 'System Design', value: 82 },
    { name: 'AWS', value: 70 },
    { name: 'Docker', value: 65 },
  ];

  const pipelineData = [
    { name: 'Applications', count: 1240, color: '#444' },
    { name: 'Verified', count: 850, color: '#666' },
    { name: 'Matched', count: 420, color: '#86BC25' },
    { name: 'Interviewed', count: 120, color: '#A3D945' },
    { name: 'Hired', count: 45, color: '#86BC25' },
  ];

  const insights = [
    { text: "32% candidates exaggerate skills based on GitHub activity", type: "warning" },
    { text: "18 strong ML candidates discovered in last 48 hours", type: "success" },
    { text: "9 suspicious GitHub activity patterns flagged", type: "alert" },
    { text: "12 rediscovered candidates from old database match open roles", type: "info" }
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold mb-2">Recruiter Intelligence Overview</h1>
          <p className="text-gray-400">Welcome back, here's what's happening across your candidate pipeline.</p>
        </div>
        <div className="flex gap-4">
          <button className="enterprise-input flex items-center gap-2 hover:border-gray-500">
            <span>Last 30 Days</span>
            <ChevronRight size={14} className="rotate-90" />
          </button>
          <button className="enterprise-button-primary flex items-center gap-2 shadow-[0_0_20px_rgba(134,188,37,0.3)]">
            <RefreshCcw size={18} />
            Run Re-analysis
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatCard title="Total Candidates" value="2,540" icon={<Users size={24} />} delta="+12%" color="blue-400" />
        <StatCard title="Authentic Profiles" value="1,850" icon={<CheckCircle size={24} />} delta="+8%" color="primary" />
        <StatCard title="Suspicious Profiles" value="142" icon={<AlertTriangle size={24} />}  color="red-500" />
        <StatCard title="Avg Match Score" value="78%" icon={<Target size={24} />} color="yellow-400" />
        <StatCard title="Rediscovered" value="324" icon={<RefreshCcw size={24} />} delta="+24%" color="purple-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 enterprise-card">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <TrendingUp size={20} className="text-primary" />
              Skill Demand Trend
            </h3>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <div className="w-2 h-2 rounded-full bg-primary" /> Demand
              </span>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#111' }}
                  contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '8px' }}
                />
                <Bar dataKey="value" fill="#86BC25" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="enterprise-card border-primary/20 bg-primary/[0.02]">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
            <BrainCircuit size={22} className="text-primary" />
            AI Hiring Insights
          </h3>
          <div className="space-y-4">
            {insights.map((insight, i) => (
              <motion.div 
                key={i}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg bg-black/40 border border-border hover:border-primary/40 transition-colors group cursor-pointer"
              >
                <div className="flex gap-3">
                  <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                    insight.type === 'warning' ? 'bg-yellow-500' : 
                    insight.type === 'success' ? 'bg-primary' : 
                    insight.type === 'alert' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <p className="text-sm leading-relaxed text-gray-300 group-hover:text-white transition-colors">{insight.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-xs font-bold text-primary bg-primary/5 rounded-md hover:bg-primary/10 transition-colors border border-primary/10">
            VIEW ALL AI REPORTS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="enterprise-card">
            <h3 className="text-lg font-bold mb-8">Hiring Pipeline Funnel</h3>
            <div className="space-y-6">
              {pipelineData.map((item, i) => (
                <div key={item.name} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-400">{item.name}</span>
                    <span className="text-sm font-bold">{item.count}</span>
                  </div>
                  <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.count / pipelineData[0].count) * 100}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
         </div>

         <div className="enterprise-card flex flex-col justify-center items-center text-center py-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse">
               <BrainCircuit size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Enterprise AI Integration</h3>
            <p className="text-gray-400 max-w-sm mb-8">
              Connect your ATS, LinkedIn Recruiter, and GitHub Enterprise to unlock cross-platform intelligence.
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary text-white px-6 py-2 rounded-md font-bold text-sm border border-border hover:bg-card">
                CONNECT REPO
              </button>
              <button className="enterprise-button-primary text-sm">
                CONFIGURE AI
              </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;
