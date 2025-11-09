import React from 'react';

const pointsHuman = [0, 1, 2, 3, 4, 5, 6].map((x) => ({ x, y: x * 0.4 + 1 }));
const pointsAI = [0, 1, 2, 3, 4, 5, 6].map((x) => ({ x, y: Math.pow(1.45, x) }));

const width = 640;
const height = 280;
const padding = 36;

const scaleX = (x) => padding + (x / 6) * (width - padding * 2);
const maxY = Math.max(...pointsAI.map((p) => p.y)) * 1.1;
const scaleY = (y) => height - padding - (y / maxY) * (height - padding * 2);

function linePath(points) {
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)},${scaleY(p.y)}`).join(' ');
}

const CognitiveGapChart = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <p className="mb-2 text-sm uppercase tracking-widest text-cyan-300/80">Slide 3 — AI Evolution & Cognitive Gap</p>
      <h3 className="text-2xl font-semibold text-white md:text-3xl">Humans vs AI: The Growing Gap</h3>
      <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-black/60 to-black/20 p-4">
        <svg width={width} height={height} className="mx-auto block">
          <defs>
            <linearGradient id="gradAI" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
            <linearGradient id="gradHuman" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a3a3a3" />
              <stop offset="100%" stopColor="#525252" />
            </linearGradient>
          </defs>
          {/* axes */}
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#334155" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#334155" />
          {/* human */}
          <path d={linePath(pointsHuman)} fill="none" stroke="url(#gradHuman)" strokeWidth="3" />
          {/* ai */}
          <path d={linePath(pointsAI)} fill="none" stroke="url(#gradAI)" strokeWidth="3" />
          {/* labels */}
          <circle cx={scaleX(pointsHuman[6].x)} cy={scaleY(pointsHuman[6].y)} r="4" fill="#9ca3af" />
          <text x={scaleX(pointsHuman[6].x) + 8} y={scaleY(pointsHuman[6].y) + 4} fontSize="12" fill="#e5e7eb">Human (linear)</text>
          <circle cx={scaleX(pointsAI[6].x)} cy={scaleY(pointsAI[6].y)} r="4" fill="#22d3ee" />
          <text x={scaleX(pointsAI[6].x) + 8} y={scaleY(pointsAI[6].y) - 6} fontSize="12" fill="#22d3ee">AI (exponential)</text>
        </svg>
        <div className="mt-3 grid grid-cols-1 gap-4 text-sm text-gray-300 md:grid-cols-3">
          <div>
            <p className="font-medium text-white">Forces Driving AI</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Computation: faster than Moore’s Law</li>
              <li>Data: billions of examples daily</li>
              <li>Self-improvement: AI writes & fixes its own code</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">Learning Curves</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Linear Human Learning</li>
              <li>Exponential AI Learning</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">Cognitive Gap</p>
            <p className="mt-2 text-gray-300">AI outpaces human learning → tools surpass mastered human skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CognitiveGapChart;
