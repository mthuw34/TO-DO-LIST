# Focusly ✦

**Focusly** is a responsive task management dashboard built with **React 18, Vite 6 and Lucide icons**. This repository contains the **frontend MVP** of a larger full-stack portfolio project.

## Features

- Create, edit, complete and delete tasks
- Task descriptions, deadlines, priorities, projects and statuses
- Text search and combinable project/priority/status filters
- Dashboard metrics: total, completed, due today and overdue
- Overall completion ring and analytics
- Interactive monthly calendar with task editing
- Responsive sidebar and layout for desktop/mobile
- Browser localStorage persistence and JSON export
- Unit tests for statistics and filtering

## Quick start

Install Node.js 20 or newer.

```bash
git clone https://github.com/mthuw34/TO-DO-LIST.git
cd TO-DO-LIST
npm install
npm run dev
```

Open the URL displayed in the terminal (normally http://localhost:5173).

```bash
npm test
npm run build
npm run preview
```

## Project structure

```text
src/
  main.jsx       React UI, calendar, tasks, modal and charts
  style.css      Responsive styling
  tasks.js       Storage, initial tasks, statistics, filtering
  tasks.test.js  Unit tests for task helpers
index.html
package.json
```

## Storage and limitations

**This is a frontend-only MVP, not yet a full-stack production service.** Tasks are stored in `localStorage` in the current browser. There is **no authentication, remote database, AI, reminders or cross-device synchronization**. Demo tasks load only when no stored task list exists.

## Roadmap

- [ ] TypeScript migration
- [ ] Express API + PostgreSQL schema and migrations
- [ ] Secure sign-up, login, role-based authorization
- [ ] API integration tests and CI/CD
- [ ] Drag-and-drop Kanban boards
- [ ] Smart scheduling and optional AI planning

## Deployment

Deploy the frontend to Vercel or Netlify. Set the build command to `npm run build` and output directory to `dist`.

## Testing status

Task-helper unit tests passed (3/3) in a local Node.js runtime. A production Vite build has **not yet been verified** in the current environment because dependency installation timed out. Run `npm install && npm test && npm run build` locally or in CI before publishing a live demo.

## License

MIT
