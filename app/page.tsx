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

      {/* ── Share ── */}
      <FadeSection className="py-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm text-stone-500 font-sans tracking-widest uppercase mb-6">Share</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://twitter.com/intent/tweet?text=What%20happens%20when%20something%20gives%20you%20everything%20%E2%80%94%20and%20asks%20for%20nothing%3F&url=https%3A%2F%2Fwwaf.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-yellow-600 transition-colors"
              aria-label="Share on X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwwaf.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-yellow-600 transition-colors"
              aria-label="Share on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwwaf.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-yellow-600 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://bsky.app/intent/compose?text=What%20happens%20when%20something%20gives%20you%20everything%20%E2%80%94%20and%20asks%20for%20nothing%3F%20https%3A%2F%2Fwwaf.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-yellow-600 transition-colors"
              aria-label="Share on Bluesky"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.513 6.182 3.277-4.349.398-8.18 2.71-4.249 9.55C5.636 18.545 8.498 15.18 12 15.18c3.502 0 6.364 3.365 9.443 7.894 3.931-6.84.1-9.152-4.249-9.55 2.582.236 5.397-.65 6.182-3.277.246-.828.624-5.788.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.3-1.664-.62-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z"/></svg>
            </a>
            <button
              onClick={() => { navigator.clipboard.writeText('https://wwaf.ai'); }}
              className="text-stone-500 hover:text-yellow-600 transition-colors"
              aria-label="Copy link"
              title="Copy link"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            </button>
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
