import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Cpu, 
  GitMerge, 
  History, 
  Network, 
  BarChart3, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Candidates', icon: <Users size={20} />, path: '/candidates' },
    { name: 'Resume Intelligence', icon: <Cpu size={20} />, path: '/intelligence' },
    { name: 'Comparison', icon: <GitMerge size={20} />, path: '/comparison' },
    { name: 'Talent Rediscovery', icon: <History size={20} />, path: '/rediscovery' },
    { name: 'Skill Graph', icon: <Network size={20} />, path: '/skill-graph' },
    { name: 'Analytics', icon: <BarChart3 size={20} />, path: '/analytics' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      {/* Top Navbar */}
      <nav className="h-16 border-b border-border bg-black/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-background font-bold text-xs">TL</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden md:block">
              TalentLens <span className="text-primary">AI</span>
            </span>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search candidates, skills, or analytics..."
              className="w-full bg-secondary border border-border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <Bell size={20} className="text-gray-400 hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-black"></span>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-border cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
              <User size={18} />
            </div>
            <span className="text-sm font-medium hidden lg:block">Recruiter Admin</span>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <motion.aside 
          initial={false}
          animate={{ width: collapsed ? 80 : 260 }}
          className="bg-black border-r border-border hidden md:flex flex-col py-6 relative"
        >
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="absolute -right-3 top-2 w-6 h-6 bg-secondary border border-border rounded-full flex items-center justify-center hover:bg-card hover:border-primary transition-all z-10"
          >
            {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>

          <div className="flex flex-col gap-2 px-4 mb-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-4 p-3 rounded-md transition-all group
                  ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-white hover:bg-secondary'}
                `}
              >
                <div className="min-w-[24px] flex items-center justify-center">
                  {item.icon}
                </div>
                {!collapsed && (
                  <span className="text-sm font-semibold whitespace-nowrap overflow-hidden">
                    {item.name}
                  </span>
                )}
                {collapsed && (
                  <div className="absolute left-full ml-6 px-2 py-1 bg-card border border-border rounded text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto px-4">
             {!collapsed && (
               <div className="enterprise-card p-4 bg-primary/5 border-primary/20">
                 <p className="text-xs text-primary mb-2 font-bold uppercase tracking-wider">AI Usage</p>
                 <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-primary w-[32%]"></div>
                 </div>
                 <p className="text-[10px] text-gray-400">320 / 1000 credits used</p>
               </div>
             )}
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
