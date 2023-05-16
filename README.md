# `@dynamicwebstudio/create-dws-app`

## Description

`@dynamicwebstudio/create-dws-app` is a powerful package that allows you to easily create a new Next.js 13.4 application, fully configured with TypeScript, Tailwind CSS, NextAuth, and Prisma. It comes with a predefined schema to facilitate rapid development and deployment.

## Features

- **Next.js 13.4**: A feature-rich framework for server-rendered React applications.
- **TypeScript**: A statically typed superset of JavaScript that adds optional types.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **NextAuth**: Complete open source authentication solution for Next.js applications.
- **Prisma**: Open-source database toolkit to facilitate accessing your database.

## Installation

Install the package globally using npm:

```bash
npm install -g @dynamicwebstudio/create-dws-app
```
## Usage
To create a new Next.js project:
```bash
npx @dynamicwebstudio/create-dws-app my-app
```
replace `my-app` with the name of your project.

## Before you start

Before running your project, make sure to:

1. Generate the Prisma client: After installation, run npx prisma generate to generate the Prisma client.
2. Set up your environment variables: Fill in the .env file with your environment variables. This is crucial for connecting to your database and configuring authentication providers.

## Customization

Once the installation is complete, you can customize your application by editing the configuration files:

- TypeScript: Add or modify types in your .ts files.
- Tailwind CSS: Customize your design in tailwind.config.js.
- NextAuth: Configure your authentication providers in [...nextauth].js.
- Prisma: Adjust your database schema in schema.prisma.

## Scripts

The package.json file includes several pre-defined scripts:

- dev: Runs the application in development mode.
- build: Builds the application for production.
- start: Starts the production application.
- lint: Runs the linter.
- test: Runs the tests.
- To run these scripts, use npm:

```bash
npm run dev
npm run build
npm run start
npm run lint
```
## Support

For any questions or issues, please open an issue in the GitHub repository or contact us directly.

## Contributing

Contributions are welcome! Please check the CONTRIBUTING.md file in the [GitHub repo](https://github.com/Dynamic-Web-Studio/create-dws-app/) for guidelines.

## License

`@dynamicwebstudio/create-dws-app` is released under the MIT License. Please see the LICENSE.md file in the [GitHub repo](https://github.com/Dynamic-Web-Studio/create-dws-app/) for details.

Thank you for using `@dynamicwebstudio/create-dws-app` to accelerate your Next.js application development!
