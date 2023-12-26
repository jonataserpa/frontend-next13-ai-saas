## Examples IA Plataform Next.js

![Conversation](https://cdn.discordapp.com/attachments/1083115321935798314/1189222082744156210/image.png?ex=659d605f&is=658aeb5f&hm=fb239cdefe9cbc7c50332b7a93c051fc8c4285c53713fae83441a57da4a5acff&)

![Image](https://cdn.discordapp.com/attachments/1083115321935798314/1189227180878729226/image.png?ex=659d651e&is=658af01e&hm=052b43c358a750e89d7342d52de21f5b882f34990ca9321cff1e78a75e7e4a40&)

![Code](https://cdn.discordapp.com/attachments/1083115321935798314/1189259890485645452/image.png?ex=659d8395&is=658b0e95&hm=c8f8389ff3a5a20ab2363c0360d509a65e248071f6bbda36319adde5f8f24bcb&)

![Music](https://cdn.discordapp.com/attachments/1083115321935798314/1189260073978044476/image.png?ex=659d83c1&is=658b0ec1&hm=c7d44b1361f8b877e33e87c0c9fa8d20fff107f5a9d32afe9a79d88d9e9f78e0&)

![Video](https://cdn.discordapp.com/attachments/1083115321935798314/1189260280224567387/image.png?ex=659d83f2&is=658b0ef2&hm=2cd22a4a3a3f0d94d7d93710bdcd3ac6836a3797260df7a937afb9639f2df66f&)

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

![AI](https://cdn.discordapp.com/attachments/1083115321935798314/1181284455458013254/Capturar_select-area_20231204141944.png?ex=65807fe1&is=656e0ae1&hm=2b0ca19baf2177db4dacb4356426cab165a9575fe4d7d70b9426e7089c73c9f4&)
