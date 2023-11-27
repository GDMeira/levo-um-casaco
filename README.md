# Weather SPA

A web application to view the weather in cities across the globe.

## About

The Weather SPA is an application where users can search for any city in the world to check the current weather or view a graphical representation of the weather in that city for the next 5 days. This helps users determine if they need to bring a jacket when visiting the city.
[Weather SPA App Link](https://levo-um-casaco.vercel.app/)

## Technologies

Built with React, Vite, Rechart, and Chakra UI.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Populate `.env` file based on `.env.example`. `VITE_API_URL` should point to your API server (driven.t-back)

4. Run the back-end in a development environment:

```bash
npm run start
```

## Building and starting for production

```bash
npm run build
npm start
```

## What to do when add new ENV VARIABLES

- Add them to `.env.example` file
- Add them to your local `.env` file
