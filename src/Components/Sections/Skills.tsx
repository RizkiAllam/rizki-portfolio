import { usePortfolio } from '../../Context/PortfolioContext';
import { SKILLS_DATA } from '../../Data/Constants';

const Skills = () => {
  const { state } = usePortfolio();
  const { isDarkMode } = state;

  return (
    <section id="skills" className={`py-20 backdrop-blur-sm ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50/50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className={`text-3xl font-bold mb-12 inline-flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          <span className="w-8 h-1 bg-emerald-500 rounded-full"></span> Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {SKILLS_DATA.map((skill, index) => (
            <div key={index} className="group flex flex-col items-center gap-3 w-24 sm:w-28 cursor-default">
              
              {/* Lingkaran Icon */}
              {/* Perhatikan penambahan ${skill.color} di bawah ini */}
              <div className={`
                w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl sm:text-4xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2 shadow-sm
                ${isDarkMode 
                  ? 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:shadow-white/5' 
                  : 'bg-white text-slate-600 group-hover:shadow-xl border border-slate-100'}
                ${skill.color} 
              `}>
                <skill.icon />
              </div>

              {/* Nama Skill */}
              <span className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-slate-500 group-hover:text-slate-200' : 'text-slate-500 group-hover:text-slate-800'}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;