import { Link } from "react-router-dom";
import { ArrowUpRight, PlayCircle, Bot, CheckCircle2, Zap, ShieldCheck } from "lucide-react";

const STATS = [
  { value: "40+", label: "Hours saved / week per team" },
  { value: "3x", label: "Faster response times" },
  { value: "24/7", label: "Always-on agent coverage" },
];

const CAPABILITIES = [
  "Connected to Zendesk, Slack, CRM",
  "Trained on your support docs",
  "Escalates only when it needs to",
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-20 pb-24 lg:pt-24 lg:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="bg-glow pointer-events-none absolute inset-0" style={{ "--y": "0%" }} />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="fade-left">
          <div
            className="glass-dark fade-up mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-medium text-cyan-soft"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-soft opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-soft" />
            </span>
            Now onboarding early automation partners
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="fade-up block" style={{ animationDelay: "0.12s" }}>
              Automation that thinks.
            </span>
            <span className="fade-up text-gradient text-shimmer block" style={{ animationDelay: "0.28s" }}>
              Agents that work.
            </span>
          </h1>

          <p
            className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-slate-300"
            style={{ animationDelay: "0.2s" }}
          >
            Stark AI designs and deploys custom AI agents that handle the busywork:
            support tickets, lead follow-ups, data entry, internal research. Your
            team spends less time on repetition and more time on what actually grows
            the business.
          </p>

          <div className="fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.28s" }}>
            <Link
              to="/contact"
              className="glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-soft px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-white"
            >
              Book Audit
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <PlayCircle size={16} />
              See How It Works
            </Link>
          </div>

          <dl className="fade-up mt-16 grid max-w-lg grid-cols-3 gap-3" style={{ animationDelay: "0.36s" }}>
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-dark rounded-xl p-4 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fade-right relative hidden lg:block" style={{ animationDelay: "0.15s" }}>
          <div className="glass-dark relative rounded-2xl p-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <ShieldCheck size={16} className="text-cyan-soft" />
              <span className="text-xs font-semibold text-white">Support Bot: Live</span>
            </div>

            <div className="space-y-3 py-5">
              {CAPABILITIES.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="shrink-0 text-cyan-soft" />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
              <div className="glass-dark flex items-center gap-2 rounded-lg px-3 py-2.5">
                <Bot size={16} className="text-cyan-soft shrink-0" />
                <span className="text-xs text-slate-300">6 agents active</span>
              </div>
              <div className="glass-dark flex items-center gap-2 rounded-lg px-3 py-2.5">
                <Zap size={16} className="text-cyan-soft shrink-0" />
                <span className="text-xs text-slate-300">312 tasks today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
