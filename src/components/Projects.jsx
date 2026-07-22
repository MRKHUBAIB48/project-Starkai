import { Workflow, Headset, Target, FileSearch } from "lucide-react";
import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import GradientMesh from "./GradientMesh.jsx";

const PROJECTS = [
  {
    icon: Headset,
    title: "24/7 Support Agent for a D2C Brand",
    tag: "Customer Support",
    desc: "Deployed an agent trained on 1,200+ support docs that resolves the majority of tickets without human intervention, escalating only edge cases.",
  },
  {
    icon: Target,
    title: "Inbound Lead Qualification for a B2B SaaS",
    tag: "Sales & Lead Qualification",
    desc: "Built a qualification agent that answers product questions and books qualified meetings directly on reps' calendars, day or night.",
  },
  {
    icon: Workflow,
    title: "Multi-Step Order Ops Automation",
    tag: "Workflow Automation",
    desc: "Connected CRM, inventory, and shipping tools into a single automated pipeline that used to take a team hours of manual handoffs.",
  },
  {
    icon: FileSearch,
    title: "Document Extraction for a Professional Services Firm",
    tag: "Data Entry & Extraction",
    desc: "Replaced manual copy-paste with an agent that pulls structured data from incoming forms and emails straight into internal systems.",
  },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Recent automation projects"
        description="A look at the kinds of agents we build and the workflows they take off teams' plates."
      />
      <section id="projects" className="relative overflow-hidden bg-ink pb-28 lg:pb-36">
        <GradientMesh />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((project, i) => {
              const Icon = project.icon;
              return (
                <Reveal
                  key={project.title}
                  delay={(i % 2) * 90}
                  className="glass rounded-2xl p-6 transition-all hover-color-pop"
                >
                  <div className="glass inline-flex rounded-xl p-3 text-cyan">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-cyan-soft">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-fog">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{project.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
