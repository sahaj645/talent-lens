import { Candidate } from '../types';

export const calculateMatchScore = (candidate: Candidate, requirements: string[]) => {
  // Simple matching logic placeholder
  const matchingSkills = candidate.skills.filter(skill => 
    requirements.some(req => skill.toLowerCase().includes(req.toLowerCase()))
  );
  
  const baseScore = (matchingSkills.length / requirements.length) * 100;
  return Math.min(100, Math.round(baseScore + (candidate.experience * 2)));
};

export const getHiringInsights = () => {
  return [
    { text: "32% candidates exaggerate skills based on GitHub activity", type: "warning" },
    { text: "18 strong ML candidates discovered in last 48 hours", type: "success" },
    { text: "9 suspicious GitHub activity patterns flagged", type: "alert" },
    { text: "12 rediscovered candidates from old database match open roles", type: "info" }
  ];
};
