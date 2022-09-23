# Frumatic Case App
[![Development Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![Stars](https://img.shields.io/github/stars/janberkucar/Frumatic_Case_App?label=%E2%AD%90%20Stars)
![Contributors](https://img.shields.io/github/contributors/janberkucar/Frumatic_Case_App??color=red)

Film Database Web Applicaton for Frumatic Hiring Process
- Decoupled Architecture in Next.js
- Backend in tRPC and Prisma scaled with PlanetScale.

https://frumatic-case-ennit2ib3-janberkucar.vercel.app/

<br>

# Tech Stack
  - Next.js
  - Typescript
  - SuperJSON
  - PlanetScale
  - Prisma
  - Tailwind
  - Vercel
  - tRPC

<br>

# Why use Planetscale and Prisma
  - Competitors and their drawbacks.
  - Ease for use with TMBD but not dependent.
  - Customization Options.
  Basically, I have wanted to create a development enviroment that can scale with the api itself, as films and users added more and more.
  
  This way I could use the stack as tRPC and PlanetScale with the TMBc added later on as the hiring process going on.
<br>

# Development Proccess.

---

First Day :

Mostly spent with research about TMDB. I started with the development process with set-up a PlanetScale and Vercel to deployment ready development

- Checked about TMDB
- Trying best workflow for not this job alone but future possible wants.
- Configuring the Development Enviroment.
- Added tRPC and Cookie authentication to project.

---

Second Day :

I've decided to go safe, and use tRPC for my type safety back-end to come untill planetscale. This way I could in the future implement the TMDB as a microservice for the app

- I've decided the technologies that I want to use. The coding proccess has begun in this day.

Workflow and Technologies that I've decided.

    Nextjs: For the SSR qualification and being a React framework, this was my decision for the perfomance and the development.
    PlanetScale: MySQL database that can scale automatically with the functions like an AWS provider.
    tRPC: Backend to database typesafety interpeter.
    Vercel: For using to deployment process.
    Prisma: Model creation framework that widely used for this kind of purposes.
    Tailwind: Utility css framework for widely use.
    SuperJSON: Extends the json structure on Typescript. Mainly used it for datetime headache.

Version Control

    "@prisma/client": "^4.3.1",
    "@trpc/client": "^9.27.2",
    "@trpc/next": "^9.27.2",
    "@trpc/react": "^9.27.2",
    "@trpc/server": "^9.27.2",
    "@types/nanoid": "^3.0.0",
    "moment": "^2.29.4",
    "nanoid": "^4.0.0",
    "next": "^12.1.6-canary.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-query": "^3.39.2",
    "superjson": "^1.10.0",
    "zod": "^3.19.1"
---

Third Day :

Spent a time with the design and in this time I've decided to go on with Full page design unlike the design everybody chooses for Netflix or Disney Plus Clones.
Design-vise I've implemented all the parts on just one page.

Started with simple TypeScript application with Nextjs.

        [ ] Commit History will go here.



# Installation

## [Backend](https://github.com/CanberkUcar/Ustad_WEB/tree/master/backend)

```bash
pscale connect frumatic-case-app --port 3309
```


<br>

## [Frontend](https://github.com/CanberkUcar/Ustad_WEB/tree/master/frontend)

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Evironment vars. 
Create a `.env` file taking reference from `.env-example` inside frontend directory and add your WordPress Site URL ( for local development put `http://localhost:8020`)

<br>

# Docker Commands
```shell script
docker ps // See all the running containers
docker ps --all // List all containers #depricated
docker container ls -a // List down all containers 
docker rm your-container-id // Remove the container
docker container restart your-container-id

// Stoping containers
docker-compose down // Stops and removes all the docker containers

// Restart container
docker-compose up -d // Will check for any update in the docker.yml file and update only the container which are changed.

docker rm -f $your-container-id // Forcefully removes the running container with that container id.

// Get list of all images
docker ls
// Selected all images id
Ctr + Option and selected all image ids
// Delete docker images
docker rmi 8f1781b41c89
docker rmi 420b971d0f8b
```
<br>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
