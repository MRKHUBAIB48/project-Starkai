import { useState } from "react";
import { Quote } from "lucide-react";
import Reveal from "./Reveal.jsx";
import GradientMesh from "./GradientMesh.jsx";

// Placeholder quotes: swap in real client testimonials once you have them.
const QUOTES = [
  {
    quote:
      "We handed our support queue to a Stark AI agent and cut first-response time from hours to seconds. Escalations only reach us when they actually need a human.",
    author: "Operations Lead",
    context: "D2C Retail Brand",
  },
  {
    quote:
      "The lead qualification agent alone paid for itself in the first month. It never sleeps, and it books meetings our reps used to lose to slow follow-up.",
    author: "Head of Sales",
    context: "B2B SaaS Company",
  },
  {
    quote:
      "What stood out was how well it fit our existing tools. No rebuilding our stack. Stark AI just plugged into what we already had.",
    author: "Founder",
    context: "Professional Services Firm",
  },
  {
    quote:
      "Setup took a single afternoon. The agent was already answering real tickets by the next morning, with our tone and our policies.",
    author: "Support Manager",
    context: "E-Commerce Brand",
  },
];

const LOOP = [...QUOTES, ...QUOTES];

function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-24">
      <GradientMesh />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-black tracking-tight text-fog sm:text-4xl">
            What teams notice first
          </h2>
        </Reveal>
      </div>

      <div
        className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`flex w-max gap-5 px-6 animate-marquee ${paused ? "marquee-paused" : ""}`}>
          {LOOP.map((t, i) => (
            <figure
              key={`${t.author}-${i}`}
              className="glass flex w-80 shrink-0 flex-col rounded-2xl p-6"
            >
              <Quote size={22} className="text-cyan-dim" strokeWidth={1.5} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-fog">"{t.quote}"</blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="text-sm font-semibold text-fog">{t.author}</p>
                <p className="text-xs text-ash-dim">{t.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
