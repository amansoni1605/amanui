# AmanUI

> Open-source React component library — 40+ typed, accessible components built with TypeScript and Tailwind CSS v4.

Built by [Aman Soni](https://github.com/amansoni1605) · [Portfolio](https://github.com/amansoni1605/portfolio)

[![npm version](https://img.shields.io/npm/v/amanui)](https://www.npmjs.com/package/amanui)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## Design Principles

- **3-Layer Architecture** — Headless logic layer → Styled presentation layer → Integration layer
- **Zero runtime dependencies** beyond React and Tailwind
- **WCAG 2.1 AA** — Every component is accessible by default
- **TypeScript generics** — Full type inference on all props
- **Tree-shakeable** — Import only what you use

## Installation

```bash
npm install amanui
# or
pnpm add amanui
```

Add to your `tailwind.config.ts`:
```ts
content: ["./node_modules/amanui/dist/**/*.js"]
```

## Usage

```tsx
import { Button, Card, Badge, Input } from 'amanui'

export default function Page() {
  return (
    <Card>
      <Badge variant="success">Active</Badge>
      <Input label="Email" type="email" />
      <Button variant="primary" size="md">
        Submit
      </Button>
    </Card>
  )
}
```

## Component Status

| Component | Status | Accessible | Storybook |
|---|---|---|---|
| Button | ✅ Stable | ✅ | ✅ |
| Input | ✅ Stable | ✅ | ✅ |
| Badge | ✅ Stable | ✅ | ✅ |
| Card | ✅ Stable | ✅ | ✅ |
| Modal | ✅ Stable | ✅ | ✅ |
| Select | ✅ Stable | ✅ | ✅ |
| Tooltip | ✅ Stable | ✅ | ✅ |
| Table | ✅ Stable | ✅ | ✅ |
| Tabs | ✅ Stable | ✅ | ✅ |
| Skeleton | ✅ Stable | ✅ | ✅ |
| Toast | 🚧 Beta | ✅ | ✅ |
| DatePicker | 🚧 Beta | ✅ | 🔄 |
| Combobox | 📅 Planned | - | - |

## Architecture: 3-Layer Pattern

Every component follows the same layered structure:

```
src/components/Button/
├── Button.logic.ts        # Layer 1: Headless logic (state, a11y, keyboard)
├── Button.tsx             # Layer 2: Styled component (Tailwind classes, variants)
├── Button.stories.tsx     # Storybook stories
├── Button.test.tsx        # Vitest unit tests
└── index.ts               # Public export
```

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Run tests
pnpm test

# Build library
pnpm build

# Visual regression (Chromatic)
pnpm chromatic
```

## License

MIT
