import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Benefits } from "@/components/home/Benefits";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { Hero } from "@/components/home/Hero";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { getHomePage } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomePage();
  return page
    ? { title: page.seo.metaTitle, description: page.seo.metaDescription }
    : {};
}

export default async function Home() {
  const page = await getHomePage();
  if (!page) notFound();

  return (
    <>
      <SiteHeader companyName={page.footer.companyName} ctaLabel={page.hero.ctaLabel} />
      <main>
        <Hero hero={page.hero} />
        <Benefits benefits={page.benefits} />
        <ConsultationForm form={page.form} />
      </main>
      <SiteFooter footer={page.footer} />
    </>
  );
}
