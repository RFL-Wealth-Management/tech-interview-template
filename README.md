# Meridian Wealth Partners – Front-End Take-Home

A Next.js site for a fictional Canadian wealth management firm, with an embedded Sanity Studio.

**Time:** 60 minutes. Your Sanity project ID and webhook URL are in the email with your brief.

---

## The task

The homepage at `/` is your design reference. Build a new landing page for Meridian Wealth Partners. The topic is up to you.

The landing page must:

- Match the look of the homepage.
- Get all of its copy from Sanity. Create your own schema, then add and publish the content in the Studio.
- Connect the form in the home and reuse it in your landing page; it should send submissions to the webhook URL.
- Work well on mobile and desktop.

Work on a branch, not directly on `main`. Commit as you go, the way you would on a real team.

### What we'll look at

- Design and attention to detail
- Sanity schema design
- Git branching and commit history
- A working form connection using webhooks from Zoho

### AI Use

You can use AI tools for this task, the same way you would at work. We're assessing your judgement, not your typing speed, so we want to see the decisions you made along the way:

- **Own the result.** Be ready to explain any line of code, and why it's there, in a follow-up conversation.
- **Make the calls yourself.** The schema structure, component design, form behaviour and commit history should reflect your choices. Don't just accept the first suggestion.
- **Show your reasoning.** Write commit messages that explain *why*, not just *what*.

Code that is clearly generated in one go, with no visible decisions or iteration behind it, will score lower than a smaller piece of work that shows your own thinking.

---

## Setup

### Requirements

- Node.js 20.12 or later
- npm
- Access to your Sanity project. We'll send an invite to a Sanity project, please accept it before you start.

### 1. Create your copy

Click **Use this template** on the repository page to create your own copy under your GitHub account. Make it private, add the reviewer as a collaborator (@rfl-daniel), then clone it.

### 2. Install

```bash
npm install
```

### 3. Environment variables

Create a file ```.env.local``` and add these variables

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

Run the site on port 3000. **The Studio login only works from `http://localhost:3000`**.

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

Email us with the repository you've created. Make sure that the reviewer has access to the repo (@rfl-daniel). 