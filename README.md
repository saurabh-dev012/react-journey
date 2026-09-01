# React Journey

A collection of small React projects built while learning different React development setups.

## Projects

| Folder | Stack | Development command |
| --- | --- | --- |
| `01basicreact` | Create React App | `npm start` |
| `01vitereact` | React + Vite | `npm run dev` |
| `02counter` | React + Vite | `npm run dev` |
| `03tailwindprops` | React + Vite + Tailwind | `npm run dev` |
| `04bgchanger` | React + Vite | `npm run dev` |
| `customreact` | Custom React implementation | Open `index.html` in a browser |

## Prerequisites

- Node.js and npm

## Getting Started

Clone the repository and install dependencies for the project you want to run:

```bash
git clone https://github.com/saurabh-dev012/react-journey.git
cd react-journey
```

### Create React App

```bash
cd 01basicreact
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Vite-based projects

```bash
cd 01vitereact
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Additional projects

```bash
cd 02counter
npm install
npm run dev

cd ../03tailwindprops
npm install
npm run dev

cd ../04bgchanger
npm install
npm run dev
```

## Project Structure

```text
react-journey/
├── 01basicreact/      # Create React App project
├── 01vitereact/       # Vite React project
├── 02counter/         # Counter app
├── 03tailwindprops/   # Tailwind + props demo
├── 04bgchanger/       # Background color changer
├── customreact/       # Custom React implementation
├── README.md          # Repository overview
└── .gitignore         # Generated files ignored
```

Each project contains its own `package.json`, lockfile, source code, and README.
