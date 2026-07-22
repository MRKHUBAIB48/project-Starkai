import { useLocation } from "react-router-dom";

function PageHero({ eyebrow, title, description }) {
  const { pathname } = useLocation();
  const isStandalone = pathname !== "/";

  return (
    <section
      className={`relative overflow-hidden bg-ink ${
        isStandalone ? "pt-20 pb-14 lg:pt-24 lg:pb-16" : "pt-6 pb-10 lg:pt-8 lg:pb-12"
      }`}
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="bg-glow pointer-events-none absolute inset-0" style={{ "--y": "0%" }} />
      <div className="fade-up relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h1 className="text-balance text-4xl font-black tracking-tight text-fog sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ash">{description}</p>
        )}
      </div>
    </section>
  );
}

export default PageHero;
