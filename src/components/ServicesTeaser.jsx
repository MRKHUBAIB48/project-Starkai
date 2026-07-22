import { Headset, Target, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import GradientMesh from "./GradientMesh.jsx";

const HIGHLIGHTS = [
  {
    icon: Headset,
    title: "Customer Support Agents",
    desc: "Resolve tickets, answer FAQs, and escalate edge cases, trained on your docs, tone, and policies.",
  },
  {
    icon: Target,
    title: "Sales & Lead Qualification",
    desc: "Qualify inbound leads and book meetings automatically, day or night.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Connect your existing tools and automate the multi-step processes eating up your team's time.",
  },
];

function ServicesTeaser() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-24">
      <GradientMesh />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-black tracking-tight text-fog sm:text-4xl">
            AI agents built around how your business actually runs
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="glass rounded-2xl p-6 transition-all hover-color-pop"
              >
                <div className="glass inline-flex rounded-xl p-3 text-cyan">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-fog">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{item.desc}</p>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-cyan-dim/40 px-6 py-2.5 text-sm font-semibold text-cyan-dim transition-colors hover:border-cyan-dim hover:bg-cyan-dim hover:text-white"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesTeaser;
