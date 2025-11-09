import React from 'react';

const Stat = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white backdrop-blur">
    <div className="text-3xl font-bold md:text-4xl">{value}</div>
    <div className="mt-2 text-sm text-gray-300">{label}</div>
  </div>
);

const StatsGrid = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Stat label="Slides" value="16" />
        <Stat label="Theme" value="Dark Futuristic" />
        <Stat label="Mode" value="AI + Human" />
        <Stat label="Focus" value="Psychology & Work" />
      </div>
    </section>
  );
};

export default StatsGrid;
