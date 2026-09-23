import type { HomePage } from "@/sanity/queries";

export function Benefits({ benefits }: { benefits: HomePage["benefits"] }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 md:gap-10 lg:px-10 lg:py-28">
        {benefits.map((benefit, i) => (
          <article key={benefit._key} className="border-t border-line pt-8">
            <p className="font-serif text-lg italic text-pine">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight">
              {benefit.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
