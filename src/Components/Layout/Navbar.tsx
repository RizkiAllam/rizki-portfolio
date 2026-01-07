import { Menu, X, Sun, Moon } from 'lucide-react';
import { usePortfolio } from '../../Context/PortfolioContext';

const Navbar = () => {
  const { state, dispatch } = usePortfolio();
  const { isMobileMenuOpen, isScrolled, isDarkMode } = state;

  const scrollToSection = (id: string) => {
    if (isMobileMenuOpen) dispatch({ type: 'TOGGLE_MOBILE_MENU' });
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navClass = isScrolled 
    ? (isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200') 
    : 'bg-transparent';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md shadow-sm border-b ${navClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-bold text-2xl text-emerald-500 tracking-tighter cursor-pointer">RN<span className={isDarkMode ? 'text-white' : 'text-slate-800'}>.</span></div>
        <div className="hidden md:flex items-center gap-6">
          {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`hover:text-emerald-500 font-medium text-sm transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item}</button>
          ))}
          <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })} className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}>
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })} className={isDarkMode ? 'text-yellow-400' : 'text-slate-600'}>{isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</button>
          <button onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })} className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>{isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={`md:hidden border-b ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} px-2 pt-2 pb-3 space-y-1`}>
          {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${isDarkMode ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-600 hover:bg-slate-100'}`}>{item}</button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;