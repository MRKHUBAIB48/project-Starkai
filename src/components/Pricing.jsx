import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import GradientMesh from "./GradientMesh.jsx";

const PLANS = [
  {
    name: "Starter",
    monthly: 490,
    yearly: 392,
    desc: "For teams shipping their first agent.",
    features: ["1 automated workflow", "Up to 500 tasks / month", "Email support", "Monthly performance report"],
  },
  {
    name: "Growth",
    monthly: 1290,
    yearly: 1032,
    desc: "For teams running agents across multiple workflows.",
    features: [
      "Up to 5 automated workflows",
      "Up to 5,000 tasks / month",
      "Priority support",
      "Weekly performance reports",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Scale",
    monthly: 2990,
    yearly: 2392,
    desc: "For teams automating across the whole business.",
    features: [
      "Unlimited workflows",
      "Unlimited tasks",
      "Dedicated support engineer",
      "Real-time performance dashboard",
      "Custom integrations",
      "Quarterly strategy review",
    ],
  },
];

const COMPARISON = [
  { label: "Understands your specific workflow", generic: false, stark: true },
  { label: "Escalates to a human when unsure", generic: false, stark: true },
  { label: "Connects to your existing tools", generic: false, stark: true },
  { label: "Improves from real usage over time", generic: false, stark: true },
  { label: "Transparent ROI reporting", generic: false, stark: true },
  { label: "Generic scripted responses only", generic: true, stark: false },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing that scales with your agents"
        description="No per-seat fees. Pick the plan that matches how many workflows you want automated, and switch any time."
      />
      <section id="pricing" className="relative overflow-hidden bg-ink pb-20 lg:pb-24">
        <GradientMesh />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass relative mx-auto grid w-full max-w-xs grid-cols-2 rounded-full p-1.5">
            <span
              className={`absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-cyan shadow transition-transform duration-300 ease-out ${
                yearly ? "translate-x-[calc(100%+0.75rem)]" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`relative z-10 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                !yearly ? "text-white" : "text-ash-dim"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`relative z-10 flex items-center justify-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                yearly ? "text-white" : "text-ash-dim"
              }`}
            >
              Yearly
              <span className={`text-[10px] ${yearly ? "text-white/80" : "text-cyan-dim"}`}>-20%</span>
            </button>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={i * 90}
                className={`glass relative rounded-2xl p-7 transition-all hover-pop ${
                  plan.popular ? "ring-2 ring-cyan-dim/60" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-cyan-dim/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-dim">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-fog">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-ash">{plan.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-fog">${yearly ? plan.yearly : plan.monthly}</span>
                  <span className="text-sm text-ash-dim">/ month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ash">
                      <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-7 block rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-cyan text-white hover:bg-cyan-dim"
                      : "border border-line text-fog hover:border-cyan-dim hover:text-cyan-dim"
                  }`}
                >
                  Get Started
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-24 max-w-3xl text-center">
            <h2 className="text-2xl font-black text-fog">Stark AI agents vs. generic chatbots</h2>
            <div className="glass mt-8 overflow-hidden rounded-2xl text-left">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-line/50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-ash-dim">
                <span />
                <span className="text-center">Generic Chatbot</span>
                <span className="text-center text-cyan-dim">Stark AI Agent</span>
              </div>
              {COMPARISON.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-line/50 px-6 py-4 transition-colors last:border-b-0 hover:bg-surface-2"
                >
                  <span className="text-sm text-fog">{row.label}</span>
                  <span className="flex justify-center">
                    {row.generic ? <Check size={18} className="text-cyan" /> : <X size={18} className="text-ash-dim" />}
                  </span>
                  <span className="flex justify-center">
                    {row.stark ? <Check size={18} className="text-cyan" /> : <X size={18} className="text-ash-dim" />}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Pricing;
