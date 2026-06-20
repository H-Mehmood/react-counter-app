# React Counter App

React Counter App is a small Vite + React project that demonstrates a simple counter UI built with Material UI components. The app lets you increase and decrease a number, prevents the count from going below zero, and includes a reset control to bring the value back to `0`.

## Features

- Increment and decrement counter actions
- Reset button to clear the value
- Guard against negative numbers
- Built with React, Vite, and Material UI
- Clean single-screen layout with custom styling

## Tech Stack

- React 19
- Vite
- Material UI
- Emotion
- ESLint

## Project Structure

```text
react-counter-app/
|-- public/
|-- src/
|   |-- App.jsx
|   |-- App.css
|   |-- main.jsx
|   `-- index.css
|-- index.html
|-- package.json
`-- vite.config.js
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Code

```bash
npm run lint
```

## How It Works

- The counter state lives in `src/App.jsx` with React's `useState` hook.
- The `+` button increases the counter by one.
- The `-` button decreases the counter only when the value is above zero.
- The refresh icon resets the count to zero.

## Notes

- The app uses a simple one-page layout.
- Styling is defined in `src/App.css`, with shared base styles in `src/index.css`.
- The page title is set in `index.html`.

## License

This project is licensed under the terms of the [MIT License](LICENSE).
