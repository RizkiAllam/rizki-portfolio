import { useEffect } from 'react';
import { PortfolioProvider, usePortfolio } from './Context/PortfolioContext';
import Navbar from './Components/Layout/Navbar';
import Hero from './Components/Sections/Hero';
import Skills from './Components/Sections/Skills';
import Projects from './Components/Sections/Projects';
import AIChatWidget from './Components/Features/AIChatWidget';
import CoverLetterGenerator from './Components/Features/CoverLetterGenerator';
import Experience from './Components/Sections/Experience';
import Education from './Components/Sections/Education';

// Component Content
const PortfolioContent = () => {
  const { state, dispatch } = usePortfolio();
  const { isDarkMode } = state;

  useEffect(() => {
    const handleScroll = () => dispatch({ type: 'SET_SCROLLED', payload: window.scrollY > 50 });
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const bgClass = isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800';

  return (
    <div className={`min-h-screen font-sans selection:bg-emerald-500 selection:text-white relative overflow-hidden transition-colors duration-500 ${bgClass}`}>
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-blob ${isDarkMode ? 'mix-blend-screen' : 'mix-blend-multiply'}`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${isDarkMode ? 'mix-blend-screen' : 'mix-blend-multiply'}`}></div>
      </div>

      <div className="relative z-10">
        <AIChatWidget />
        <Navbar />
        <main>
          <Hero />
          <Skills />
          {/* <Experience /> */}
          <Experience />
          <Projects />
          <Education />
          {/* <Education /> */}
        </main>
        
        <footer className={`py-12 border-t relative z-20 ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Let's work together</h2>
                <a href="mailto:jendralra101@gmail.com" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg">Say Hello</a>
              </div>
              <CoverLetterGenerator />
            </div>
            <div className="text-center text-sm pt-8 border-t border-slate-700/50">
              <p>&copy; 2025 Rizki Nur'allam.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
};

export default App;