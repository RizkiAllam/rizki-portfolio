import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import profileImg from '../../assets/IMG_8983.PNG';
import { usePortfolio } from '../../Context/PortfolioContext';

const Hero = () => {
  const { state } = usePortfolio();
  const { isDarkMode } = state;
  const textTitle = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-600';

  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border mb-2 ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-100 text-emerald-700 border-emerald-200'}`}>Web Developer</div>
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up delay-200 ${textTitle}`}>Rizki <span className="text-emerald-500">Nur'allam</span></h1>
          <p className={`text-xl max-w-2xl leading-relaxed animate-fade-in-up delay-300 ${textMuted}`}>Passionate Web Developer specialized in building responsive web applications using React, Vue, and Tailwind CSS.</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4 animate-fade-in-up delay-300">
            <a href="mailto:jendralra101@gmail.com" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:scale-105"><Mail className="w-5 h-5" /> Contact Me</a>
            <a href="https://github.com/RizkiAllam" target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium border hover:text-emerald-500 ${isDarkMode ? 'bg-slate-800 text-white border-slate-700' : 'bg-white text-slate-700 border-slate-200'}`}><Github className="w-5 h-5" /> GitHub</a>
            <a href="https://www.linkedin.com/in/rizkiallam" target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium border hover:text-emerald-500 ${isDarkMode ? 'bg-slate-800 text-white border-slate-700' : 'bg-white text-slate-700 border-slate-200'}`}><Linkedin className="w-5 h-5" /> LinkedIn</a>
          </div>
          <div className={`flex flex-wrap gap-6 text-sm pt-6 justify-center md:justify-start ${textMuted}`}>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-500" /> Ngawi, East Java</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-500" /> +62 813-6832-7763</div>
          </div>
        </div>
        <div className="relative w-48 h-48 md:w-80 md:h-80 flex-shrink-0 animate-float">
          <div className={`absolute inset-0 rounded-full border-4 shadow-2xl overflow-hidden z-10 ${isDarkMode ? 'border-slate-800/50' : 'border-white'}`}>
            {/* Ganti string "IMG_8983.PNG" menjadi variabel {profileImg} */}
            <img 
              src={profileImg} 
              alt="Rizki Nur'allam" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;