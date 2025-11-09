import React from 'react';

const RoleCard = ({ title, from, to, color }) => (
  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-white">
    <div className="text-sm text-gray-300">{from} →</div>
    <div className="mt-1 text-xl font-semibold">{to}</div>
    <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${color} opacity-30 blur-2xl`} />
    <div className="mt-3 text-sm text-gray-400">{title}</div>
  </div>
);

const RolesDiagram = () => {
  const roles = [
    { title: 'AI automates execution', from: 'Executors', to: 'Architects', color: 'bg-cyan-400' },
    { title: 'Humans validate & direct', from: 'Generators', to: 'Validators', color: 'bg-emerald-400' },
    { title: 'Oversight at scale', from: 'Builders', to: 'Supervisors', color: 'bg-violet-400' },
  ];
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <p className="mb-2 text-sm uppercase tracking-widest text-cyan-300/80">Slide 7 — How AI Changes Technical Work</p>
      <h3 className="text-2xl font-semibold text-white md:text-3xl">From Doers to Directors</h3>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {roles.map((r) => (
          <RoleCard key={r.to} {...r} />
        ))}
      </div>
    </section>
  );
};

export default RolesDiagram;
