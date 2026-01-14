# Agent Instructions for Sokkel Website

This repository contains the source code for the Sokkel website, built with
**Astro**, **TypeScript**, and **CSS**.

## 1. Build, Lint, and Test Commands

Use `pnpm` for all package management commands.

- **Development Server:**

  ```bash
  pnpm dev
  ```

  Starts the Astro development server on `http://localhost:4321`.

- **Build:**

  ```bash
  pnpm build
  ```

  Builds the project for production. Result is output to the `dist/` directory.

- **Preview Build:**

  ```bash
  pnpm preview
  ```

  Previews the production build locally.

- **Formatting:**

  ```bash
  pnpm format
  ```

  Runs Prettier to format all files. Run this before committing changes.

- **Type Checking:** The project uses `astro/tsconfigs/strict`. Type checking is
  performed during `pnpm build`.
  - _Note: There are no separate `lint` or `test` scripts configured in
    `package.json` currently._

Make sure to use the Astro Docs MCP Server to stay updated with the latest best practices
and guidelines for Astro projects.

## 2. Code Style & Conventions

### General

- **Language:** TypeScript (Strict mode enabled).
- **Package Manager:** pnpm.
- **Formatting:** Use Prettier (single quotes, 2 spaces indentation).
- **Imports:** Use explicit relative imports.

### Astro Components (`.astro`)

- **Structure:**
  1.  **Frontmatter (`---`):** Imports, Type Definitions, Props Destructuring,
      Logic.
  2.  **Template:** HTML/JSX-like syntax.
  3.  **Styles:** `<style>` block at the bottom.
- **Props:**
  - Define a `Props` type and export it.
  - Destructure `Astro.props` immediately after type definitions.
  - Use PascalCase for Prop interfaces (e.g., `HeaderProps`).
- **Example:**

  ```astro
  ---
  import SomeComponent from './some-component.astro';

  export type Props = {
    title: string;
    isActive?: boolean;
  };

  const { title, isActive = false } = Astro.props;
  ---

  <div class:list={['container', { active: isActive }]}>
    <h1>{title}</h1>
    <SomeComponent />
  </div>

  <style>
    .container {
      padding: var(--spacing);
    }
  </style>
  ```

### TypeScript

- **Naming:**
  - **Variables/Functions:** camelCase (e.g., `makeUrl`, `waitlistUrl`).
  - **Components/Types:** PascalCase (e.g., `Layout`, `MetaProps`).
- **Types:** Prefer `type` aliases over `interface` for props and internal
  structures.

### CSS & Styling

- **Methodology:** Scoped CSS within Astro components.
- **Variables:** Use CSS variables for design tokens (e.g., `var(--spacing)`,
  `var(--color-base-primary)`).
- **Nesting:** Use native CSS nesting (supported by Astro/Browsers).
- **Media Queries:** Nest media queries within the selector they modify.
  ```css
  header {
    padding: 1rem;
    @media (min-width: 40rem) {
      padding: 2rem;
    }
  }
  ```
- **Global Styles:** Global styles are in `src/layouts/Layout.astro` or imported
  CSS files (e.g., `reset.css`, `variables.css`). Avoid adding new global styles
  unless necessary.

### Project Structure

- `src/pages/`: Astro pages (file-based routing).
- `src/components/`: Reusable Astro components.
- `src/layouts/`: Page layouts (e.g., `Layout.astro`).
- `src/assets/`: Static assets like images.
