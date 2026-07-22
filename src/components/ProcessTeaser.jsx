import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Audit",
    desc: "We map your workflows and bottlenecks to find where automation actually pays off.",
  },
  {
    n: "02",
    title: "Build & Integrate",
    desc: "We design and connect the agent to your existing tools, no rip and replace.",
  },
  {
    n: "03",
    title: "Deploy & Monitor",
    desc: "We ship it, then monitor performance and iterate as your business changes.",
  },
];

function ProcessTeaser() {
  return (
    <section className="relative bg-ink py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-black tracking-tight text-fog sm:text-4xl">
            From audit to live agent in weeks, not months
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90} className="glass hover-color-pop rounded-2xl p-6">
              <span className="font-mono text-3xl font-bold text-line">{step.n}</span>
              <h3 className="mt-4 text-base font-semibold text-fog">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{step.desc}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/process"
            className="inline-flex items-center rounded-full border border-cyan-dim/40 px-6 py-2.5 text-sm font-semibold text-cyan-dim transition-colors hover:border-cyan-dim hover:bg-cyan-dim hover:text-white"
          >
            See the full process
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProcessTeaser;
