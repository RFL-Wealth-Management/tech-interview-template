import type { HomePage } from "@/sanity/queries";

const fields = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
];

// Visual reference only: this form is not wired up to submit anywhere.
export function ConsultationForm({ form }: { form: HomePage["form"] }) {
  return (
    <section id="consultation" className="scroll-mt-8 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28">
        <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {form.heading}
        </h2>

        <form className="rounded-2xl border border-line bg-cream p-6 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className="flex flex-col gap-2 text-sm font-medium">
                {field.label}
                <input
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  className="rounded-lg border border-line bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/20"
                />
              </label>
            ))}
          </div>
          <button
            type="button"
            className="mt-8 w-full rounded-lg bg-mint px-8 py-4 text-lg font-medium text-ink transition-colors hover:bg-mint-hover"
          >
            {form.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
