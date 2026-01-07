import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { usePortfolio } from '../../Context/PortfolioContext';
import { PROJECTS_DATA } from '../../Data/Constants';

const Projects = () => {
  const { state } = usePortfolio();
  const { isDarkMode } = state;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  const cardClass = isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-md';
  const textTitle = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-600';

  return (
    <section id="projects" className={`py-20 backdrop-blur-sm overflow-hidden ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50/50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className={`text-3xl font-bold flex items-center gap-3 ${textTitle}`}><span className="w-8 h-1 bg-emerald-500 rounded-full"></span> Featured Projects</h2>
          <div className="flex gap-2">
            <button onClick={() => scrollProjects('left')} className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-white text-slate-700 shadow-md'}`}><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={() => scrollProjects('right')} className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-white text-slate-700 shadow-md'}`}><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
        <div ref={scrollRef} className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className={`min-w-[85vw] md:min-w-[400px] snap-center rounded-xl overflow-hidden border flex flex-col ${cardClass}`}>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold ${textTitle}`}>{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded border ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>{project.type}</span>
                </div>
                <p className={`mb-6 flex-1 line-clamp-4 ${textMuted}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tag => <span key={tag} className={`text-xs px-2 py-1 rounded border ${isDarkMode ? 'bg-slate-900 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>{tag}</span>)}
                </div>
              </div>
              <div className={`p-4 border-t flex justify-end ${isDarkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={`flex items-center gap-2 text-sm hover:text-emerald-500 ${textMuted}`}><Github className="w-4 h-4" /> Source Code <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;