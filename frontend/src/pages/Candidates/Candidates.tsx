import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  ExternalLink, 
  GitBranch, 
  Award, 
  AlertCircle,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockCandidates } from '../../utils/mockData';
import { motion } from 'framer-motion';

const Candidates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-primary';
    if (score >= 75) return 'text-yellow-400';
    return 'text-red-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Candidates</h1>
          <p className="text-gray-400 mt-1">Manage and analyze your talent pool with AI-powered insights.</p>
        </div>
        <div className="flex gap-3">
          <button className="enterprise-input flex items-center gap-2">
            <Filter size={18} />
            Filters
          </button>
          <button className="enterprise-button-primary">
            Import Resume
          </button>
        </div>
      </div>

      <div className="enterprise-card py-4 px-0">
        <div className="px-6 mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by skill (e.g. Python), GitHub username, or candidate name..."
              className="w-full bg-secondary border border-border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="bg-secondary border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:border-primary">
            <option>All Match Scores</option>
            <option>90% + Match</option>
            <option>75% + Match</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary/50 text-left border-y border-border">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Candidate Name</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Match Score</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Skill Match</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">GitHub Activity</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Experience</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Risk Score</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockCandidates.map((candidate) => (
                <motion.tr 
                   key={candidate.id}
                   whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                   className="group cursor-pointer"
                   onClick={() => navigate(`/candidates/${candidate.id}`)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-primary border border-border">
                        {candidate.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold group-hover:text-primary transition-colors">{candidate.name}</p>
                        <p className="text-xs text-gray-500">{candidate.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <span className={`text-lg font-black ${getScoreColor(candidate.matchScore)}`}>
                         {candidate.matchScore}%
                       </span>
                       <div className="w-12 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div className={`h-full ${candidate.matchScore >= 90 ? 'bg-primary' : 'bg-yellow-400'}`} style={{ width: `${candidate.matchScore}%` }} />
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {candidate.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-[10px] font-bold border border-primary/20">
                          {skill}
                        </span>
                      ))}
                      {candidate.skills.length > 3 && (
                        <span className="px-2 py-0.5 bg-secondary text-gray-400 rounded text-[10px] border border-border">
                          +{candidate.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4 text-xs">
                       <div className="flex items-center gap-1.5" title="Commits">
                         <GitBranch size={14} className="text-gray-500" />
                         <span className="font-medium">{candidate.githubActivity.commits}</span>
                       </div>
                       <div className="flex items-center gap-1.5" title="Authenticity">
                         <UserCheck size={14} className="text-primary" />
                         <span className="font-medium">{candidate.authenticityScore}%</span>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-sm">
                    {candidate.experience} Years
                  </td>
                  <td className="px-6 py-4">
                     <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase ${
                       candidate.riskScore < 10 ? 'bg-primary/10 text-primary' : 
                       candidate.riskScore < 25 ? 'bg-yellow-400/10 text-yellow-400' : 'bg-red-500/10 text-red-500'
                     }`}>
                       {candidate.riskScore < 10 ? 'Low Risk' : candidate.riskScore < 25 ? 'Medium' : 'High Risk'}
                     </span>
                  </td>
                  <td className="px-6 py-4">
                     <div className="flex items-center gap-2">
                        <button className="p-2 bg-secondary rounded hover:bg-card hover:text-primary transition-all">
                          <ArrowRight size={16} />
                        </button>
                        <button className="p-2 bg-secondary rounded">
                          <MoreHorizontal size={16} />
                        </button>
                     </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
