import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Candidates = lazy(() => import('./pages/Candidates/Candidates'));
const CandidateProfile = lazy(() => import('./pages/CandidateProfile/CandidateProfile'));
const Comparison = lazy(() => import('./pages/Comparison/Comparison'));
const Rediscovery = lazy(() => import('./pages/Rediscovery/Rediscovery'));
const SkillGraph = lazy(() => import('./pages/SkillGraph/SkillGraph'));

const Loading = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/candidates/:id" element={<CandidateProfile />} />
            <Route path="/intelligence" element={<CandidateProfile />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/rediscovery" element={<Rediscovery />} />
            <Route path="/skill-graph" element={<SkillGraph />} />
            <Route path="/analytics" element={<Dashboard />} />
            <Route path="/settings" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
