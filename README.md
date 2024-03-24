# Development

Steps to lunch the application in development mode.

1. Build the database

```
docker compose up -d
```

2. Copy .env.template and rename to .env
3. Replace environment variables
4. Run command `npm install`
5. Run command `npm run dev`
6. Run prisma commands

```
   npx prisma migrate dev
   npx prisma generate

```

7. Run SEED to purge local database

```

localhost:3000/api/seed

```

# Prisma commands

```

npx prisma init
npx prisma migrate dev
npx prisma generate

```
