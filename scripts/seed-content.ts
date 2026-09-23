// Single source of truth for the homepage content seeded into every candidate project.
// Array item `_type` / `_key` fields are added by seed.ts so this stays a plain copy of the brief.
export const homePageContent = {
  _id: 'homePage',
  _type: 'homePage',
  title: 'Homepage',
  hero: {
    headline: 'Wealth that works across generations',
    subheadline:
      'Independent, fee-only financial planning and portfolio management for Canadian families and business owners.',
    ctaLabel: 'Book a consultation',
  },
  benefits: [
    {
      title: 'Fiduciary advice, always',
      description:
        'We are legally bound to act in your interest. No commissions, no product quotas, no exceptions.',
    },
    {
      title: 'Transparent flat-fee pricing',
      description:
        'One annual fee agreed up front. It does not change because your portfolio grew.',
    },
    {
      title: 'Coordinated tax and estate planning',
      description:
        'Your advisor, accountant and estate lawyer working from the same plan instead of three different ones.',
    },
  ],
  form: {
    heading: 'Request a consultation',
    submitLabel: 'Book a consultation',
    successMessage: "Thank you. An advisor will contact you within one business day.",
    errorMessage: 'Something went wrong. Please try again or call us at (204) 555-0117.',
  },
  seo: {
    metaTitle: 'Meridian Wealth Partners | Fee-Only Wealth Management',
    metaDescription:
      'Independent, fee-only financial planning and portfolio management for Canadian families and business owners.',
  },
  footer: {
    companyName: 'Meridian Wealth Partners',
    disclaimer:
      'Meridian Wealth Partners is a fictional firm created for demonstration purposes. Nothing here constitutes financial advice.',
  },
} as const
