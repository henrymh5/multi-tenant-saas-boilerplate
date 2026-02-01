# Goals

This boilerplate is built to be practical, opinionated, and production-ready - without over-engineering.
You can use it as a foundation for client work, internal products, or your next startup idea.

## What’s included

### Authentication

- Sign in / Sign up (powered by Clerk)
- Protected routes + session handling
- User profile basics (name, avatar, email)

### Multi-Tenancy (B2B)

- Workspaces (a.k.a. organizations/tenants)
- Workspace switcher
- Team invites
- Roles & permissions (Owner / Admin / Member)

### Billing

- Subscription-ready billing layer
- Plan-based feature gating
- Webhook handling (idempotent, logged)
- “Billing portal” entry in settings

### Security basics

- Server-side authorization (not only UI checks)
- Database Row Level Security (RLS) where applicable
- Input validation (Zod)
- Safe environment variable validation

### Tech Stack

- Next.js + TypeScript
- Supabase (Postgres, RLS, Storage)
- Clerk (Auth, Organizations)
- TailwindCSS + UI components
- Playwright (E2E) + Vitest (Unit)