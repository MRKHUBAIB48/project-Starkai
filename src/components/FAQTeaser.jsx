import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

const FAQS = [
  {
    q: "How long does it take to deploy an AI agent?",
    a: "Most first agents go live in 2 to 4 weeks: about a week for discovery and design, one to two weeks to build and integrate, and a short testing window before go-live.",
  },
  {
    q: "Will the AI agent replace my team?",
    a: "No. It removes the repetitive parts of their job so they can focus on judgment calls, relationships, and edge cases. Every agent we build includes clear escalation paths to a human.",
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

function FAQTeaserItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line py-5">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between gap-4 text-left">
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

function FAQTeaser() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-black tracking-tight text-fog sm:text-4xl">
            Common questions
          </h2>
        </div>

        <Reveal delay={120} className="mt-10">
          {FAQS.map((item, i) => (
            <FAQTeaserItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center rounded-full border border-cyan-dim/40 px-6 py-2.5 text-sm font-semibold text-cyan-dim transition-colors hover:border-cyan-dim hover:bg-cyan-dim hover:text-white"
          >
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FAQTeaser;
