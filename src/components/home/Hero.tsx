import type { HomePage } from "@/sanity/queries";

// Sets the last two words of the headline in italic, e.g. "Wealth that works *across generations*".
function splitHeadline(headline: string) {
  const words = headline.trim().split(/\s+/);
  if (words.length < 4) return { lead: headline, accent: "" };
  return { lead: words.slice(0, -2).join(" "), accent: words.slice(-2).join(" ") };
}

export function Hero({ hero }: { hero: HomePage["hero"] }) {
  const { lead, accent } = splitHeadline(hero.headline);

  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,240,176,0.18),transparent_60%)]"
      />
      <svg
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[140%] -translate-x-1/2 -translate-y-1/2 text-white/[0.06]"
        viewBox="0 0 800 800"
        fill="none"
      >
        {[120, 200, 280, 360].map((r) => (
          <ellipse key={r} cx="400" cy="400" rx={r * 0.55} ry={r} stroke="currentColor" strokeWidth="1.5" />
        ))}
        <line x1="400" y1="0" x2="400" y2="800" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto flex min-h-[640px] max-w-4xl flex-col items-center justify-center px-6 pb-24 pt-36 text-center lg:min-h-[720px]">
        <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {lead}
          {accent && (
            <>
              <br />
              <em className="font-medium">{accent}</em>
            </>
          )}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">{hero.subheadline}</p>
        <a
          href="#consultation"
          className="mt-10 w-full max-w-sm rounded-lg bg-mint px-8 py-4 text-lg font-medium text-ink transition-colors hover:bg-mint-hover"
        >
          {hero.ctaLabel}
        </a>
      </div>
    </section>
  );
}
