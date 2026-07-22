import { Activity, UserCheck, BrainCircuit, MessagesSquare, LineChart, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal.jsx";
import GradientMesh from "./GradientMesh.jsx";

const FEATURES = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    desc: "Watch every agent action as it happens, with live status and alerts if anything needs attention.",
    large: true,
  },
  {
    icon: UserCheck,
    title: "Human Handoff",
    desc: "Escalates ambiguous or high-stakes situations straight to your team.",
  },
  {
    icon: BrainCircuit,
    title: "Custom Training",
    desc: "Trained on your docs, tone, and policies.",
  },
  {
    icon: MessagesSquare,
    title: "Multi-Channel Support",
    desc: "One agent, working across chat, email, and Slack.",
  },
  {
    icon: LineChart,
    title: "ROI Reporting",
    desc: "Dashboards showing time saved and cost per outcome.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Scoped access, audit logs, encryption in transit and at rest.",
  },
];

const ACTIVITY = [30, 45, 38, 60, 52, 70, 64, 82, 74, 90];

function MonitoringGraph() {
  const width = 300;
  const height = 96;
  const max = 100;
  const stepX = width / (ACTIVITY.length - 1);

  const points = ACTIVITY.map((v, i) => [i * stepX, height - (v / max) * height]);
  const linePath = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;
  const [lastX, lastY] = points[points.length - 1];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-6 h-24 w-full overflow-visible">
      <defs>
        <linearGradient id="monitorFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#monitorFill)" />
      <path d={linePath} fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastX} cy={lastY} r="4" className="animate-pulse-slow" fill="#22d3ee" />
    </svg>
  );
}

function Features() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
      <GradientMesh />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            Every agent ships with these built in
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.title}
                delay={(i % 4) * 90}
                className={`glass-dark group rounded-2xl p-6 transition-all duration-300 hover:border-cyan-soft/40 hover:-translate-y-1 ${
                  feature.large ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex rounded-xl bg-white/5 p-3 text-cyan-soft transition-colors group-hover:bg-cyan-soft group-hover:text-navy">
                      <Icon size={feature.large ? 26 : 20} strokeWidth={1.75} />
                    </div>
                    {feature.large && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-soft/30 bg-cyan-soft/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-soft">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-soft opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-soft" />
                        </span>
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className={`mt-5 font-semibold text-white ${feature.large ? "text-2xl" : "text-base"}`}>
                    {feature.title}
                  </h3>
                  <p className={`mt-2 leading-relaxed text-slate-300 ${feature.large ? "text-base max-w-sm" : "text-sm"}`}>
                    {feature.desc}
                  </p>
                  {feature.large && <MonitoringGraph />}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
