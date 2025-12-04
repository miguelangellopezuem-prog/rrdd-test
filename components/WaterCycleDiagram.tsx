
import React, { useState } from 'react';
import { CYCLE_STAGES } from '../data/content';
import { CycleStage } from '../types';
import { Info, X } from 'lucide-react';

export const WaterCycleDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState<CycleStage | null>(null);

  return (
    <div className="relative w-full aspect-video bg-gradient-to-b from-sky-200 to-sky-50 rounded-xl overflow-hidden shadow-lg border-4 border-white group">
      <style>{`
        @keyframes rise {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-40px); opacity: 0; }
        }
        @keyframes rain {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -20; }
        }
        @keyframes flow {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rise { animation: rise 3s infinite ease-out; }
        .animate-rain { animation: rain 1s linear infinite; }
        .animate-flow { animation: flow 2s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; transform-origin: 100px 100px; }
      `}</style>
      
      {/* Schematic SVG of Water Cycle */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none">
        {/* Sea */}
        <path d="M0,450 Q250,440 500,450 T1000,450 V600 H0 Z" fill="#3b82f6" opacity="0.8" />
        
        {/* Land/Mountain */}
        <path d="M400,600 L600,300 L750,500 L850,200 L1000,600 Z" fill="#84cc16" />
        {/* Mountain shading/detail */}
        <path d="M600,300 L650,400 L550,600" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" /> 
        
        {/* River */}
        {/* Start at valley 750,500 and flow to sea 480,460 */}
        <path 
            d="M750,480 Q700,600 400,600" 
            fill="none" 
            stroke="#60a5fa" 
            strokeWidth="15" 
            strokeLinecap="round"
        />
        {/* Animated River Flow Overlay */}
         <path 
            d="M750,480 Q700,600 400,600" 
            fill="none" 
            stroke="white" 
            strokeWidth="4" 
            strokeDasharray="10,20"
            strokeOpacity="0.5"
            className="animate-flow"
        />
        

        {/* Sun */}
        <g className="animate-spin-slow">
            <circle cx="100" cy="100" r="60" fill="#fbbf24" />
            <g stroke="#fbbf24" strokeWidth="4">
            <line x1="100" y1="20" x2="100" y2="0" />
            <line x1="100" y1="180" x2="100" y2="200" />
            <line x1="180" y1="100" x2="200" y2="100" />
            <line x1="20" y1="100" x2="40" y2="100" />
            <line x1="160" y1="40" x2="175" y2="25" />
            <line x1="40" y1="160" x2="25" y2="175" />
            <line x1="160" y1="160" x2="175" y2="175" />
            <line x1="40" y1="40" x2="25" y2="25" />
            </g>
        </g>

        {/* Clouds */}
        <g className="animate-float">
            <path d="M450,150 Q480,100 550,120 Q600,80 650,130 Q700,120 680,180 Q600,200 550,180 Q480,200 450,150 Z" fill="white" filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.1))" />
        </g>
        <g className="animate-float" style={{ animationDelay: '2s' }}>
            <path d="M700,180 Q730,130 800,150 Q850,110 900,160 Q950,150 930,210 Q850,230 800,210 Q730,230 700,180 Z" fill="#e2e8f0" />
        </g>

        {/* Rain */}
        <g stroke="#93c5fd" strokeWidth="2" strokeDasharray="10,10" className="animate-rain">
           <line x1="750" y1="220" x2="710" y2="430" />
           <line x1="780" y1="230" x2="740" y2="440" />
           <line x1="820" y1="220" x2="780" y2="430" />
        </g>

        {/* Arrows (Evaporation) */}
        <g stroke="#ef4444" strokeWidth="3" fill="none">
           {/* Static base for visibility */}
           <path d="M200,440 Q220,350 180,300" markerEnd="url(#arrowhead)" opacity="0.3" fill="none" />
           <path d="M250,430 Q270,340 230,290" markerEnd="url(#arrowhead)" opacity="0.3" fill="none" />
           
           {/* Animated overlay */}
           <path d="M200,440 Q220,350 180,300" markerEnd="url(#arrowhead)" className="animate-rise" fill="none" />
           <path d="M250,430 Q270,340 230,290" markerEnd="url(#arrowhead)" className="animate-rise" style={{ animationDelay: '1.5s' }} fill="none" />
        </g>

        {/* Arrowhead Def */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
          </marker>
        </defs>
      </svg>

      {/* Interactive Hotspots */}
      {CYCLE_STAGES.map((stage) => (
        <button
          key={stage.id}
          onClick={() => setActiveStage(stage)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
            activeStage?.id === stage.id ? 'bg-blue-600 text-white scale-125 ring-4 ring-blue-200' : 'bg-white text-blue-600 hover:scale-110 hover:bg-blue-50'
          }`}
          style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
          aria-label={`Show info for ${stage.label}`}
        >
          <span className="font-bold">{stage.id}</span>
        </button>
      ))}

      {/* Info Modal/Overlay within diagram */}
      {activeStage && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border-l-4 border-blue-500 animate-fade-in-up z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                {activeStage.id}
              </span>
              {activeStage.label}
            </h3>
            <button 
              onClick={() => setActiveStage(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {activeStage.description}
          </p>
          <div className="mt-2 text-sm text-blue-500 font-medium flex items-center gap-1">
            <Info size={16} /> Click another number to continue
          </div>
        </div>
      )}
    </div>
  );
};
