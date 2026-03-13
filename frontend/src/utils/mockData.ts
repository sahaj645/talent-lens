import type { Candidate } from '../types';

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior ML Engineer',
    experience: 6,
    location: 'San Francisco, CA',
    githubUsername: 'sarahc_ml',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'PyTorch', 'AWS'],
    missingSkills: ['Kubernetes', 'MLOps'],
    matchScore: 92,
    authenticityScore: 95,
    summary: 'Expert in deep learning and computer vision with extensive open-source contributions.',
    githubActivity: {
      commits: 1240,
      repos: 45,
      stars: 890,
      forks: 120,
      activityData: [
        { month: 'Jan', commits: 45 },
        { month: 'Feb', commits: 52 },
        { month: 'Mar', commits: 48 },
        { month: 'Apr', commits: 60 },
        { month: 'May', commits: 55 },
        { month: 'Jun', commits: 70 },
      ]
    },
    projects: [
      { name: 'NeuralArch', description: 'Automated neural architecture search library', complexity: 'High', stars: 450 },
      { name: 'CV-Worker', description: 'Real-time object detection for edge devices', complexity: 'Medium', stars: 120 }
    ],
    experience_timeline: [
      { year: '2023', event: 'Global AI Hackathon Winner', type: 'hackathon' },
      { year: '2022', event: 'Published research on GANs in CVPR', type: 'research' },
      { year: '2021', event: 'Lead AI Intern at NVIDIA', type: 'internship' }
    ],
    riskScore: 5,
    status: 'Matched',
    lastAnalyzed: '2024-03-01'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Full Stack Developer',
    experience: 4,
    location: 'Austin, TX',
    githubUsername: 'marcusdev',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'TypeScript'],
    missingSkills: ['Go', 'Redis'],
    matchScore: 84,
    authenticityScore: 88,
    summary: 'Product-focused engineer with experience building scalable SaaS applications.',
    githubActivity: {
      commits: 850,
      repos: 28,
      stars: 156,
      forks: 34,
      activityData: [
        { month: 'Jan', commits: 30 },
        { month: 'Feb', commits: 25 },
        { month: 'Mar', commits: 45 },
        { month: 'Apr', commits: 38 },
        { month: 'May', commits: 42 },
        { month: 'Jun', commits: 35 },
      ]
    },
    projects: [
      { name: 'SaaS-Starter', description: 'Next.js boilerplate for B2B applications', complexity: 'Medium', stars: 85 },
      { name: 'Task-Flow', description: 'Real-time collaborative task manager', complexity: 'Medium', stars: 45 }
    ],
    experience_timeline: [
      { year: '2022', event: 'Full-stack Intern at Stripe', type: 'internship' },
      { year: '2021', event: 'Open Source Contributor to React', type: 'open-source' }
    ],
    riskScore: 12,
    status: 'Verified',
    lastAnalyzed: '2024-03-05'
  },
  ...Array.from({ length: 18 }).map((_, i) => ({
    id: (i + 3).toString(),
    name: `Candidate ${i + 3}`,
    role: i % 2 === 0 ? 'Backend Engineer' : 'Frontend Developer',
    experience: Math.floor(Math.random() * 10) + 1,
    location: 'Remote',
    githubUsername: `user${i + 3}`,
    skills: i % 2 === 0 ? ['Node.js', 'Python', 'Docker'] : ['React', 'Tailwind', 'Next.js'],
    matchScore: Math.floor(Math.random() * 40) + 60,
    authenticityScore: Math.floor(Math.random() * 30) + 70,
    summary: 'A highly motivated developer with a focus on building efficient systems.',
    githubActivity: {
        commits: Math.floor(Math.random() * 1000),
        repos: Math.floor(Math.random() * 50),
        stars: Math.floor(Math.random() * 500),
        forks: Math.floor(Math.random() * 100),
        activityData: []
    },
    projects: [],
    experience_timeline: [],
    riskScore: Math.floor(Math.random() * 50),
    status: (['Applications', 'Verified', 'Matched', 'Interviewed', 'Hired'] as const)[Math.floor(Math.random() * 5)],
    lastAnalyzed: '2024-02-15'
  })) as Candidate[]
];
