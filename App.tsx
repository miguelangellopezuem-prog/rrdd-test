import React, { useState } from 'react';
import { ViewState } from './types';
import { Layout } from './components/Layout';
import { Explorer } from './views/Explorer';
import { Vocabulary } from './views/Vocabulary';
import { Practice } from './views/Practice';
import { Quiz } from './views/Quiz';
import { TeacherGuide } from './views/TeacherGuide';
import { ArrowRight } from 'lucide-react';

const Home: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-2xl mx-auto space-y-8 animate-fade-in">
    <div className="relative w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center mb-6 ring-8 ring-blue-50">
       <span className="text-8xl">🌧️</span>
       <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-300 rounded-full animate-pulse opacity-80"></div>
    </div>
    
    <div className="space-y-4">
      <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
        The Water Cycle
      </h1>
      <p className="text-xl text-slate-600 leading-relaxed">
        Discover how water moves around our planet. Learn the geography concepts and the English vocabulary to describe them.
      </p>
    </div>

    <button 
      onClick={onStart}
      className="group relative px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-full overflow-hidden shadow-xl hover:bg-blue-700 transition-all hover:-translate-y-1"
    >
      <span className="relative z-10 flex items-center gap-2">
        Start Exploring <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  </div>
);

function App() {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Home onStart={() => setView(ViewState.EXPLORE)} />;
      case ViewState.EXPLORE:
        return <Explorer />;
      case ViewState.VOCABULARY:
        return <Vocabulary />;
      case ViewState.PRACTICE:
        return <Practice />;
      case ViewState.QUIZ:
        return <Quiz />;
      case ViewState.TEACHER:
        return <TeacherGuide />;
      default:
        return <Home onStart={() => setView(ViewState.EXPLORE)} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setView}>
      {renderView()}
    </Layout>
  );
}

export default App;
