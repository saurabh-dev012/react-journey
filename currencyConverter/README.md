# Currency Converter

A React currency converter that fetches current exchange rates and converts an amount between currencies.

## Features

- Convert between currencies supported by the exchange-rate API.
- Swap the source and target currencies.
- Fetch updated rates when the source currency changes.
- Responsive interface styled with Tailwind CSS.

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |

## Data Source

Exchange rates are loaded from the [Currency API](https://github.com/fawazahmed0/currency-api) through its public endpoint. An internet connection is required for updated rates.
