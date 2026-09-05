# Contributing to Fancy Text Generator

Thank you for your interest in contributing to **Fancy Text Generator**! We welcome contributions from everyone.

## Table of Contents
1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Adding New Typography Styles](#adding-new-typography-styles)
5. [Submitting Pull Requests](#submitting-pull-requests)
6. [Coding Guidelines](#coding-guidelines)

---

## Code of Conduct
This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/fancy-text-generator.git
   cd fancy-text-generator
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## Development Workflow

- Run TypeScript type checks:
  ```bash
  npx tsc --noEmit
  ```
- Run unit test suite:
  ```bash
  npm test
  ```
- Build production assets:
  ```bash
  npm run build
  ```

---

## Adding New Typography Styles

All font transformations are modularized in `src/core/unicode-maps.ts` and registered in `src/core/transforms.ts`:
1. Define the character mapping object in `unicode-maps.ts`.
2. Register the transform descriptor in `transforms.ts` with metadata (`id`, `name`, `category`, `description`, `preview`).
3. Add corresponding test cases in `tests/run-tests.js`.

---

## Submitting Pull Requests

1. Create a feature branch: `git checkout -b feature/my-new-style`
2. Commit your changes with clear messages following Conventional Commits (e.g. `feat: add gothic double-stroke font`).
3. Push to your branch: `git push origin feature/my-new-style`
4. Open a Pull Request on GitHub against the `main` branch.
