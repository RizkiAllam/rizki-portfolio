import { usePortfolio } from '../../Context/PortfolioContext';
import { EXPERIENCE_DATA } from '../../Data/Constants';

const Experience = () => {
  const { state } = usePortfolio();
  const { isDarkMode } = state;

  const textTitle = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const borderClass = isDarkMode ? 'border-slate-800' : 'border-slate-200';

  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className={`text-3xl font-bold mb-12 flex items-center gap-3 ${textTitle}`}>
        <span className="w-8 h-1 bg-emerald-500 rounded-full"></span> Professional Experience
      </h2>
      
      <div className={`relative border-l-2 ml-4 space-y-12 ${borderClass}`}>
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="relative pl-8 group">
            {/* Dot Indicator */}
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 transition-all ${isDarkMode ? 'ring-slate-900 group-hover:ring-slate-700' : 'ring-white group-hover:ring-emerald-100'}`}></div>
            
            <div className="mb-2 text-sm text-emerald-500 font-medium">{exp.period}</div>
            <h3 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white group-hover:text-emerald-300' : 'text-slate-900 group-hover:text-emerald-600'}`}>
              {exp.role}
            </h3>
            <div className={`mb-4 font-medium ${textMuted}`}>{exp.company}</div>
            
            <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {exp.description.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;