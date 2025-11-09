import React from 'react';
import HeroSpline from './components/HeroSpline';
import SlideSection from './components/SlideSection';
import StatsGrid from './components/StatsGrid';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <HeroSpline />

      <div className="space-y-4">
        <SlideSection
          id="slide-2"
          kicker="Slide 2 — The Breakpoint"
          title="Humanity at the Edge of the AI Revolution"
          points={[
            'Fastest technological shift in history',
            'Adoption timeline:',
            'Writing: 2,000 years',
            'Printing press: 500 years',
            'Smartphones: 10 years',
            'AI tools: <12 months',
            'Humans are not adapted for exponential speed',
          ]}
        />

        <SlideSection
          id="slide-3"
          kicker="Slide 3 — AI Evolution & Cognitive Gap"
          title="Humans vs AI: The Growing Gap"
          points={[
            'Forces Driving AI:',
            'Computation: faster than Moore’s Law',
            'Data: billions of examples daily',
            'Self-improvement: AI writes & fixes its own code',
            'Linear Human Learning: slow, steady, experience-based',
            'Exponential AI Learning: iterative, rapidly improving',
            'Cognitive Gap: AI outpaces human learning → tools surpass mastered human skills',
          ]}
        />

        <SlideSection
          id="slide-4"
          kicker="Slide 4 — The New Reality"
          title="AI as Co-Pilot in Our Lives"
          points={[
            'AI now thinks with us—and sometimes for us',
            'Examples:',
            'Designers ask AI instead of Illustrator',
            'Developers ask AI instead of debugging manually',
            'Students ask AI instead of studying alone',
            'Roles AI plays: assistant, co-pilot, teacher, comforter',
            'Impact: reshaping human psychology',
          ]}
        />

        <SlideSection
          id="slide-5"
          kicker="Slide 5 — The Economic Picture"
          title="The Job Transformation"
          points={[
            'WEF predicts 92M jobs lost, 170M new jobs by 2030',
            'Not apocalypse—transformation',
            'Danger: skill mismatch, not unemployment',
            'Jobs exist, but people must have the right skills',
          ]}
        />

        <SlideSection
          id="slide-6"
          kicker="Slide 6 — Who Is at Risk?"
          title="Knowledge Workers First"
          points={[
            'Technical workers are most affected',
            'AI impacts knowledge work first, not manual labor',
            'AI capabilities include:',
            'Writing & testing code',
            'Analyzing data',
            'Designing interfaces',
            'Generating content',
            'Risk: AI mastering tasks humans considered intelligent',
          ]}
        />

        <SlideSection
          id="slide-7"
          kicker="Slide 7 — How AI Changes Technical Work"
          title="From Doers to Directors"
          points={[
            'AI automates execution',
            'Humans focus on direction & validation',
            'Shift in roles:',
            'Executors → Architects',
            'Generators → Validators',
            'Builders → Supervisors',
          ]}
        />

        <SlideSection
          id="slide-8"
          kicker="Slide 8 — Psychological Earthquake"
          title="AI & the Human Mind"
          points={[
            'AI-Induced Insecurity: fear, imposter syndrome, self-doubt',
            'Cognitive Offloading → Skill Erosion: reliance on AI weakens human skills',
            'Attention Fragmentation: overload reduces deep thinking and patience',
            'AI reshapes human cognition as much as the workplace',
          ]}
        />

        <SlideSection
          id="slide-9"
          kicker="Slide 9 — AI & Identity"
          title="When Machines Challenge Human Value"
          points={[
            'AI outperforms in: intelligence, speed, skill, expertise, accuracy',
            'Raises question: What does it mean to be human when intelligence is automated?',
          ]}
        />

        <SlideSection
          id="slide-10"
          kicker="Slide 10 — AI Addiction & Emotional Dependence"
          title="The Rise of AI Attachment"
          points={[
            'Humans rely on AI for:',
            'Comfort, validation, advice, companionship, confidence',
            'AI is instant, patient, non-judgmental → addictive',
            'Risk: preferring AI over human relationships',
          ]}
        />

        <SlideSection
          id="slide-11"
          kicker="Slide 11 — The Good News"
          title="AI as an Amplifier, Not a Threat"
          points={[
            'AI benefits:',
            'Accelerates science & cures',
            'Boosts creativity',
            'Removes repetitive work',
            'Assists disabled individuals',
            'Makes knowledge universal',
            'AI amplifies humanity if used wisely',
          ]}
        />

        <SlideSection
          id="slide-12"
          kicker="Slide 12 — Human Skills AI Cannot Replace"
          title="The Human Advantage"
          points={[
            'Emotional intelligence ❤️',
            'Creativity beyond training 🎨',
            'Moral judgment ⚖️',
            'Cultural understanding 🌍',
            'Lived experience 🧠',
            'Human trust & relationships 👥',
          ]}
        />

        <SlideSection
          id="slide-13"
          kicker="Slide 13 — How We Save Ourselves"
          title="Adaptation in the AI Era"
          points={[
            'Collaborate with AI, don’t compete',
            'Thriving humans will:',
            'Understand AI deeply',
            'Question outputs',
            'Design human-first systems',
            'Apply ethical judgment',
            'Lead & communicate',
            'Solve undefined problems',
            'Value shifts: doing → deciding',
          ]}
        />

        <SlideSection
          id="slide-14"
          kicker="Slide 14 — The 3 Rules for Survival"
          title="Thriving With AI"
          points={[
            'Use AI daily — extend thinking, don’t replace it',
            'Build human skills — creativity, empathy, leadership, ethics, strategy',
            'Protect your mind — limit over-reliance, practice deep thinking, stay grounded',
          ]}
        />

        <SlideSection
          id="slide-15"
          kicker="Slide 15 — The Final Message"
          title="Upgrade Yourself or Be Left Behind"
          points={[
            'AI won’t replace humans—only humans who refuse to evolve',
            'This revolution is about: psychology, identity, human purpose',
            'Human mind = greatest technology',
            'Goal: upgrade yourself, don’t outrun AI',
          ]}
        />
      </div>

      <StatsGrid />
      <Footer />
    </div>
  );
};

export default App;
