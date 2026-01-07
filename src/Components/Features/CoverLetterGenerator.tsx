import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { usePortfolio } from '../../Context/PortfolioContext';
import { API_KEY, RESUME_DATA } from '../../Data/Constants';

const CoverLetterGenerator = () => {
  const { state } = usePortfolio();
  const { isDarkMode } = state;
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateLetter = async () => {
    if (!company || !role) return;
    setIsGenerating(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `Generate a professional cover letter (max 150 words) for Rizki Nur'allam applying to ${company} for ${role}. Context: ${RESUME_DATA}.`
              }]
            }]
          })
        }
      );
      const data = await response.json();
      setGeneratedLetter(data.candidates?.[0]?.content?.parts?.[0]?.text || "Could not generate letter.");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setGeneratedLetter("Error generating letter.");
    } finally {
      setIsGenerating(false);
    }
  };

  const containerClass = isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg';
  const inputClass = isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900';

  return (
    <div className={`border rounded-xl p-6 md:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 ${containerClass}`}>
      <div className="relative z-10">
        <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          <Sparkles className="w-5 h-5 text-emerald-500" /> Quick Apply Assistant
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} className={`border rounded-lg px-4 py-2 focus:border-emerald-500 ${inputClass}`} />
          <input type="text" placeholder="Job Role" value={role} onChange={(e) => setRole(e.target.value)} className={`border rounded-lg px-4 py-2 focus:border-emerald-500 ${inputClass}`} />
        </div>
        <button onClick={generateLetter} disabled={isGenerating || !company || !role} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium py-2 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50">
          {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : "Generate Cover Letter ✨"}
        </button>
        {generatedLetter && (
          <div className={`mt-6 rounded-lg p-4 border animate-fade-in-up ${isDarkMode ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-emerald-50/50 border-emerald-100 text-slate-700'}`}>
            <p className="text-sm whitespace-pre-wrap italic">"{generatedLetter}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverLetterGenerator;