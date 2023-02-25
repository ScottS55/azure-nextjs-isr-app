<h3 align="center">
  <a href="src/ui">azure-nextjs-isr-app</a>
</h3>

<p align="center">
  A Static Web App based on <a href="https://nextjs.org/">NextJS</a>, <a href="https://www.typescriptlang.org/">TypeScript</a>, and hosted in <a href="https://azure.microsoft.com/en-us">Azure.<br />
</p>

## Overview

This web app is built to demonstrate the following:
- A Statically Generated Web App using NextJS and Typescript.
- <a href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration">Incremental Static Regeneration</a>, removing the need for scheduled static page rebuilds.
- Hosting the Static ISR app in an Azure App Service.

Static Azure Apps currently do not support ISR, so this project opts to use a standard app service built on nodejs instead.

## Requirements

- NPM >= 8.1.0
- Node >= 16.3.0
- Postman, or some other way to trigger the ISR endpoint for page regeneration.

## Installation

- Clone the github repository locally
- CD to src/ui and run npm install to download packages.

## Running

- CD to src/ui
- 'npm run dev' to run a SSR server for local testing
- 'npm run build' to generate the static site for production
- 'npm run start' after a build to serve for static serving in local.

## Tools for Development

- Postman. A collection for debugging localhost will be included at some point.
- VSCode. Settings for formatting are included in the top level .vscode folder.
- Prettier + Eslint. Settings for formatting are included in src/ui.