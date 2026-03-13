export interface Candidate {
  id: string;
  name: string;
  role: string;
  experience: number;
  location: string;
  githubUsername: string;
  skills: string[];
  missingSkills?: string[];
  matchScore: number;
  authenticityScore: number;
  summary: string;
  githubActivity: {
    commits: number;
    repos: number;
    stars: number;
    forks: number;
    activityData: { month: string; commits: number }[];
  };
  projects: {
    name: string;
    description: string;
    complexity: string;
    stars?: number;
  }[];
  experience_timeline: {
    year: string;
    event: string;
    type: 'hackathon' | 'research' | 'internship' | 'open-source';
  }[];
  riskScore: number;
  status: 'Applications' | 'Verified' | 'Matched' | 'Interviewed' | 'Hired';
  lastAnalyzed: string;
  rediscoveryScore?: number;
}
