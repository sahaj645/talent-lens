import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  Github, 
  ExternalLink, 
  ShieldCheck, 
  Code2, 
  GitCommit, 
  Star,
  GitFork,
  Calendar,
  Cpu,
  ShieldAlert,
  Verified
} from 'lucide-react';
import { mockCandidates } from '../../utils/mockData';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const CandidateProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const candidate = useMemo(() => 
    mockCandidates.find(c => c.id === id) || mockCandidates[0], 
  [id]);

  const scoreData = [
    { name: 'Match', value: candidate.matchScore },
    { name: 'Remaining', value: 100 - candidate.matchScore }
  ];

  return (
    <div className="space-y-8 pb-20">
      <button 
        onClick={() => navigate('/candidates')}
        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-4 group cursor-pointer"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Results
      </button>

      <div className="enterprise-card border-l-4 border-l-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start relative z-10">
          <div className="w-32 h-32 rounded-2xl bg-secondary flex items-center justify-center text-4xl font-black text-primary border border-border">
            {candidate.name.charAt(0)}
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
              <h1 className="text-3xl font-black">{candidate.name}</h1>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-[10px] font-bold border border-primary/20 self-center lg:self-auto uppercase tracking-wider">
                {candidate.status}
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-400 mb-6 font-sans">
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                <span className="text-sm">{candidate.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span className="text-sm">{candidate.experience} Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm">{candidate.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={18} className="text-primary" />
                <span className="text-sm">@{candidate.githubUsername}</span>
              </div>
            </div>

            <p className="text-gray-300 max-w-2xl leading-relaxed text-sm font-sans">
              {candidate.summary}
            </p>
          </div>

          <div className="w-48 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie
                     data={scoreData}
                     innerRadius={45}
                     outerRadius={55}
                     startAngle={90}
                     endAngle={450}
                     paddingAngle={0}
                     dataKey="value"
                   >
                     <Cell fill="#86BC25" />
                     <Cell fill="#111" />
                   </Pie>
                 </PieChart>
               </ResponsiveContainer>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-primary font-sans">{candidate.matchScore}%</span>
                  <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Match Score</span>
               </div>
            </div>
            <button className="enterprise-button-primary w-full text-[10px] cursor-pointer">
              DOWNLOAD REPORT
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="enterprise-card">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2 font-sans">
                <ShieldCheck size={24} className="text-primary" />
                Skill Evidence AI Analysis
              </h3>
            </div>
            
            <div className="space-y-8">
               <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 italic">Verified Skills</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {candidate.skills.map(skill => (
                        <div key={skill} className="p-4 bg-secondary/30 border border-border rounded-lg group hover:border-primary/30 transition-all">
                           <div className="flex justify-between items-center mb-2">
                              <span className="font-bold text-sm font-sans">{skill}</span>
                              <span className="text-[10px] text-primary font-bold">Strong Evidence</span>
                           </div>
                           <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                                className="h-full bg-primary"
                              />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {candidate.missingSkills && candidate.missingSkills.length > 0 && (
                 <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 italic">Skill Gaps</h4>
                    <div className="flex flex-wrap gap-3">
                       {candidate.missingSkills.map(skill => (
                          <div key={skill} className="px-4 py-2 bg-red-500/5 border border-red-500/10 text-red-400 rounded-lg text-xs font-medium flex items-center gap-2">
                             <ShieldAlert size={14} />
                             {skill}
                          </div>
                       ))}
                    </div>
                 </div>
               )}
            </div>
          </div>

          <div className="enterprise-card">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 font-sans">
              <Github size={24} className="text-primary" />
              GitHub Activity Engine
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
               {[
                 { label: 'Total Commits', value: candidate.githubActivity.commits, icon: <GitCommit size={18} /> },
                 { label: 'Repositories', value: candidate.githubActivity.repos, icon: <Code2 size={18} /> },
                 { label: 'Stars Earned', value: candidate.githubActivity.stars, icon: <Star size={18} /> },
                 { label: 'Forks Made', value: candidate.githubActivity.forks, icon: <GitFork size={18} /> },
               ].map(stat => (
                 <div key={stat.label} className="p-4 bg-secondary/50 rounded-lg border border-border text-center">
                    <div className="flex justify-center text-primary mb-2">{stat.icon}</div>
                    <div className="text-2xl font-black font-sans">{stat.value}</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-tight italic">{stat.label}</div>
                 </div>
               ))}
            </div>

            <div className="h-[250px] w-full mb-8">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={candidate.githubActivity.activityData}>
                    <defs>
                      <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#86BC25" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#86BC25" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                    <XAxis dataKey="month" stroke="#444" fontSize={10} />
                    <YAxis stroke="#444" fontSize={10} />
                    <Tooltip 
                       contentStyle={{ backgroundColor: '#111', border: '1px solid #222', borderRadius: '8px' }}
                    />
                    <Area type="monotone" dataKey="commits" stroke="#86BC25" strokeWidth={3} fillOpacity={1} fill="url(#colorCommits)" />
                 </AreaChart>
               </ResponsiveContainer>
            </div>
          </div>

          <div className="enterprise-card">
             <h3 className="text-xl font-bold mb-8 font-sans">Career Evidence Timeline</h3>
             <div className="space-y-8 relative before:absolute before:inset-0 before:left-[11px] before:w-[2px] before:bg-border">
                {candidate.experience_timeline.map((item, i) => (
                  <div key={i} className="relative pl-10">
                     <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-black z-10 ${
                       item.type === 'hackathon' ? 'bg-primary' : 
                       item.type === 'research' ? 'bg-purple-500' : 
                       item.type === 'internship' ? 'bg-blue-500' : 'bg-yellow-400'
                     }`} />
                     <div>
                        <div className="flex items-center gap-3 mb-1">
                           <span className="text-[10px] font-black text-gray-500">{item.year}</span>
                           <span className={`px-2 py-0.5 rounded text-[8px] uppercase font-black tracking-widest ${
                             item.type === 'hackathon' ? 'bg-primary/10 text-primary' : 'bg-secondary/80 text-gray-400'
                           }`}>
                             {item.type}
                           </span>
                        </div>
                        <h4 className="font-bold text-base font-sans">{item.event}</h4>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="enterprise-card border-primary/20 bg-primary/[0.02]">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 font-sans">
                <ShieldCheck size={20} className="text-primary" />
                Authenticity Score
              </h3>
              <div className="flex flex-col items-center mb-8">
                 <div className="text-6xl font-black text-primary mb-2 font-sans">{candidate.authenticityScore}%</div>
                 <div className="px-4 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                    HIGHLY AUTHENTIC
                 </div>
              </div>
              
              <div className="space-y-4">
                 {[
                   { label: 'Project Originality', score: 98 },
                   { label: 'GitHub Commit Pattern', score: 92 },
                   { label: 'Code Complexity Match', score: 85 }
                 ].map(metric => (
                   <div key={metric.label}>
                      <div className="flex justify-between text-[10px] mb-1.5 font-sans">
                         <span className="text-gray-400">{metric.label}</span>
                         <span className="text-white font-bold">{metric.score}%</span>
                      </div>
                      <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                         <div className="h-full bg-primary" style={{ width: `${metric.score}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="enterprise-card">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 font-sans">
                <Cpu size={20} className="text-primary" />
                AI Observations
              </h3>
              <div className="space-y-4 font-sans">
                 <div className="p-4 bg-secondary/40 rounded-lg border border-border">
                    <p className="text-xs text-gray-300 italic mb-2 leading-relaxed">"This candidate demonstrates strong backend engineering through {candidate.githubActivity.commits} verified commits."</p>
                    <div className="flex items-center gap-2 text-primary font-bold text-[8px] uppercase tracking-tighter">
                       <Verified size={12} /> VERIFIED BY TALENTLENS AI
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
