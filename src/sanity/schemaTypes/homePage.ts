import {defineArrayMember, defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      description: 'Used inside the Studio only. Not rendered on the site.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'ctaLabel',
          title: 'CTA label',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [defineArrayMember({type: 'benefit'})],
      validation: (rule) => rule.required().min(3).max(3),
    }),
    defineField({
      name: 'form',
      title: 'Form',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'submitLabel',
          title: 'Submit label',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'successMessage',
          title: 'Success message',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'errorMessage',
          title: 'Error message',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta title',
          type: 'string',
          validation: (rule) => rule.required().max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta description',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required().max(160),
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'companyName',
          title: 'Company name',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'disclaimer',
          title: 'Disclaimer',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Homepage', subtitle: 'Singleton'}),
  },
})
