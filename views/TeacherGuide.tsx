import React from 'react';
import { Download } from 'lucide-react';

export const TeacherGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-200 my-8">
      <header className="border-b border-gray-100 pb-6 mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Teacher's Notes</h2>
        <p className="text-slate-500 mt-2">Based on the CLIL Worksheet "Natural Resources (The Water Cycle)" by Keith Kelly.</p>
      </header>

      <section className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-3">Objectives</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Geography:</strong> Students understand the mechanics of the water cycle (evaporation, condensation, precipitation, run-off).</li>
            <li><strong>Language:</strong> Use of Present Simple Tense and Present Simple Passive.</li>
            <li><strong>Vocabulary:</strong> Focus on process verbs (evaporates, rises, condenses) and state nouns (vapour, droplets).</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-3">Lesson Procedure</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-900">1. Introduction (Explorer Mode)</h4>
              <p className="text-sm text-gray-600 mt-1">Use the 'Concept Explorer' to introduce the diagram. Have students click nodes and repeat the terms aloud.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-900">2. Vocabulary Check</h4>
              <p className="text-sm text-gray-600 mt-1">Use the 'Vocabulary' tab. Ask pairs to quiz each other using the flashcards.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-900">3. Process Construction (Practice Mode)</h4>
              <p className="text-sm text-gray-600 mt-1">Students complete the 'Sentence Builder' task. This mirrors Exercise 3 from the original worksheet, connecting cause and effect.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-3">Differentiation</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Support:</strong> Allow students to keep the 'Explorer' tab open in a separate window while doing the practice tasks.</li>
            <li><strong>Challenge:</strong> Ask students to write a short paragraph describing the cycle using the sequencing words: <em>Firstly, Next, Then, Finally</em>.</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
        <button 
          onClick={() => window.print()} 
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
        >
          <Download size={18} /> Print Guide
        </button>
      </div>
    </div>
  );
};
