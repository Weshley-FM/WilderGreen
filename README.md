# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"# WilderGreen" 
## WilderGreen — Getting started

This project is a small React + Vite site for the WilderGreen community environmental project. I added a homepage and basic styling.

To run the dev server on Windows (cmd.exe):

```
npm install
npm run dev
```

Files added:

- `src/main.jsx` — React entry and router
- `src/App.jsx` — App shell (header, routes, footer)
- `src/pages/Home.jsx` — Homepage content (hero, mission, activities, events, donate)
- `src/styles.css` — Global styles for layout and responsive design

New pages and features added:

- `src/pages/About.jsx` — About page
- `src/pages/Events.jsx` — Events listing
- `src/pages/GetStarted.jsx` — Quick start guide
- `src/pages/Profile.jsx` — User profile stub
- `src/components/ThemeToggle.jsx` — Toggle dark / light themes with persisted preference
- Updated styles with gradients, animations, responsive layout and modern palette
Additional updates:

- Replaced emoji icons with inline SVGs for a professional look
- New cinematic dark theme (inspired by studio landing pages like Unity/Unreal) with consistent color palette and positioning
- Added pages: Projects, Team, Donate, Resources, Contact

If PowerShell prevents running `npm` due to execution policies, start cmd.exe or enable script execution for PowerShell.
