import { Puzzle, UserCheck, Rocket, LineChart, ShieldCheck, LifeBuoy } from "lucide-react";
import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import GradientMesh from "./GradientMesh.jsx";

const REASONS = [
  {
    icon: Puzzle,
    title: "Built for your workflow",
    desc: "Not a generic bot bolted onto your site. Every agent is scoped to your tools, data, and process.",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-loop by design",
    desc: "Agents know their limits. Anything ambiguous or high-stakes gets escalated to your team automatically.",
  },
  {
    icon: Rocket,
    title: "Fast deployment",
    desc: "Most first agents go live in 2–4 weeks, not the six-month engagements typical of enterprise AI vendors.",
  },
  {
    icon: LineChart,
    title: "Transparent ROI reporting",
    desc: "Every agent ships with dashboards showing time saved, tasks handled, and cost per outcome.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & compliant by default",
    desc: "Your data stays yours. Access controls, audit logs, and encryption are built in, not bolted on.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    desc: "We don't disappear after launch. We monitor, retrain, and extend your agents as your business changes.",
  },
];

function WhyUs() {
  return (
    <>
      <PageHero
        eyebrow="Why Stark AI"
        title="Automation that earns your team's trust"
      />
      <section id="why-us" className="relative overflow-hidden bg-ink pb-20 lg:pb-24">
      <GradientMesh />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal
                key={reason.title}
                delay={(i % 3) * 90}
                className="hover-color-pop flex gap-4 rounded-2xl p-3"
              >
                <div className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-cyan">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-fog">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ash">{reason.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      </section>
    </>
  );
}

export default WhyUs;
