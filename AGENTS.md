# Repository Guidelines

## Project Structure & Ownership
This repository has two maintained areas:
- `docs/`: source-of-truth requirements and technical rules that AI agents and contributors must reference before making changes.
- `mockup-app/`: runnable React + Vite prototype of the ATS mockup UI.

Within `docs/`, every folder must include a `README.md` that explains purpose and describes the `.md` files inside it. Keep docs discoverable and ordered.

## Documentation Rules (Agent-Facing)
- Treat `docs/` as the primary functional specification.
- Read `docs/README.md` first, then the relevant folder README.
- Keep numbered specs in sequence using `NN-topic.md` naming where applicable.
- Do not place working drafts in tracked docs paths; use `_archived/` for temporary material (ignored by git).

## Build, Test, and Development Commands
- `rg --files docs` lists documentation files quickly.
- `Get-ChildItem docs -Recurse` inspects docs structure.
- `cd mockup-app && npm install` installs app dependencies.
- `cd mockup-app && npm run dev` starts the mockup locally.
- `cd mockup-app && npm run lint` checks frontend linting.
- `cd mockup-app && npm run build` validates TypeScript and production bundling.

## Coding Style & Naming Conventions
- Markdown: one `#` heading per file, clear `##` sections, short actionable language.
- Keep requirement and principle docs explicit, not narrative-heavy.
- Frontend code in `mockup-app/` uses TypeScript, React function components, and Fluent UI.
- Prefer reusable components over large inline markup exports.

## Testing Guidelines
- Docs changes: verify links, headings, numbering, and cross-file consistency.
- Mockup app changes: run `npm run lint` and `npm run build` in `mockup-app/`.
- Validate key UI behaviors (search, sort, filters, view toggle) in local dev mode.

## Commit & Pull Request Guidelines
- Use concise imperative commit subjects (example: `docs: add folder readmes`).
- Keep PRs scoped by concern (docs or app, not broad mixed refactors).
- PR description should include impacted paths and screenshots for UI updates.
