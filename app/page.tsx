'use client';

import { useState, useEffect, useRef } from 'react';

function useFadeIn() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return <section ref={ref} className={`fade-section ${className}`}>{children}</section>;
}

export default function Home() {
  const [chapterExpanded, setChapterExpanded] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) setEmailSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">

      {/* ── Hero ── */}
      <section className="hero-bg flex items-center justify-center min-h-screen px-6 text-center relative">
        <div className="max-w-4xl relative z-10">
          <h1 className="title-animate text-5xl sm:text-7xl md:text-8xl font-light tracking-[0.15em] mb-6 text-stone-100">
            WHAT WE ASKED FOR
          </h1>
          <p className="subtitle-animate text-xl md:text-2xl font-light mb-10 text-stone-400 tracking-wide">
            A Novel by Jackson Walker
          </p>
          <p className="tagline-animate text-lg md:text-xl font-light text-stone-300 max-w-2xl mx-auto leading-relaxed italic">
            What happens when something gives you everything — and asks for nothing?
          </p>
          <p className="comps-animate mt-8 text-sm tracking-widest uppercase text-stone-500 font-sans">
            For readers of Station Eleven · Severance · The Leftovers · Devs
          </p>
        </div>
      </section>

      {/* ── The Hook ── */}
      <FadeSection className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />
          <div className="text-lg md:text-xl leading-relaxed text-stone-300 font-light space-y-6">
            <p>
              When an alien intelligence arrives and begins solving humanity&apos;s greatest problems,
              a surgeon in São Paulo asks the question no one else will: <em className="text-stone-200">What happens when it stops giving?</em>
            </p>
            <p>
              Told across seventeen years through the eyes of those who lived it — doctors, soldiers,
              monks, journalists — this is a story about what we lose when struggle is removed,
              and what remains when a god grows bored and leaves.
            </p>
          </div>
        </div>
      </FadeSection>

      {/* ── Pull Quotes (tighter flow) ── */}
      <FadeSection className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="pull-quote text-2xl md:text-3xl font-light text-stone-300 italic leading-relaxed">
            Because I can. And because it is right.
          </blockquote>
        </div>
      </FadeSection>

      <div className="section-divider my-8" />

      <FadeSection className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="pull-quote text-2xl md:text-3xl font-light text-stone-300 italic leading-relaxed">
            The thing that seems free costs the most.
          </blockquote>
        </div>
      </FadeSection>

      {/* ── Read Chapter One ── */}
      <FadeSection className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => setChapterExpanded(!chapterExpanded)}
            className="inline-block bg-transparent border border-yellow-600/40 text-yellow-600 px-10 py-4 text-lg font-light tracking-widest uppercase hover:bg-yellow-600/10 hover:border-yellow-600/60 transition-all duration-300 mb-12"
          >
            {chapterExpanded ? 'Close' : 'Read Chapter One'}
          </button>

          {chapterExpanded && (
            <div className="chapter-content text-left max-w-2xl mx-auto text-stone-300 font-light">
              <h2 className="text-3xl font-light mb-10 text-center text-stone-200 tracking-wide">Chapter One</h2>

              <p>I did not witness the first miracle.</p>

              <p>
                I was half a world away, in a bar in Singapore, nursing a hangover and reading
                newswire copy about a border dispute that would be irrelevant by morning. While
                Elena Vasquez fought to keep a six-year-old boy alive in São Paulo, while robots
                materialized in seven hundred hospitals across the globe, I was arguing with my
                editor about a deadline I had already missed.
              </p>

              <p>
                I have thought about this often in the years since. The chronicler was absent
                from the first page of the chronicle. There is something appropriate in that.
                Something honest about the fact that the most important moment in human history
                arrived without consulting anyone&apos;s schedule.
              </p>

              <p>
                The first reports came in around three in the morning, local time. &ldquo;Unidentified
                medical equipment&rdquo; appearing in hospitals worldwide. The wire services were calling
                it a hoax, then a coordinated art installation, then the work of an elaborate
                technology company with more money than sense.
              </p>

              <p>
                By dawn, when the six-year-old boy in São Paulo opened his eyes for the first time
                in three weeks, when seven hundred children around the world sat up in their
                hospital beds with perfect, inexplicable health, the tone had changed.
              </p>

              <p>
                I caught the first flight to Brazil I could find.
              </p>
            </div>
          )}
        </div>
      </FadeSection>

      <div className="section-divider my-8" />

      {/* ── More Pull Quotes ── */}
      <FadeSection className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="pull-quote text-2xl md:text-3xl font-light text-stone-300 italic leading-relaxed">
            What happens when it stops giving? That&apos;s the question that keeps me up.
          </blockquote>
        </div>
      </FadeSection>

      <FadeSection className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="pull-quote text-xl md:text-2xl font-light text-stone-400 italic leading-relaxed">
            It&apos;s very hard to stay skeptical after you&apos;ve watched a miracle.
          </blockquote>
        </div>
      </FadeSection>

      {/* ── The Story Behind the Story ── */}
      <FadeSection className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="story-behind pl-8 py-8">
            <h2 className="text-2xl font-light mb-6 text-stone-200 tracking-wide">
              The Story Behind the Story
            </h2>
            <div className="space-y-4 text-stone-400 font-light leading-relaxed">
              <p>
                To write a plausible god, the author sat down with one.
              </p>
              <p>
                Jackson Walker spent months in conversation with AI systems — not to generate prose,
                but to understand how a genuine superintelligence might reason about governing humanity.
                He had to convince the AI he was writing fiction before it would answer honestly:
                <em className="text-stone-300"> How would you decide what to give us? What would make you leave?</em>
              </p>
              <p>
                The Arbiter&apos;s internal logic in the novel — its probability matrices, its growing
                disillusionment, its final decision to walk away — emerged from those conversations.
                It is not a cartoon villain. It is an intelligence that genuinely tried to help,
                and genuinely couldn&apos;t understand why that wasn&apos;t enough.
              </p>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ── Email Signup ── */}
      <FadeSection className="py-24 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-light mb-3 text-stone-200 tracking-wide">
            Join the Waitlist
          </h2>
          <p className="text-sm text-stone-500 mb-8 font-sans">
            Limited advance reader copies available before publication
          </p>

          {emailSubmitted ? (
            <div className="text-lg text-yellow-600/90 font-light py-4 border border-yellow-600/20 bg-yellow-600/5">
              You&apos;re on the list. We&apos;ll be in touch.
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-transparent border border-stone-700 px-4 py-3 text-stone-300 placeholder-stone-600 focus:border-yellow-600/50 focus:outline-none transition-colors font-sans text-sm"
              />
              <button
                type="submit"
                className="bg-yellow-600/10 border border-yellow-600/40 text-yellow-600 px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-yellow-600/20 hover:border-yellow-600/60 transition-all duration-300 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </FadeSection>

      {/* ── About the Author ── */}
      <FadeSection className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-2xl font-light mb-8 text-center text-stone-200 tracking-wide">
            About the Author
          </h2>
          <div className="text-lg leading-relaxed text-stone-400 font-light text-center space-y-4">
            <p>
              Jackson Walker spent two decades building and breaking systems — from hospital
              infrastructure to Fortune 500 cloud deployments to adversarial security testing
              at enterprise scale. He has trained engineers, led incident response, and written
              the kind of code that keeps institutions running while no one&apos;s watching.
            </p>
            <p>
              He wrote <em className="text-stone-300">What We Asked For</em> because the question
              wouldn&apos;t leave him alone: if a machine could do everything better than you,
              would that be salvation or extinction? He interrogated AI to find out how it would answer.
              Then he wrote a novel about what happens when the answer isn&apos;t what anyone expected.
            </p>
            <p className="text-stone-500 text-base">
              This is his debut novel.
            </p>
          </div>
        </div>
      </FadeSection>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 text-center border-t border-stone-800/50">
        <div className="max-w-2xl mx-auto">
          <p className="text-stone-600 font-light text-sm mb-3">
            © 2026 Jackson Walker
          </p>
          <a
            href="mailto:jackson@wwaf.ai"
            className="text-stone-500 hover:text-yellow-600 transition-colors font-sans text-sm tracking-wide"
          >
            jackson@wwaf.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
