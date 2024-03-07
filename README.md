## Examples IA Plataform Next.js

![Conversation](https://cdn.discordapp.com/attachments/1083115321935798314/1189222082744156210/image.png?ex=65f9a95f&is=65e7345f&hm=e12bbf961dd8de187fa48d6dac04043674644f77dee4c10f64de474346e6e302&)

![Image](https://cdn.discordapp.com/attachments/1083115321935798314/1189227180878729226/image.png?ex=65f9ae1e&is=65e7391e&hm=0ea00cb18d09ba52f2adbaf6a43b888c60a3ab5fe7bc867ed6a4d2e7a75bf474&)

![Code](https://cdn.discordapp.com/attachments/1083115321935798314/1189259890485645452/image.png?ex=65f9cc95&is=65e75795&hm=abad129dbb121ba48af3d5d7a503866605c4d7532e2bf5d5c1bf91e2e72f828f&)

![Music](https://cdn.discordapp.com/attachments/1083115321935798314/1189260073978044476/image.png?ex=65f9ccc1&is=65e757c1&hm=8efb8a90bb89838077d87b6f16185c43ac2296a95551e63f55b3a515e2562410&)

![Video](https://cdn.discordapp.com/attachments/1083115321935798314/1189260280224567387/image.png?ex=65f9ccf2&is=65e757f2&hm=be1e9709049fb09faee7b3ec3403350fa4fa3702ad89c23dbd253438ce2adc06&)

# Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe | 2023

This is a repository for Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe | Full Tutorial 2023.

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

### Prerequisites

**Node version 18.x.x**

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## AI

![AI](https://cdn.discordapp.com/attachments/1083115321935798314/1189614238562529491/image.png?ex=65fb1698&is=65e8a198&hm=8ab0994611539263a4b2f5288d29fae456ba4dc12799a983d6070c2f7f980415&)
