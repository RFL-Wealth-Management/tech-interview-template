import { cache } from "react";
import { client } from "@/lib/sanity";

export type HomePage = {
  hero: { headline: string; subheadline: string; ctaLabel: string };
  benefits: { _key: string; title: string; description: string }[];
  form: {
    heading: string;
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
  };
  seo: { metaTitle: string; metaDescription: string };
  footer: { companyName: string; disclaimer: string };
};

const homePageQuery = `*[_id == "homePage"][0]{ hero, benefits, form, seo, footer }`;

// cache() dedupes the request between generateMetadata and the page render.
export const getHomePage = cache(() =>
  client.fetch<HomePage | null>(homePageQuery),
);
