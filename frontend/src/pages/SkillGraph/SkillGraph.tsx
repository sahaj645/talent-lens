import React, { useEffect, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { Network, Search, Filter, Info, BrainCircuit } from 'lucide-react';

const SkillGraph: React.FC = () => {
  const graphRef = useRef<any>();

  // Use simple mock data for nodes and links
  const graphData = {
    nodes: [
      { id: 'Candidate: Sarah Chen', group: 1, val: 20 },
      { id: 'Skill: Machine Learning', group: 2, val: 15 },
      { id: 'Skill: Python', group: 2, val: 15 },
      { id: 'Skill: TensorFlow', group: 2, val: 12 },
      { id: 'Project: NeuralArch', group: 3, val: 12 },
      { id: 'GitHub: NeuralArch Repo', group: 4, val: 10 },
      { id: 'Commit: Arch Search 23', group: 5, val: 8 },
      { id: 'Research: CVPR Paper', group: 6, val: 12 },
      { id: 'Skill: PyTorch', group: 2, val: 15 },
    ],
    links: [
      { source: 'Candidate: Sarah Chen', target: 'Skill: Machine Learning' },
      { source: 'Candidate: Sarah Chen', target: 'Skill: Python' },
      { source: 'Skill: Machine Learning', target: 'Project: NeuralArch' },
      { source: 'Project: NeuralArch', target: 'GitHub: NeuralArch Repo' },
      { source: 'GitHub: NeuralArch Repo', target: 'Commit: Arch Search 23' },
      { source: 'Skill: Machine Learning', target: 'Research: CVPR Paper' },
      { source: 'Candidate: Sarah Chen', target: 'Skill: PyTorch' },
      { source: 'Skill: Python', target: 'Project: NeuralArch' },
      { source: 'Skill: TensorFlow', target: 'Project: NeuralArch' },
    ]
  };

  useEffect(() => {
    if (graphRef.current) {
        graphRef.current.d3Force('charge').strength(-200);
    }
  }, []);

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1">Skill Evidence Graph</h1>
          <p className="text-gray-400">Interactive visualization of skills linked to verifiable proofs.</p>
        </div>
        <div className="flex gap-4">
           <div className="enterprise-card py-2 px-4 flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-blue-500" />
                 <span className="text-xs font-bold text-gray-400">Candidate</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#86BC25]" />
                 <span className="text-xs font-bold text-gray-400">Skill</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-orange-500" />
                 <span className="text-xs font-bold text-gray-400">Project</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-purple-500" />
                 <span className="text-xs font-bold text-gray-400">Research</span>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
        <div className="lg:col-span-3 enterprise-card p-0 overflow-hidden relative bg-[#050505]">
          <div className="absolute top-6 left-6 z-10 flex gap-2">
             <button className="bg-black/50 border border-border p-2 rounded hover:text-primary transition-colors">
                 <Search size={18} />
             </button>
             <button className="bg-black/50 border border-border p-2 rounded hover:text-primary transition-colors">
                 <Filter size={18} />
             </button>
          </div>
          
          <ForceGraph2D
            ref={graphRef}
            graphData={graphData}
            backgroundColor="#000000"
            nodeRelSize={6}
            nodeAutoColorBy="group"
            linkColor={() => '#222'}
            linkDirectionalParticles={2}
            linkDirectionalParticleSpeed={d => 0.005}
            nodeCanvasObject={(node: any, ctx, globalScale) => {
              const label = node.id;
              const fontSize = 12 / globalScale;
              ctx.font = `${fontSize}px Inter`;
              const textWidth = ctx.measureText(label).width;
              const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

              ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
              ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, bckgDimensions[0], bckgDimensions[1]);

              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = node.color || '#86BC25';
              ctx.fillText(label, node.x, node.y);
              
              // Draw node circle
              ctx.beginPath();
              ctx.arc(node.x, node.y, 4, 0, 2 * Math.PI, false);
              ctx.fillStyle = node.color || '#86BC25';
              ctx.fill();
            }}
          />
        </div>

        <div className="space-y-6 overflow-y-auto pr-2">
           <div className="enterprise-card border-primary/20 bg-primary/[0.02]">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BrainCircuit size={20} className="text-primary" />
                AI Inference
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                "Machine Learning" skill node is linked to the "NeuralArch" project which contains 23 high-complexity commits verified on GitHub.
              </p>
              <div className="p-3 bg-black/40 border border-border rounded text-[10px] font-bold text-primary flex items-center gap-2">
                 <Info size={12} /> CONFIDENCE LEVEL: 98.4%
              </div>
           </div>

           <div className="enterprise-card">
              <h3 className="text-lg font-bold mb-4">Node Details</h3>
              <div className="space-y-4">
                 <div>
                    <label className="text-[10px] uppercase font-black text-gray-500 tracking-widest block mb-1">Selected Node</label>
                    <div className="text-sm font-bold">NeuralArch Project</div>
                 </div>
                 <div>
                    <label className="text-[10px] uppercase font-black text-gray-500 tracking-widest block mb-1">Connected To</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                       <span className="px-2 py-1 bg-secondary rounded text-[10px] font-bold">Python</span>
                       <span className="px-2 py-1 bg-secondary rounded text-[10px] font-bold">Machine Learning</span>
                       <span className="px-2 py-1 bg-secondary rounded text-[10px] font-bold">TensorFlow</span>
                    </div>
                 </div>
                 <div className="pt-4 border-t border-border">
                    <button className="w-full enterprise-button-primary text-xs">
                       EXPLORE REPOSITORY
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SkillGraph;
