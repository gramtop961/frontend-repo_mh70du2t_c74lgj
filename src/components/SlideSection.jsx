import React from 'react';

const SlideSection = ({ id, kicker, title, points }) => {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
      {kicker && (
        <p className="mb-2 text-sm uppercase tracking-widest text-cyan-300/80">{kicker}</p>
      )}
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {Array.isArray(points) && points.length > 0 && (
        <ul className="mt-6 list-disc space-y-2 pl-6 text-lg text-gray-200">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SlideSection;
