# Skill Registry - abrigate-bien-store

## System Skills
- **sdd-init**: Initialize project context (Active)
- **sdd-explore**: Investigate ideas and codebase
- **sdd-propose**: Create change proposals
- **sdd-spec**: Write technical specifications
- **sdd-design**: Create technical designs
- **sdd-tasks**: Break down implementation tasks
- **sdd-apply**: Implement code changes
- **sdd-verify**: Validate implementation
- **sdd-archive**: Finalize and sync changes
- **judgment-day**: Adversarial review protocol

## Project Skills (.agents/skills)
- **commit-generator**: Automated conventional commits
- **issue-generator**: GitHub issue creation from context
- **pr-generator**: Pull Request description generator
- **accessibility**: WCAG 2.2 audit and remediation
- **seo**: SEO optimization and auditing
- **astro**: Astro component and page development
- **tailwind-css-patterns**: TailwindCSS v4 utility-first styling patterns
- **composition-patterns**: React composition patterns
- **container-presentational-pattern**: Separation of logic and presentation in components
- **react-best-practices**: Performance and best practices for React/Astro
- **typescript-advanced-types**: Generic and advanced TypeScript typings
- **frontend-design**: Premium aesthetics and design patterns
- **nodejs-backend-patterns**: Node.js backend services and middleware patterns
- **nodejs-best-practices**: Node.js development principles

## Project Standards (Compact Rules)
- **Framework**: Astro v6 + React v19 (follow official best practices and integration guidelines)
- **Styling**: TailwindCSS v4 (utility-first, premium aesthetics, use design tokens)
- **Linting & Formatting**: Biome for linter/formatter (run `pnpm lint --write`) and Prettier for Astro formatting (run `pnpm format`)
- **Language & Format**: English for PRs, Issues, Commits, and Documentation. Spanish (Rioplatense) for communication and UI.
- **Git Flow**: Atomic Commits (one logical change per commit) via conventional commits.
- **Architecture**: Screaming Architecture (`src/features/...` or feature-focused directory structure).
- **Component Pattern**: React Composition Pattern, Container/Presentational Pattern (split state/stores from presentation).
- **SVG Isolation**: Reusable icons under `src/components/icons/` instead of hardcoded XML.
- **Clean Tailwind**: Avoid long class strings (chorizos) by breaking them down or using `@utility` in `global.css`.
- **Design Tokens**: Centralized variables defined in `@theme` of `global.css` (e.g. `--color-brand`, `--color-bg`, no arbitrary colors).
- **Core Principles**: SRP, DRY, KISS, YAGNI.
- **NO COMMENTS RULE**: STRICTLY PROHIBITED to leave structural, redundant, or unnecessary comments in code.

## Testing Capabilities
- **Unit/Integration**: None configured (consider adding Vitest)
- **E2E**: None configured (consider adding Playwright)
- **Linter/Formatter**: Biome
- **Type Checking**: TypeScript (tsc)
- **Strict TDD Mode**: Disabled

## Persistence Protocol
- Every completed SDD phase MUST be saved to `openspec/` AND `engram`.
- Topic key format: `sdd/{change-name}/{artifact-type}`.
- Use `mem_save` for architectural decisions, bug fixes, and non-obvious findings.
