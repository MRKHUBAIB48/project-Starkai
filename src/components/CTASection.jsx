import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-15 blur-[100px]" />
      <Reveal as="div" className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to put your busywork on autopilot?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-slate-300">
          Start with a free automation audit. We'll show you exactly where an agent
          can save your team the most time.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-soft px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-white"
          >
            Book Audit
            <ArrowUpRight size={16} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Explore Services
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default CTASection;
