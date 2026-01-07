import { Award } from 'lucide-react';
import { usePortfolio } from '../../Context/PortfolioContext';
import { EDUCATION_DATA } from '../../Data/Constants';

const Education = () => {
  const { state } = usePortfolio();
  const { isDarkMode } = state;

  const textTitle = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const cardClass = isDarkMode 
    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' 
    : 'bg-white border-slate-200 shadow-sm hover:shadow-md';

  // Memisahkan data pendidikan utama (Kuliah) dan pelatihan (Training)
  const mainEducation = EDUCATION_DATA.filter(edu => edu.isMain);
  const trainings = EDUCATION_DATA.filter(edu => !edu.isMain);

  return (
    <section id="education" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Kolom Kiri: Formal Education */}
        <div>
          <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${textTitle}`}>
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span> Education
          </h2>
          <div className="space-y-6">
            {mainEducation.map((edu) => (
              <div key={edu.id} className={`p-6 rounded-xl border transition-all duration-300 ${cardClass}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg flex-shrink-0 ${isDarkMode ? 'bg-slate-700 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                    <edu.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${textTitle}`}>{edu.degree}</h3>
                    <p className="text-emerald-500 font-medium mb-1">{edu.school}</p>
                    <p className={`text-sm mb-4 ${textMuted}`}>{edu.period}</p>
                    
                    {edu.description.includes("Cum Laude") && (
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${isDarkMode ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border-emerald-200'}`}>
                        <Award className="w-3 h-3" /> {edu.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Trainings & Certifications */}
        <div>
          <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${textTitle}`}>
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span> Trainings
          </h2>
          <div className="space-y-4">
            {trainings.map((train) => (
              <div key={train.id} className={`p-6 rounded-xl border transition-all duration-300 ${cardClass}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-md ${isDarkMode ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <train.icon className={`w-4 h-4 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${textTitle}`}>{train.degree}</h3>
                </div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{train.school}</p>
                <p className={`text-xs mt-1 ${textMuted}`}>{train.period} • {train.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;