# Lukulu Academy DAW Learning Lab

Lukulu Academy DAW Learning Lab is an original browser-based Digital Audio Workstation learning simulator. The project is designed to help students understand music-production workflows through guided, educational interface patterns before they move into a full professional DAW.

This first phase establishes a clean, scalable project foundation only. It does not include a complete audio engine, full sequencing engine, real recording features, commercial sample packs, or any copied DAW implementation.

## Educational purpose

The simulator will support beginner-friendly DAW lessons for Lukulu Academy students, including:

- Understanding transport controls and playback flow
- Building simple rhythm and channel patterns
- Learning arrangement and timeline concepts
- Practicing mixer balance, levels, and routing concepts
- Completing guided production assignments that connect browser practice with real-world DAW work

## Technology stack

- React
- Vite
- TypeScript
- Node.js 24.x
- npm
- ESLint
- Prettier
- Git/GitHub-ready project configuration

## Local setup

Use Node.js 24.x. If you use `nvm`, run:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available npm commands

- `npm run dev` - start the Vite development server
- `npm run build` - type-check and create a production build
- `npm run lint` - run ESLint across the project
- `npm run format` - format files with Prettier
- `npm run format:check` - check formatting without writing changes
- `npm run preview` - preview the production build locally

## Planned DAW learning modules

Future phases may add original Lukulu Academy learning modules such as:

1. Rhythm foundations and step-pattern practice
2. Playlist arrangement and song-section planning
3. Piano-roll note placement and melody concepts
4. Mixer balance, gain staging, and routing concepts
5. Automation and movement lessons
6. Audio review assignments and tutor feedback
7. Browser-based exercises that lead into real-DAW assignments

## Intellectual-property boundaries

This project must remain an original Lukulu Academy product. It may use common DAW interaction patterns for educational purposes, but it must not copy proprietary FL Studio source code, branding, logos, icons, audio, images, sample content, visual assets, or other copyrighted materials.

Any existing reference captures in this folder are preserved only as local reference material and are intentionally excluded from the application source and Git tracking. The application uses original labels, neutral placeholder graphics, and Lukulu Academy identity.
