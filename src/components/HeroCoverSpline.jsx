import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCoverSpline = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 md:py-36">
        <p className="text-sm uppercase tracking-widest text-cyan-300/80">Slide 1 — Opening</p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">AI: Shaping the Future of Humanity</h1>
        <ul className="mt-4 space-y-2 text-lg md:text-xl">
          <li>AI is no longer the future—it’s the oxygen of the digital world</li>
          <li>Reshaping industries and job descriptions</li>
          <li>Challenging human intelligence</li>
          <li><span className="font-semibold">Key Question:</span> How do we protect the parts of ourselves AI cannot replicate?</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroCoverSpline;
