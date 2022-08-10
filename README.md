# C2 React base 👋👋👋

## Requires

- node: ^12.22.0 || ^14.17.0 || >=16.0.0"
- yarn: v1 or v2 (_**prefer using it over npm**_)

## 📂 Structure

```
src
├── api
│   ├── <post>
│   │   ├── <post>.api.ts
│   │   └── <post>.interface.ts
│   │
│   ├── ...
│   ├── interfaces.ts
│   ├── request.ts
│   └── README.md
│
├── assets
│   ├── images
│   │   ├── <first>.png
│   │   ├── ...
│   │   └── <second>.svg
│   │
│   ├── fonts
│   │   ├── ...
│   │   └── <first>.ttf
│   │
│   ├── styles
│   │   ├── global.css
│   │   └── reset.css
│   │
│   └── README.md
│
├── components
│   ├── <select>
│   │   ├── <select>.story.tsx
│   │   ├── <select>.style.tsx
│   │   ├── <select>.test.tsx
│   │   ├── <select>.tsx
│   │   └── <select>.utils.tsx
│   │
│   ├── ...
│   └── README.md
│
├── containers
│   ├── auth
│   │   └── AuthRoute.tsx
│   │
│   ├── error-boundary
│   │   ├── error-boundary.style.ts
│   │   └── error-boundary.tsx
│   │
│   ├── layouts
│   │   ├── footer
│   │   │   ├── footer.story.tsx
│   │   │   ├── footer.style.ts
│   │   │   ├── footer.test.tsx
│   │   │   └── footer.tsx
│   │   ├── navbar
│   │   │   ├── navbar.story.tsx
│   │   │   ├── navbar.style.ts
│   │   │   ├── navbar.test.tsx
│   │   │   └── navbar.tsx
│   │   │
│   │   ├── ...
│   │   ├── default.style.ts
│   │   └── default.tsx
│   │
│   ├── loadable-fallback
│   │   ├── ...
│   │   └── loading.tsx
│   │
│   ├── ...
│   └── README.md
│
├── hooks
│   ├── useEventListener.ts
│   ├── useHover.ts
│   ├── useSessionStorage.ts
│   ├── ...
│   └── README.md
│
├── pages
│   ├── home
│   │   ├── index.style.ts
│   │   └── index.tsx
│   │
│   ├── ...
│   └── README.md
│
├── routes
│   ├── constants.ts
│   ├── index.tsx
│   └── README.md
│
├── services
│   ├── i18n
│   │   ├── locales
│   │   │   ├── <en>.json
│   │   │   ├── ...
│   │   │   └── <vi>.json
│   │   └── index.ts
│   │
│   ├── styled-themes
│   │   ├── index.tsx
│   │   └── schema.json
│   │
│   ├── ...
│   └── README.md
│
├── store
│   ├── index.ts
│   ├── <post-detail>.slice.ts
│   ├── <post-list>.slice.ts
│   ├── ...
│   └── README.md
│
├── stories
│
├── types
│   ├── <styled-components>.d.ts
│   ├── ...
│   └── README.md
│
├── utils
│   ├── constants.ts
│   ├── functions.ts
│   ├── interfaces.ts
│   ├── ...
│   └── README.md
│
├── stories
│
├── types
│   ├── <styled-components>.d.ts
│   ├── ...
│   └── README.md
│
└── utils

```

## ⚙️ Setup for specific library

### 🔧 SonarQube

- Get the project key from https://sonar.software.vmo.dev/, then update `sonar.projectKey` variable:

```
    sonar.projectKey=update-this-with-project-key-from-sonar-page
    sonar.qualitygate.wait=true
```

### 🔧 ESLint, Prettier and Husky

Install with basic config `.eslintrc.js`, `.husky`. Feel free to modify for specific usage.

### 🔧 Storybook

- Use the Storybook CLI to install it in a single command. Run this inside your existing project’s root directory:

```
# Add Storybook:
npx sb init
```

- Check that everything worked by running:

```
# Starts Storybook in development mode
yarn storybook
```

- For more issues, please check: https://storybook.js.org/docs/react/get-started/install

### 🔧 CI/CD with GitLab

## 🛑 Note

### Lodash

This base use simplified version of some Lodash methods, to make them more digestible and they might miss edge cases covered in the original version .

Feel free to use the simple version [`src/utils/lodash.ts`](src/utils/lodash.ts) or install and pick up the full power of the Lodash itself!

🚧 NOTE: In case you use Lodash, remember to import only the functions you need through `lodash/_` or `lodash._`:

```typescript
const get = require("lodash/get");
// or
import get from "lodash/get";
```

### Momentjs

## Document

Source: https://tsdoc.org/

```
/**
 * Adds two numbers together.
 * @example
 * Here's a simple example:
 * ```
 * // Prints "2":
 * console.log(add(1,1));
 * ```
 * @example
 * Here's an example with negative numbers:
 * ```
 * // Prints "0":
 * console.log(add(1,-1));
 * ```
 */
export function add(x: number, y: number): number {
}
```
