# Frumatic Case App
[![Development Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![Stars](https://img.shields.io/github/stars/janberkucar/Frumatic_Case_App?label=%E2%AD%90%20Stars)
![Contributors](https://img.shields.io/github/contributors/janberkucar/Frumatic_Case_App??color=red)

Film Database Web Applicaton for Frumatic Hiring Process
- Decoupled Architecture in Next.js
- Backend in tRPC and Prisma scaled with PlanetScale.

<br>

# Tech Stack
  - Next.js
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
<br>

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
