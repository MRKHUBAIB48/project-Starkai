import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";

const FAQS = [
  {
    q: "What kind of businesses do you work with?",
    a: "Mostly small-to-mid-sized companies with repetitive, high-volume workflows: support, sales ops, back-office data work. If a task is rule-based or pattern-based and eats up team hours, it's usually a good fit.",
  },
  {
    q: "How long does it take to deploy an AI agent?",
    a: "Most first agents go live in 2 to 4 weeks: about a week for discovery and design, one to two weeks to build and integrate, and a short testing window before go-live.",
  },
  {
    q: "Will the AI agent replace my team?",
    a: "No. It removes the repetitive parts of their job so they can focus on judgment calls, relationships, and edge cases. Every agent we build includes clear escalation paths to a human.",
  },
  {
    q: "What tools and platforms do you integrate with?",
    a: "Common helpdesks (Zendesk, Intercom, Freshdesk), CRMs (HubSpot, Salesforce, Pipedrive), Slack, email, and most tools with an API or Zapier/Make connection. If you use something niche, we'll scope it during discovery.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Agents run with scoped access controls, full audit logs, and encryption in transit and at rest. We never use your data to train models for other clients.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on the number and complexity of agents you need. We start every engagement with a free automation audit so you know the scope and expected ROI before committing to anything.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-base font-medium text-fog">{item.q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ash-dim transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-ash">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero eyebrow="FAQ" title="Common questions" />
      <section id="faq" className="relative bg-ink pb-20 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal delay={120} className="mt-4">
            {FAQS.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default FAQ;
