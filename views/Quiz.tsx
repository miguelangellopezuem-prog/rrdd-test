import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/content';
import { Check, X, Award } from 'lucide-react';

export const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctIndex) score++;
    });
    return score;
  };

  const allAnswered = QUIZ_QUESTIONS.every(q => answers[q.id] !== undefined);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Knowledge Check</h2>
        <p className="text-gray-600">Test your understanding of the Water Cycle.</p>
      </header>

      <div className="space-y-8">
        {QUIZ_QUESTIONS.map((q, index) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctIndex;
          
          return (
            <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex gap-2">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 flex items-center justify-center rounded-lg text-sm">
                  {index + 1}
                </span>
                {q.question}
              </h3>
              
              <div className="space-y-3 pl-10">
                {q.options.map((option, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleSelect(q.id, optIdx)}
                    disabled={showResults}
                    className={`w-full text-left p-3 rounded-lg border-2 flex justify-between items-center transition-all ${
                      showResults
                        ? optIdx === q.correctIndex
                          ? 'bg-green-50 border-green-500 text-green-800'
                          : userAnswer === optIdx
                            ? 'bg-red-50 border-red-500 text-red-800'
                            : 'bg-gray-50 border-gray-100 text-gray-400'
                        : userAnswer === optIdx
                          ? 'bg-blue-50 border-blue-500 text-blue-900'
                          : 'bg-white border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {option}
                    {showResults && optIdx === q.correctIndex && <Check size={20} className="text-green-600" />}
                    {showResults && userAnswer === optIdx && optIdx !== q.correctIndex && <X size={20} className="text-red-600" />}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center pb-12">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={!allAnswered}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
              allAnswered 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Submit Answers
          </button>
        ) : (
          <div className="text-center animate-bounce-in">
            <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
              <Award className="w-12 h-12 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              You scored {calculateScore()} / {QUIZ_QUESTIONS.length}
            </h3>
            <p className="text-gray-600 mt-2">
              {calculateScore() === QUIZ_QUESTIONS.length ? 'Perfect score! You are a water cycle expert!' : 'Good try! Review the explorer to get them all right.'}
            </p>
            <button 
              onClick={() => { setShowResults(false); setAnswers({}); }}
              className="mt-6 text-blue-600 font-semibold hover:underline"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
