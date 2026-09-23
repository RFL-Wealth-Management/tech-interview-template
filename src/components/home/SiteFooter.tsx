import type { HomePage } from "@/sanity/queries";

export function SiteFooter({ footer }: { footer: HomePage["footer"] }) {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em]">{footer.companyName}</p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70">{footer.disclaimer}</p>
        <p className="mt-10 border-t border-white/15 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {footer.companyName}
        </p>
      </div>
    </footer>
  );
}
