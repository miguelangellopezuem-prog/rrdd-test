
import React, { useState } from 'react';
import { VOCABULARY } from '../data/content';
import { Volume2, RefreshCw } from 'lucide-react';

export const Vocabulary: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleFlip = (id: string) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
    }
    setFlippedCards(newFlipped);
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Inject styles for 3D Flip Card animation since standard Tailwind classes might be missing plugins */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900">Vocabulary Builder</h2>
        <p className="text-gray-600 mt-2">Click a card to reveal its definition. Click the speaker icon to hear pronunciation.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VOCABULARY.map((word) => (
          <div key={word.id} className="relative h-64 perspective-1000 group cursor-pointer" onClick={() => toggleFlip(word.id)}>
            <div className={`relative w-full h-full transition-all duration-500 preserve-3d transform ${flippedCards.has(word.id) ? 'rotate-y-180' : ''}`}>
              
              {/* Front of Card (Term) */}
              <div className="absolute inset-0 backface-hidden bg-white border-2 border-blue-100 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
                  {word.partOfSpeech}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{word.term}</h3>
                <button 
                  onClick={(e) => { e.stopPropagation(); speak(word.term); }}
                  className="p-3 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-colors"
                  aria-label="Listen"
                >
                  <Volume2 size={24} />
                </button>
                <div className="absolute bottom-4 text-gray-400 text-sm flex items-center gap-1">
                  <RefreshCw size={14} /> Click to flip
                </div>
              </div>

              {/* Back of Card (Definition) */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-blue-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-medium mb-4 leading-relaxed">
                  "{word.definition}"
                </p>
                <div className="w-12 h-1 bg-white/30 rounded-full mb-4"></div>
                <p className="italic text-blue-100 text-sm">
                  Ex: {word.example}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
