# Meridian Wealth Partners – Front-End Take-Home

A Next.js site for a fictional Canadian wealth management firm, with an embedded Sanity Studio.

**Time:** 60 minutes. Your Sanity project ID and webhook URL are in the email with your brief.

---

## The task

The homepage at `/` is your design reference. Build a new landing page for Meridian Wealth Partners. The topic is up to you.

The landing page must:

- Match the look of the homepage.
- Get all of its copy from Sanity. Create your own schema for it, then add and publish the content in the Studio.
- Include a form that sends its submissions to the webhook URL, with clear success and error states for the user.
- Work well on mobile and desktop.

Work on a branch, not directly on `main`. Commit as you go, the way you would on a real team.

### What we'll look at

- Design and attention to detail
- Sanity schema design
- Git branching and commit history
- A working form connection

---

## Setup

### Requirements

- Node.js 20.12 or later
- npm
- Access to your Sanity project. Accept the email invite before you start.

### 1. Create your copy

Click **Use this template** on the repository page to create your own copy under your GitHub account. Make it private, add the reviewer as a collaborator, then clone it.

### 2. Install

```bash
npm install
```

### 3. Environment variables

```bash
cp .env.example .env.local
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `WEBHOOK_URL` | Endpoint that form submissions are sent to |

### 4. Run

```bash
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio). Log in with the account your invite was sent to.

Run the site on port 3000. The Studio login only works from `http://localhost:3000`.

---

## Where things live

| Path | Contents |
| --- | --- |
| `src/app` | Routes. `/` is the homepage; `/studio` is the Sanity Studio |
| `src/components/home` | Homepage sections |
| `src/lib/sanity.ts` | Configured Sanity client |
| `src/sanity/schemaTypes` | Sanity schema types |
| `src/sanity/queries.ts` | Homepage query |
| `sanity.config.ts` | Studio configuration |

---

## When you're done

Fill in the sections below, push your branch, and reply to the email with the link to your repository.

## How to run

_Anything we need to know beyond the setup above._

## Decisions

_The key choices you made and why._

## What I'd do next

_What you'd improve with more time._
