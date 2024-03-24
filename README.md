# Development

Steps to lunch the application in development mode.

1. Build the database

```
docker compose up -d
```

2. Rename .env.template to .env
3. Set environment variables
4. Run SEED to purge local database

```
localhost:3000/api/seed
```

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
