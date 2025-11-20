<img src="https://raw.githubusercontent.com/ricardogouveia3/barro-ui/refs/heads/main/.storybook/assets/logo_mark.svg" alt="Barro UI Logo" width="100">

<h1 style="margin: 15px 0; padding: 0">Barro UI</h1>

[![npm version](https://badge.fury.io/js/barro-ui.svg)](https://www.npmjs.com/package/barro-ui)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A minimalist component library inspired by the raw beauty of Pernambuco's clay art and culture — focused on **dark mode**, organic textures, and elegant typography.

> _“A raw shape molded in darkness.”_

## ✨ Features

- 🌑 **Dark mode** by default with organic textures
- 🎨 Component-first system built with **Tailwind CSS v4**
- ⚙️ Written in **TypeScript** and **React 19**
- 🌫️ Visual language inspired by texture and materiality
- ✨ **Framer Motion** animations and micro-interactions
- 📚 **Storybook** integration for component development and documentation
- 🧪 **Vitest** for comprehensive testing
- 🚀 **Vite** for lightning-fast development and building
- 🔧 **ESLint** and **Prettier** for code quality
- 🪝 **Husky** pre-commit hooks
- 🤖 **GitHub Actions** for automated Storybook deployment
- 🧩 Designed to evolve into a complete, reusable design system

## 🚀 Installation

```bash
# npm
npm install barro-ui

# yarn
yarn add barro-ui

# pnpm
pnpm add barro-ui
```

### Peer Dependencies

Make sure you have React 19+ installed:

```bash
npm install react@^19.0.0 react-dom@^19.0.0
```

## 📦 Usage

### 1. Import styles globally

Add the CSS import to your global styles file:

```css
/* styles/globals.css */
@import 'barro-ui/css';
```

Or import in your main app file:

```tsx
// main.tsx or layout.tsx
import 'barro-ui/css';
```

### 2. Use components

```tsx
import { Card, PostItem, Spinner, TextUnderline } from 'barro-ui';

export function App() {
  return (
    <Card>
      <h1>Welcome to Barro UI</h1>
      <TextUnderline href="#">Learn more</TextUnderline>
    </Card>
  );
}
```

## 🎨 Styling

### Tailwind CSS Integration

Barro UI is built with Tailwind CSS v4 and includes its own design tokens. The components use CSS custom properties that can be customized:

```css
:root {
  /* Override Barro UI design tokens */
  --background-color: #your-color;
  --text-color: #your-color;
  /* ... other custom properties */
}
```

### Custom Classes

Most components accept `className` or similar props for custom styling:

```tsx
<Card className="shadow-lg border-2">
  <TextUnderline className="text-blue-500 hover:text-blue-700">Custom styled link</TextUnderline>
</Card>
```

## 🛠️ Development

### Get Started

1. Clone this repository
2. Install dependencies using `pnpm install`
3. Start development with `pnpm dev`

### Scripts

- `dev`: Starts the local Storybook server — use this to develop and preview your components
- `test`: Runs all tests with Vitest
- `test:watch`: Runs tests in watch mode
- `build`: Builds Storybook as a static web application
- `build:lib`: Builds the component library with Vite
- `lint`: Runs ESLint to find and fix code problems
- `format`: Formats code with Prettier

## 🧱 Development Progress

### Core Infrastructure ✅

- [x] Vite + React 19 + TypeScript setup
- [x] Tailwind CSS v4 integration
- [x] Storybook configuration
- [x] Testing setup with Vitest
- [x] Code quality tools (ESLint, Prettier, Husky)
- [x] GitHub Actions for deployment
- [x] NPM package configuration with dual exports (ESM/CJS)
- [x] TypeScript declaration files generation

### Design System ✅

- [x] Dark mode support with organic textures
- [x] Custom color palette (inspired by clay, bronze and soil)
- [x] Design tokens (colors, typography, spacing)
- [x] Subtle noise background textures
- [x] Framer Motion animations

### Components ✅

- [x] Card component with loading states
- [x] PostItem component for content display
- [x] Spinner component
- [x] TextUnderline component with animations
- [x] Button component variants
- [x] Accessibility audit and improvements
- [x] Complete design documentation

### Future Roadmap 🚧

- [ ] Form components (Input, Textarea, Select)
- [ ] Navigation components
- [ ] Modal/Dialog components
- [ ] Layout components (Container, Grid)
- [ ] Data display components (Table, List)
- [ ] Feedback components (Toast, Alert)

## 🎨 Visual Identity

**Inspired by clay, terracotta and natural textures**

- Aesthetics rooted in Pernambuco's crafts and visual heritage
- Typography focused on readability and organic form
- Dark-first approach with earthy, warm accents
- Emphasis on materiality and tactile feeling

## 🤎 About the Name

**Barro** means clay in Portuguese — the primal material of design: shaped by hand, rooted in culture, and built with intention.

## 📚 License

MIT — by [@ricardogouveia3](https://github.com/ricardogouveia3)

---

_Built with ❤️ using Vite, React, TypeScript and Tailwind CSS. Created with [Vite React Component
Library Starter](https://github.com/rayyamhk/vite-react-component-library-starter)_
