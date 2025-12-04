import React from 'react';
import { ViewState } from '../types';
import { Compass, Book, PenTool, BrainCircuit, GraduationCap, Menu, X } from 'lucide-react';

interface LayoutProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, setView, children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: ViewState.HOME, label: 'Home', icon: Compass },
    { id: ViewState.EXPLORE, label: 'Explorer', icon: Book },
    { id: ViewState.VOCABULARY, label: 'Vocabulary', icon: BrainCircuit },
    { id: ViewState.PRACTICE, label: 'Practice', icon: PenTool },
    { id: ViewState.QUIZ, label: 'Quiz', icon: GraduationCap },
    { id: ViewState.TEACHER, label: 'Teacher', icon: Menu },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-blue-600 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="font-bold text-xl">AquaCycle</h1>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">🌊</span>
            AquaCycle
          </h1>
          <p className="text-xs mt-2 text-slate-500 uppercase tracking-widest">CLIL Explorer</p>
        </div>
        
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setView(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                currentView === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-center text-xs text-slate-600">
          Based on worksheet by Keith Kelly
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)] md:h-screen">
        <div className="container mx-auto p-4 md:p-8">
           {children}
        </div>
      </main>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};
