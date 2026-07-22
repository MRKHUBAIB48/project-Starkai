import {
  Headset,
  Target,
  Workflow,
  FileSearch,
  BrainCircuit,
  Plug,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import GradientMesh from "./GradientMesh.jsx";

const SERVICES = [
  {
    id: "service-support",
    icon: Headset,
    title: "Customer Support Agents",
    desc: "AI agents that resolve tickets, answer FAQs, and escalate edge cases to your team, trained on your docs, tone, and policies.",
    popular: true,
  },
  {
    id: "service-sales",
    icon: Target,
    title: "Sales & Lead Qualification",
    desc: "Qualify inbound leads, answer product questions, and book meetings automatically, day or night.",
  },
  {
    id: "service-workflow",
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Connect your existing tools and automate multi-step processes that currently eat up hours of manual work.",
  },
  {
    id: "service-data",
    icon: FileSearch,
    title: "Data Entry & Extraction",
    desc: "Pull structured data from documents, emails, and forms straight into your systems. No more copy-paste.",
  },
  {
    id: "service-knowledge",
    icon: BrainCircuit,
    title: "Internal Knowledge Agents",
    desc: "Agents trained on your internal docs and wikis so employees get instant, accurate answers.",
  },
  {
    id: "service-integrations",
    icon: Plug,
    title: "Custom AI Integrations",
    desc: "Bespoke agents built for your specific stack: CRM, helpdesk, Slack, internal tools, and more.",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Build"
        title="AI agents built around how your business actually runs"
        description="No off-the-shelf chatbots. Every agent we ship is scoped to a real workflow, connected to your tools, and measured against a real outcome."
      />
      <section id="services" className="relative overflow-hidden bg-ink pb-20 lg:pb-24">
      <GradientMesh />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal
                as="div"
                delay={(i % 3) * 90}
                id={service.id}
                key={service.title}
                className="glass group relative rounded-2xl p-6 transition-all hover-color-pop"
              >
                {service.popular && (
                  <span className="absolute right-5 top-5 rounded-full border border-cyan-dim/40 bg-cyan-dim/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-soft">
                    Popular
                  </span>
                )}
                <div className="glass inline-flex rounded-xl p-3 text-cyan">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-fog">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{service.desc}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-soft opacity-80 transition-opacity group-hover:opacity-100"
                >
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
      </section>
    </>
  );
}

export default Services;
