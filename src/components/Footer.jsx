import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import GradientMesh from "./GradientMesh.jsx";

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.6 10.6 20.9 3h-1.7l-6.3 6.6L7.9 3H3l7.6 10.4L3 21h1.7l6.7-7 5.3 7H21l-7.4-10.4Zm-2.4 2.5-.8-1.1L5.2 4.1h2.6l5 6.6.8 1.1 6.4 8.4h-2.6l-5.2-6.9Z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Customer Support Agents", to: "/services#service-support" },
      { label: "Sales & Lead Qualification", to: "/services#service-sales" },
      { label: "Workflow Automation", to: "/services#service-workflow" },
      { label: "Data Entry & Extraction", to: "/services#service-data" },
      { label: "Internal Knowledge Agents", to: "/services#service-knowledge" },
      { label: "Custom Integrations", to: "/services#service-integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About" },
      { label: "Why Us", to: "/why-us" },
      { label: "Careers" },
      { label: "Portfolio", to: "/projects" },
      { label: "Blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Pricing", to: "/pricing" },
      { label: "Automation Guide" },
      { label: "Sample Report" },
    ],
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy py-16 lg:py-20">
      <GradientMesh />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">
              We design and deploy custom AI agents that take repetitive work off your
              team's plate. Built around your workflow, not a generic bot.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="glass-dark flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:text-cyan-soft"
              >
                <LinkedinIcon width={16} height={16} />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="glass-dark flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:text-cyan-soft"
              >
                <XIcon width={16} height={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) =>
                    link.to ? (
                      <li key={link.label}>
                        <Link to={link.to} className="text-sm text-slate-300 hover:text-cyan-soft">
                          {link.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <a href="#" className="text-sm text-slate-300 hover:text-cyan-soft">
                          {link.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-dark rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white">Stay in the loop</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Automation ideas and product updates, about once a month.
            </p>
            <form className="mt-4 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg border border-white/10 bg-navy-2 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-soft focus:outline-none focus:ring-1 focus:ring-cyan-soft"
              />
              <button
                type="submit"
                className="rounded-lg bg-cyan-soft px-3.5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Stark AI. All rights reserved.</p>
          <p className="text-xs text-slate-400">Built with intent. Automated with care.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
