import React from 'react';

const data = [
  { label: 'Writing', value: 2000, color: 'bg-gray-500' },
  { label: 'Printing press', value: 500, color: 'bg-slate-400' },
  { label: 'Smartphones', value: 10, color: 'bg-emerald-400' },
  { label: 'AI tools', value: 0.9, color: 'bg-cyan-400' }, // ~<12 months
];

// Normalize values to percentages for visual comparison
const maxVal = Math.max(...data.map((d) => d.value));
const normalized = data.map((d) => ({ ...d, width: Math.max(6, Math.round((d.value / maxVal) * 100)) }));

const AdoptionTimeline = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12 text-white">
      <p className="mb-2 text-sm uppercase tracking-widest text-cyan-300/80">Slide 2 — The Breakpoint</p>
      <h3 className="text-2xl font-semibold md:text-3xl">Adoption timeline</h3>
      <div className="mt-6 space-y-4">
        {normalized.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="w-44 shrink-0 text-sm text-gray-300">{item.label}</div>
            <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className={`${item.color} h-full rounded-full`} 
                style={{ width: `${item.width}%` }}
                aria-label={`${item.label} bar`}
              />
            </div>
            <div className="w-24 shrink-0 text-right text-sm text-gray-400">
              {item.label === 'AI tools' ? '<12 months' : `${item.value.toLocaleString()} years`}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-400">Humans are not adapted for exponential speed.</p>
    </section>
  );
};

export default AdoptionTimeline;
