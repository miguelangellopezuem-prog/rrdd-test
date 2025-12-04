import React from 'react';
import { WaterCycleDiagram } from '../components/WaterCycleDiagram';
import { BookOpen } from 'lucide-react';

export const Explorer: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <header className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <BookOpen className="text-blue-500" />
          Concept Explorer
        </h2>
        <p className="text-gray-600">
          Click on the numbers in the diagram to learn about each stage of the water cycle.
        </p>
      </header>

      <WaterCycleDiagram />

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h3 className="font-bold text-blue-900 mb-2">Quick Summary</h3>
        <p className="text-blue-800">
          The water cycle is the continuous movement of water within the Earth and atmosphere. 
          It involves liquid water evaporating into water vapour, condensing to form clouds, 
          and precipitating back to earth as rain or snow.
        </p>
      </div>
    </div>
  );
};
