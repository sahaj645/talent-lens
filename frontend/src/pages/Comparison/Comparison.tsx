import React, { useState } from 'react';
import { 
  GitMerge, 
  ChevronRight, 
  ArrowRightLeft, 
  ShieldCheck, 
  BrainCircuit,
  Zap,
  Target
} from 'lucide-react';
import { mockCandidates } from '../../utils/mockData';
import { motion } from 'framer-motion';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

const Comparison: React.FC = () => {
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>(['1', '2']);
  
  const c1 = mockCandidates.find(c => c.id === selectedCandidates[0]) || mockCandidates[0];
  const c2 = mockCandidates.find(c => c.id === selectedCandidates[1]) || mockCandidates[1];

  const radarData = [
    { subject: 'Skill Match', A: c1.matchScore, B: c2.matchScore, fullMark: 100 },
    { subject: 'GitHub Act.', A: 85, B: 65, fullMark: 100 },
    { subject: 'Experience', A: 90, B: 70, fullMark: 100 },
    { subject: 'Project Depth', A: 95, B: 80, fullMark: 100 },
    { subject: 'Authenticity', A: c1.authenticityScore, B: c2.authenticityScore, fullMark: 100 },
    { subject: 'Risk Factor', A: 100 - c1.riskScore, B: 100 - c2.riskScore, fullMark: 100 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1 font-sans">Candidate Comparison</h1>
          <p className="text-gray-400">Side-by-side behavioral and technical intelligence comparison.</p>
        </div>
        <div className="flex gap-4">
           <button className="enterprise-input flex items-center gap-2">
              <Zap size={16} className="text-primary" />
              AI Recommendation
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Candidate */}
        <div className="lg:col-span-4">
           <div className={`enterprise-card h-full ${c1.matchScore > c2.matchScore ? 'border-primary shadow-[0_0_30px_rgba(134,188,37,0.1)]' : ''}`}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-2xl font-black text-primary border border-border">
                   {c1.name.charAt(0)}
                 </div>
                 <div>
                    <h3 className="text-xl font-bold">{c1.name}</h3>
                    <p className="text-sm text-gray-500">{c1.role}</p>
                 </div>
                 {c1.matchScore > c2.matchScore && (
                   <div className="ml-auto p-2 bg-primary/10 text-primary rounded-full">
                      <ShieldCheck size={20} />
                   </div>
                 )}
              </div>

              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-sm mb-2">
                       <span className="text-gray-400">Overall Match</span>
                       <span className="font-black text-primary">{c1.matchScore}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                       <div className="h-full bg-primary" style={{ width: `${c1.matchScore}%` }} />
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/30 rounded-lg border border-border text-center">
                       <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Authenticity</p>
                       <p className="text-xl font-black">{c1.authenticityScore}%</p>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg border border-border text-center">
                       <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Experience</p>
                       <p className="text-xl font-black">{c1.experience}Y</p>
                    </div>
                 </div>

                 <div className="enterprise-card bg-primary/[0.02] border-primary/20 py-4">
                    <h4 className="text-xs font-bold text-primary flex items-center gap-2 mb-3">
                       <BrainCircuit size={14} /> AI STRENGTHS
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                       <li className="flex gap-2">
                          <span className="text-primary">•</span> 
                          Highly active GitHub contributor with architectural depth.
                       </li>
                       <li className="flex gap-2">
                          <span className="text-primary">•</span> 
                          Verified proficiency in complex ML architectures.
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>

        {/* Radar Chart Center */}
        <div className="lg:col-span-4 enterprise-card bg-transparent border-none flex flex-col items-center justify-center py-0">
           <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
              <ArrowRightLeft size={20} className="text-primary" />
              Metrics Breakdown
           </h3>
           <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                 <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                   <PolarGrid stroke="#222" />
                   <PolarAngleAxis dataKey="subject" tick={{ fill: '#555', fontSize: 10 }} />
                   <Radar
                     name={c1.name}
                     dataKey="A"
                     stroke="#86BC25"
                     fill="#86BC25"
                     fillOpacity={0.4}
                   />
                   <Radar
                     name={c2.name}
                     dataKey="B"
                     stroke="#A3D945"
                     fill="#A3D945"
                     fillOpacity={0.2}
                   />
                 </RadarChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Right Candidate */}
        <div className="lg:col-span-4">
           <div className={`enterprise-card h-full ${c2.matchScore > c1.matchScore ? 'border-primary shadow-[0_0_30px_rgba(134,188,37,0.1)]' : ''}`}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-2xl font-black text-gray-400 border border-border">
                   {c2.name.charAt(0)}
                 </div>
                 <div>
                    <h3 className="text-xl font-bold">{c2.name}</h3>
                    <p className="text-sm text-gray-500">{c2.role}</p>
                 </div>
                 {c2.matchScore > c1.matchScore && (
                   <div className="ml-auto p-2 bg-primary/10 text-primary rounded-full">
                      <ShieldCheck size={20} />
                   </div>
                 )}
              </div>

              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-sm mb-2">
                       <span className="text-gray-400">Overall Match</span>
                       <span className="font-black text-yellow-400">{c2.matchScore}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                       <div className="h-full bg-yellow-400" style={{ width: `${c2.matchScore}%` }} />
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/30 rounded-lg border border-border text-center">
                       <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Authenticity</p>
                       <p className="text-xl font-black">{c2.authenticityScore}%</p>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg border border-border text-center">
                       <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Experience</p>
                       <p className="text-xl font-black">{c2.experience}Y</p>
                    </div>
                 </div>

                 <div className="enterprise-card bg-secondary/20 py-4">
                    <h4 className="text-xs font-bold text-gray-400 flex items-center gap-2 mb-3">
                       <BrainCircuit size={14} /> AI OBSERVATIONS
                    </h4>
                    <ul className="text-xs text-gray-500 space-y-2">
                       <li className="flex gap-2">
                          <span className="text-yellow-400">•</span> 
                          Solid enterprise experience, but lower OSS activity.
                       </li>
                       <li className="flex gap-2">
                          <span className="text-yellow-400">•</span> 
                          Missing critical evidence for claimed "Deep Learning" skills.
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="enterprise-card border-primary/40 bg-primary/[0.05] p-8 flex flex-col md:flex-row items-center gap-8">
         <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-background">
            <Target size={32} />
         </div>
         <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-black mb-2 uppercase tracking-tight">AI Recommendation Engine</h3>
            <p className="text-gray-400">
              Based on the analysis of technical depth, OSS contribution patterns, and role relevance, <span className="text-primary font-bold">{c1.name}</span> is the recommended hire for the <span className="text-white font-bold">{c1.role}</span> position.
            </p>
         </div>
         <button className="enterprise-button-primary whitespace-nowrap">
            GENERATE FULL COMPARISON PDF
         </button>
      </div>
    </div>
  );
};

export default Comparison;
