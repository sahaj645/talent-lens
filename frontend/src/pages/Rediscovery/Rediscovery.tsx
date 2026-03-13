import React, { useState } from 'react';
import { 
  RefreshCw, 
  History, 
  ArrowUpRight, 
  ChevronRight, 
  Search,
  Filter,
  BrainCircuit,
  TrendingUp,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { mockCandidates } from '../../utils/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const Rediscovery: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  
  const rediscoveryCandidates = mockCandidates.slice(0, 6).map(c => ({
    ...c,
    oldScore: Math.floor(Math.random() * 20) + 50,
    newScore: Math.floor(Math.random() * 20) + 75,
    growth: Math.floor(Math.random() * 15) + 10,
    timePassed: "10 months ago"
  }));

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1">Talent Rediscovery</h1>
          <p className="text-gray-400">Re-analyze past applicants against new requirements and market growth.</p>
        </div>
        <button 
          onClick={startScan}
          disabled={isScanning}
          className="enterprise-button-primary flex items-center gap-2 relative overflow-hidden group"
        >
          {isScanning ? (
            <RefreshCw size={18} className="animate-spin" />
          ) : (
            <BrainCircuit size={18} />
          )}
          {isScanning ? "RE-ANALYZING TALENT POOL..." : "IDENTIFY GROWTH PATTERNS"}
          {isScanning && (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-white/20"
            />
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="enterprise-card border-l-4 border-l-purple-500">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                  <History size={24} />
               </div>
               <span className="text-xs font-bold text-gray-500 italic">LAST 12 MONTHS</span>
            </div>
            <h3 className="text-3xl font-black mb-1">1,240</h3>
            <p className="text-gray-400 text-sm">Candidates Re-analyzed</p>
         </div>
         
         <div className="enterprise-card border-l-4 border-l-primary">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <TrendingUp size={24} />
               </div>
               <span className="text-xs font-bold text-primary italic">CRITICAL DISCOVERY</span>
            </div>
            <h3 className="text-3xl font-black mb-1">42</h3>
            <p className="text-gray-400 text-sm">High-Growth Matches Found</p>
         </div>

         <div className="enterprise-card border-l-4 border-l-blue-500">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-blue-500/10 text-primary rounded-lg text-blue-400">
                  <Clock size={24} />
               </div>
               <span className="text-xs font-bold text-gray-500 italic">AVG TIME SAVED</span>
            </div>
            <h3 className="text-3xl font-black mb-1">64 hrs</h3>
            <p className="text-gray-400 text-sm">Per Hiring Cycle</p>
         </div>
      </div>

      <div className="enterprise-card overflow-hidden">
        <div className="px-6 py-8 border-b border-border bg-secondary/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
              <h2 className="text-xl font-bold">Recommended for Reconsideration</h2>
              <p className="text-sm text-gray-400">These candidates have significantly improved their skill profiles since last contact.</p>
           </div>
           <div className="flex gap-3">
              <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                 <input className="bg-black border border-border rounded-md py-2 pl-10 pr-4 text-xs w-64" placeholder="Filter by skill or name..." />
              </div>
              <button className="enterprise-input py-0 px-3 flex items-center gap-2">
                 <Filter size={14} />
                 Sort: Match delta
              </button>
           </div>
        </div>

        <div className="divide-y divide-border">
           {rediscoveryCandidates.map((candidate) => (
             <motion.div 
               key={candidate.id}
               className="p-8 hover:bg-white/[0.02] transition-colors flex flex-col lg:flex-row lg:items-center gap-8"
             >
                <div className="flex items-center gap-4 min-w-[300px]">
                   <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-xl font-bold border border-border">
                      {candidate.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="text-lg font-bold">{candidate.name}</h4>
                      <p className="text-xs text-gray-500 italic">Rejected {candidate.timePassed}</p>
                   </div>
                </div>

                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
                   <div className="text-center">
                      <p className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-widest italic">Old Score</p>
                      <span className="text-2xl font-bold text-gray-600 line-through">{candidate.oldScore}%</span>
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-widest italic">Current Score</p>
                      <span className="text-2xl font-black text-primary">{candidate.newScore}%</span>
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-widest italic">Growth</p>
                      <div className="flex items-center justify-center gap-1 text-primary">
                         <TrendingUp size={16} />
                         <span className="text-xl font-black">+{candidate.growth}%</span>
                      </div>
                   </div>
                   <div className="hidden md:block">
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-2 tracking-widest">New verified skills</p>
                      <div className="flex flex-wrap gap-1">
                         {candidate.skills.slice(0, 2).map(s => (
                           <span key={s} className="px-1.5 py-0.5 bg-primary/10 text-[9px] text-primary border border-primary/20 rounded font-bold uppercase">{s}</span>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="flex gap-3">
                   <button className="px-6 py-2 bg-secondary border border-border text-white text-xs font-bold rounded-md hover:bg-card hover:border-primary transition-all flex items-center gap-2">
                      <RefreshCw size={14} /> RE-SCREEN
                   </button>
                   <button className="enterprise-button-primary text-xs py-2 px-6 flex items-center gap-2">
                      <CheckCircle2 size={14} /> ADD TO PIPELINE
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Rediscovery;
