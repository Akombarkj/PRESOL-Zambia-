# PRESOL Zambia

Next.js App Router website for Prado Renewable Energy Solutions Limited, with Prisma and PostgreSQL-backed enquiries.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set the real database and SMTP values. Never commit `.env` or `.env.local`.

## Database

The project uses Prisma with PostgreSQL. The initial migration is committed in `prisma/migrations/`.

Check the migration state:

```bash
npx prisma migrate status
```

Apply committed migrations to a deployment database:

```bash
npm run db:migrate:deploy
```

Do not use `prisma migrate reset` against production.

## Vercel deployment

1. Push this project to a Git provider.
2. Import the repository into Vercel.
3. Add these environment variables in Vercel for Production, Preview, and Development as appropriate:

```env
DATABASE_URL=your-Neon-PostgreSQL-connection-string
SMTP_HOST=your-SMTP-host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-SMTP-user
SMTP_PASSWORD=your-SMTP-password
MAIL_FROM=website@presol.co.zm
NOTIFICATION_EMAIL=info@presol.co.zm
```

4. Run `npm run db:migrate:deploy` once against the production Neon database before the first live submission.
5. Deploy. Vercel uses the `vercel-build` script, which generates Prisma and builds Next.js.

The database connection is server-side only; credentials are not exposed to browser code.

## Verification

```bash
npx prisma validate
npx prisma generate
npm run lint
npm run build
```
