# api.iiinu.io


```Development
docker-compose up -d
npx prisma migrate dev --name init
yarn prisma:seed
```

```Production
docker-compose -f docker-compose.prod.yml up -d
```

