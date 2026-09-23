import Link from "next/link";

type Props = { companyName: string; ctaLabel: string };

export function SiteHeader({ companyName, ctaLabel }: Props) {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
          {companyName}
        </Link>
        <a
          href="#consultation"
          className="hidden rounded-lg bg-mint px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-mint-hover sm:inline-block"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
