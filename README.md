<img src="https://barro.rcrd.dev/logo-mark.svg" alt="Barro UI Logo" width="100">

<h1 style="margin: 15px 0; padding: 0">Barro UI</h1>

A minimalist component library inspired by the raw beauty of Pernambuco’s clay art and culture — focused on **dark mode**, organic textures, and elegant typography.

> _“A raw shape molded in darkness.”_ 

## ✨ Features

- 🌑 **Dark mode** by default
- 🎨 Component-first system built with **Tailwind CSS**
- ⚙️ Written in **TypeScript** and **React**
- 🌫️ Visual language inspired by texture and materiality
- 📚 **Storybook** integration for component development and documentation
- 🧪 **Vitest** for comprehensive testing
- 🚀 **Vite** for lightning-fast development and building
- 🔧 **ESLint** and **Prettier** for code quality
- 🪝 **Husky** pre-commit hooks
- 🤖 **GitHub Actions** for automated Storybook deployment
- 🧩 Designed to evolve into a complete, reusable design system

## 🚀 Installation

```bash
pnpm add barro-ui
```

_Note: Package will be available on npm once initial development is complete._

## 📦 Usage

```tsx
import { Button } from 'barro-ui';

export function App() {
  return <Button variant="primary">Click me</Button>;
}
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

- [x] Vite + React + TypeScript setup
- [x] Tailwind CSS integration
- [x] Storybook configuration
- [x] Testing setup with Vitest
- [x] Code quality tools (ESLint, Prettier, Husky)
- [x] GitHub Actions for deployment
- [ ] Dark mode support (`darkMode: 'class'`)
- [ ] Custom color palette (inspired by clay, bronze and soil)
- [ ] Design tokens (colors, typography, spacing)
- [ ] Button component
- [ ] Card component
- [ ] Subtle noise background (organic textures)
- [ ] Complete design documentation

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
