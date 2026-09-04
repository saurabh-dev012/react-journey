# React Journey

<p align="center">
  <img src="https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwindcss" alt="Tailwind" />
</p>

A practical learning repository for building small React projects while exploring core concepts such as JSX, state, props, styling, component structure, and Vite-based workflows.

## Overview

This project collection is designed for hands-on React practice. Each folder is a small app focusing on a specific concept or setup, helping build confidence from beginner-level fundamentals to more interactive UI patterns.

## Project list

| Folder | Stack | Description |
| --- | --- | --- |
| `01basicreact` | Create React App | Basic React project setup and JSX fundamentals |
| `01vitereact` | React + Vite | Modern Vite-based React setup |
| `02counter` | React + Vite | State-driven counter app |
| `03tailwindprops` | React + Vite + Tailwind | Styling with Tailwind and reusable props |
| `04bgchanger` | React + Vite | Dynamic background color switching |
| `05passwordGenerator` | React + Vite | Password generator with customization controls |
| `07reactrouter` | React + Vite | Client-side routing and multi-page navigation |
| `currencyConverter` | React + Vite + Tailwind | Currency conversion using live exchange rates |
| `customreact` | Vanilla JS + custom React concepts | Understanding how React works under the hood |

## Prerequisites

- Node.js installed
- npm installed

## Getting started

Clone the repository:

```bash
git clone https://github.com/saurabh-dev012/react-journey.git
cd react-journey
```

Run any project individually:

```bash
cd 01vitereact
npm install
npm run dev
```

For CRA-based app:

```bash
cd 01basicreact
npm install
npm start
```

For most Vite apps, the same pattern applies:

```bash
cd <project-folder>
npm install
npm run dev
```

## Learning progression

The projects move from simple setup to more interactive frontend logic:

1. Basic React rendering
2. Component structure and JSX
3. State and event handling
4. Props and reusable UI components
5. Styling with Tailwind
6. Small utility app creation
7. Client-side routing
8. API-backed utility app creation
9. React internals and custom implementation

## Repository structure

```text
react-journey/
├── 01basicreact/
├── 01vitereact/
├── 02counter/
├── 03tailwindprops/
├── 04bgchanger/
├── 05passwordGenerator/
├── 07reactrouter/
├── currencyConverter/
├── customreact/
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
└── .vscode/
```

## Notes

- Each project has its own dependencies and package setup.
- Vite apps usually expose a local development URL in the terminal.
- This repository is intended for learning, experimentation, and gradual React improvement.

## License

This repository is for educational purposes and is not intended for production deployment as-is.
