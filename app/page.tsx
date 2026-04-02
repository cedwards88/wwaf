'use client';

import { useState } from 'react';

export default function Home() {
  const [chapterExpanded, setChapterExpanded] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xdkgjlqa', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light tracking-wide mb-6 title-glow text-stone-200">
            WHAT WE ASKED FOR
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-stone-300">
            A Novel by Jackson Walker
          </p>
          <p className="text-lg md:text-xl font-light text-stone-400 max-w-3xl mx-auto leading-relaxed">
            What happens when something gives you everything — and asks for nothing?
          </p>
        </div>
      </section>

      {/* The Hook */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-lg md:text-xl leading-relaxed text-stone-300 font-light">
            <p className="mb-6">
              When an alien intelligence arrives and begins solving humanity's greatest problems,
              a surgeon in São Paulo asks the question no one else will: What happens when it stops giving?
            </p>
            <p>
              Told across seventeen years through the eyes of those who lived it — doctors, soldiers,
              monks, journalists — this is a story about what we lose when struggle is removed,
              and what remains when a god grows bored and leaves.
            </p>
          </div>
        </div>
      </section>

      {/* First Pull Quote */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="pull-quote text-2xl md:text-3xl font-light text-stone-300 italic leading-relaxed">
            She went on living anyway. That was the answer. Not to Raj's question. To all of it.
          </blockquote>
        </div>
      </section>

      {/* Spacer */}
      <div className="py-20"></div>

      {/* Second Pull Quote */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="pull-quote text-2xl md:text-3xl font-light text-stone-300 italic leading-relaxed">
            God is not a provider. God is the reason provision matters.
          </blockquote>
        </div>
      </section>

      {/* Read Chapter One */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => setChapterExpanded(!chapterExpanded)}
            className="inline-block bg-transparent border border-yellow-600/40 text-yellow-600 px-8 py-4 text-lg font-light tracking-wide hover:bg-yellow-600/10 transition-colors duration-300 mb-12"
          >
            {chapterExpanded ? 'Close Chapter' : 'Read Chapter One'}
          </button>

          {chapterExpanded && (
            <div className="chapter-content text-left max-w-2xl mx-auto text-stone-300 font-light animate-in slide-in-from-top duration-500">
              <h2 className="text-2xl font-light mb-8 text-center text-stone-200">Chapter One</h2>

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
                arrived without consulting anyone's schedule.
              </p>

              <p>
                The first reports came in around three in the morning, local time. "Unidentified
                medical equipment" appearing in hospitals worldwide. The wire services were calling
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
      </section>

      {/* Third Pull Quote */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="pull-quote text-2xl md:text-3xl font-light text-stone-300 italic leading-relaxed">
            You were an adequate first project.
          </blockquote>
        </div>
      </section>

      {/* Fourth Pull Quote */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="pull-quote text-2xl md:text-3xl font-light text-stone-300 italic leading-relaxed">
            The most interesting thing about her. And still not interesting enough.
          </blockquote>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-light mb-8 text-stone-200">
            Get notified when the book launches
          </h2>

          {emailSubmitted ? (
            <div className="text-lg text-yellow-600 font-light">
              Thank you! You'll be notified when the book is available.
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="bg-transparent border border-stone-600 px-4 py-3 text-stone-300 placeholder-stone-500 focus:border-yellow-600/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-transparent border border-yellow-600/40 text-yellow-600 px-6 py-3 font-light tracking-wide hover:bg-yellow-600/10 transition-colors duration-300"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light mb-8 text-center text-stone-200">
            About the Author
          </h2>
          <p className="text-lg leading-relaxed text-stone-300 font-light text-center">
            Jackson Walker is an engineer and cybersecurity consultant who spent two decades
            at the intersection of technology and human systems. He used conversations with AI
            to develop the novel's antagonist — making it not a cartoon villain but a plausible
            intelligence genuinely puzzled by humanity's resistance to its help.
            <em className="text-stone-400">What We Asked For</em> is his debut novel.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-stone-800">
        <div className="max-w-2xl mx-auto">
          <p className="text-stone-500 font-light mb-4">
            © 2026 Jackson Walker
          </p>
          <p className="text-stone-600 mb-4">wwaf.ai</p>
          <a
            href="mailto:gltk@duck.com"
            className="text-stone-400 hover:text-yellow-600 transition-colors font-light"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}