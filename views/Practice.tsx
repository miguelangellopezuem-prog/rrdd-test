
import React, { useState, useMemo } from 'react';
import { SENTENCE_PAIRS } from '../data/content';
import { CheckCircle2, RefreshCcw, XCircle } from 'lucide-react';

export const Practice: React.FC = () => {
  const [selectedStart, setSelectedStart] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState<boolean>(false);
  const [shakingEnd, setShakingEnd] = useState<string | null>(null);

  // Memoize the list of endings so they stay in a stable order (alphabetical)
  const allEnds = useMemo(() => {
    return [...SENTENCE_PAIRS].map(p => p.end).sort();
  }, []);

  const handleStartClick = (id: string) => {
    if (matches[id]) return; // Already matched
    setSelectedStart(id);
    setShakingEnd(null);
  };

  const handleEndClick = (endText: string) => {
    if (!selectedStart) return;
    
    // Find if correct
    const pair = SENTENCE_PAIRS.find(p => p.id === selectedStart);
    if (pair && pair.end === endText) {
      // Correct match
      const newMatches = { ...matches, [selectedStart]: endText };
      setMatches(newMatches);
      setSelectedStart(null);
      setShakingEnd(null);
      
      if (Object.keys(newMatches).length === SENTENCE_PAIRS.length) {
        setCompleted(true);
      }
    } else {
      // Incorrect match - trigger animation
      setShakingEnd(endText);
      setTimeout(() => setShakingEnd(null), 500);
    }
  };

  const reset = () => {
    setMatches({});
    setCompleted(false);
    setSelectedStart(null);
    setShakingEnd(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>

      <header className="mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Sentence Builder</h2>
        <p className="text-gray-600">
          Match the beginning of the sentence (left) with the correct ending (right).
        </p>
      </header>

      {completed ? (
        <div className="bg-green-100 border border-green-200 rounded-xl p-8 text-center animate-fade-in-up">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-2">Great Job!</h3>
          <p className="text-green-700 mb-6">You have correctly matched all the sentences.</p>
          <button 
            onClick={reset}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-semibold flex items-center gap-2 mx-auto"
          >
            <RefreshCcw size={18} /> Play Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Starts */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-500 uppercase text-sm tracking-wider mb-4">Begins with...</h3>
            {SENTENCE_PAIRS.map((pair) => (
              <button
                key={pair.id}
                onClick={() => handleStartClick(pair.id)}
                disabled={!!matches[pair.id]}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  matches[pair.id] 
                    ? 'bg-green-50 border-green-200 text-green-800 opacity-80' 
                    : selectedStart === pair.id 
                      ? 'bg-blue-100 border-blue-500 shadow-md ring-2 ring-blue-200 transform scale-[1.02]' 
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {pair.start}
                {matches[pair.id] && <CheckCircle2 className="inline ml-2 w-5 h-5 text-green-600 float-right" />}
              </button>
            ))}
          </div>

          {/* Right Column: Ends */}
          <div className="space-y-4">
             <h3 className="font-bold text-gray-500 uppercase text-sm tracking-wider mb-4">Ends with...</h3>
             <div className="space-y-4">
              {allEnds.map((endText, idx) => {
                  const isMatched = Object.values(matches).includes(endText);
                  const isShaking = shakingEnd === endText;

                  return (
                    <button
                      key={idx}
                      onClick={() => !isMatched && handleEndClick(endText)}
                      disabled={!selectedStart || isMatched}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 
                        ${isShaking ? 'animate-shake bg-red-50 border-red-300 text-red-800' : ''}
                        ${
                        isMatched
                          ? 'bg-green-50 border-green-200 text-green-800 opacity-80'
                          : selectedStart && !isShaking
                            ? 'bg-white border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 cursor-pointer hover:shadow-sm'
                            : 'bg-gray-50 border-transparent text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {endText}
                      {isMatched && <CheckCircle2 className="inline ml-2 w-5 h-5 text-green-600 float-right" />}
                      {isShaking && <XCircle className="inline ml-2 w-5 h-5 text-red-500 float-right" />}
                    </button>
                  );
                })}
             </div>
          </div>
        </div>
      )}
    </div>
  );
};
