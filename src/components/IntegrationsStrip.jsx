import { useState } from "react";
import { Headset, MessageSquare, Megaphone, Users, MessageCircle, FileText, LayoutGrid, Zap } from "lucide-react";
import GradientMesh from "./GradientMesh.jsx";
import Reveal from "./Reveal.jsx";

// Drop the official brand SVG/PNG for each tool into public/logos/ using the
// filename below (e.g. public/logos/zendesk.svg). Until a file exists there,
// the generic fallback icon is shown instead.
const INTEGRATIONS = [
  { name: "Zendesk", file: "zendesk.svg", icon: Headset },
  { name: "Slack", file: "slack.svg", icon: MessageSquare },
  { name: "HubSpot", file: "hubspot.svg", icon: Megaphone },
  { name: "Salesforce", file: "salesforce.svg", icon: Users },
  { name: "Intercom", file: "intercom.svg", icon: MessageCircle },
  { name: "Notion", file: "notion.svg", icon: FileText },
  { name: "Google Workspace", file: "google-workspace.svg", icon: LayoutGrid },
  { name: "Zapier", file: "zapier.svg", icon: Zap },
];

function ToolLogo({ tool }) {
  const [errored, setErrored] = useState(false);
  const Icon = tool.icon;

  if (errored) {
    return (
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
        <Icon size={22} strokeWidth={1.75} />
      </span>
    );
  }

  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2.5">
      <img
        src={`/logos/${tool.file}`}
        alt={tool.name}
        className="h-full w-full object-contain"
        onError={() => setErrored(true)}
      />
    </span>
  );
}

function IntegrationsStrip() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-24">
      <GradientMesh />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-black tracking-tight text-fog sm:text-4xl">
            Works with the tools you already use
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {INTEGRATIONS.map((tool, i) => (
            <Reveal
              key={tool.name}
              delay={(i % 4) * 80}
              className="glass flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition-all hover-color-pop"
            >
              <ToolLogo tool={tool} />
              <span className="text-sm font-semibold text-fog">{tool.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntegrationsStrip;
