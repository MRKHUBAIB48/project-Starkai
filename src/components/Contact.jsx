import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import TiltCard from "./TiltCard.jsx";

const INTERESTS = [
  "Customer Support Agents",
  "Sales & Lead Qualification",
  "Workflow Automation",
  "Data Entry & Extraction",
  "Internal Knowledge Agents",
  "Custom Integration",
  "Not sure yet",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send contact request");
    }

    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Book your free automation audit"
        description="Tell us about your workflow. We'll reply within one business day with a scoped recommendation. No obligation, no generic sales pitch."
      />
      <section id="contact" className="relative overflow-hidden bg-surface pb-20 lg:pb-24">
      <div
        className="animate-float pointer-events-none absolute -top-10 right-[8%] h-64 w-64 rounded-full bg-gradient-brand opacity-10 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="animate-float-reverse pointer-events-none absolute bottom-0 left-[4%] h-72 w-72 rounded-full bg-gradient-brand opacity-10 blur-[100px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>

            <ul className="mt-8 space-y-4">
              <li className="group flex items-center gap-3 text-sm text-ash">
                <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-cyan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <Mail size={16} />
                </span>
                hello@starkai.dev
              </li>
              <li className="group flex items-center gap-3 text-sm text-ash">
                <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-cyan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <Phone size={16} />
                </span>
                +1 (555) 019-2044
              </li>
              <li className="group flex items-center gap-3 text-sm text-ash">
                <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-cyan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <MapPin size={16} />
                </span>
                Remote-first · Serving clients worldwide
              </li>
            </ul>

            <div className="glass mt-8 space-y-3 rounded-xl p-5">
              {["Free consultation", "Custom scoping", "No obligation"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-ash">
                  <CheckCircle2 size={16} className="text-cyan shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
          <TiltCard className="glass rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 size={40} className="text-cyan" />
                <h3 className="mt-4 text-lg font-semibold text-fog">Request received</h3>
                <p className="mt-2 max-w-sm text-sm text-ash">
                  Thanks for reaching out. Someone from Stark AI will follow up within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ash">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-fog placeholder:text-ash-dim focus:border-cyan-dim focus:outline-none focus:ring-1 focus:ring-cyan-dim"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ash">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-fog placeholder:text-ash-dim focus:border-cyan-dim focus:outline-none focus:ring-1 focus:ring-cyan-dim"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-ash">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-fog placeholder:text-ash-dim focus:border-cyan-dim focus:outline-none focus:ring-1 focus:ring-cyan-dim"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="mb-1.5 block text-xs font-medium text-ash">
                    What are you looking to automate?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-fog focus:border-cyan-dim focus:outline-none focus:ring-1 focus:ring-cyan-dim"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    {INTERESTS.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ash">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={5000}
                    className="w-full resize-none rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-fog placeholder:text-ash-dim focus:border-cyan-dim focus:outline-none focus:ring-1 focus:ring-cyan-dim"
                    placeholder="Tell us a bit about the workflow you want to automate..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-brand px-5 py-3.5 text-sm font-semibold text-ink transition-all hover:brightness-110"
                >
                  Request Consultation
                </button>

                <p className="text-center text-xs text-ash-dim">
                  By submitting, you agree to our{" "}
                  <a href="#" className="underline hover:text-ash">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </TiltCard>
          </Reveal>
        </div>
      </div>
      </section>
    </>
  );
}

export default Contact;
