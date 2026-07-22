import { useState } from "react";
import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import GradientMesh from "./GradientMesh.jsx";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Audit",
    desc: "We map your current workflows, tools, and bottlenecks to find where automation actually pays off.",
  },
  {
    n: "02",
    title: "Agent Design",
    desc: "We architect the right agent, or agent team, for the job, including guardrails and escalation paths.",
  },
  {
    n: "03",
    title: "Build & Integrate",
    desc: "We connect the agent to your existing stack: CRM, helpdesk, Slack, internal databases. No rip and replace.",
  },
  {
    n: "04",
    title: "Test & Refine",
    desc: "We run the agent against real scenarios, tune its logic and prompts, and validate results before go-live.",
  },
  {
    n: "05",
    title: "Deploy & Monitor",
    desc: "We ship it, then monitor performance and iterate. Automation is a process, not a one-time install.",
  },
];

function Process() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From audit to live agent in weeks, not months"
      />
      <section id="process" className="relative overflow-hidden bg-surface pb-20 lg:pb-24">
      <GradientMesh />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => {
            const isActive = active === step.n;
            return (
              <Reveal
                key={step.n}
                delay={i * 90}
                as="button"
                type="button"
                onClick={() => setActive(isActive ? null : step.n)}
                className={`cursor-pointer rounded-2xl p-6 text-left transition-all duration-300 ${
                  isActive ? "bg-cyan text-white shadow-xl" : "glass hover-pop"
                }`}
              >
                <span
                  className={`font-mono text-3xl font-bold lg:text-4xl ${
                    isActive ? "text-white/70" : "text-line"
                  }`}
                >
                  {step.n}
                </span>
                <h3 className={`mt-4 text-base font-semibold ${isActive ? "text-white" : "text-fog"}`}>
                  {step.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${isActive ? "text-white/85" : "text-ash"}`}>
                  {step.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
      </section>
    </>
  );
}

export default Process;
