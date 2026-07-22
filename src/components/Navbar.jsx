import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo.jsx";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-white/10 bg-navy/95 px-2 py-2 shadow-xl shadow-black/20 backdrop-blur-md">
        <Link to="/" className="shrink-0 pl-3">
          <Logo />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white ${isActive ? "text-white" : "text-slate-300"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="glow-cyan hidden shrink-0 items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-cyan-soft md:inline-flex"
        >
          Book Audit
          <ArrowUpRight size={14} />
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-full mt-3 w-full max-w-3xl rounded-3xl border border-white/10 bg-navy px-6 py-6 shadow-xl shadow-black/20 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-navy"
            >
              Book Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
