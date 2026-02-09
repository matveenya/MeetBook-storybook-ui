# MeetBook Storybook UI

A specialized UI Kit for the **MeetBook** project, built with **Vue 3**, **PrimeVue**, and **Tailwind CSS**. This library uses **Storybook** for isolated component development, documentation, and testing.

## 🚀 Tech Stack

* **Framework:** [Vue 3](https://vuejs.org/) (Composition API with `<script setup>`).
* **Build Tool:** [Vite](https://vitejs.dev/).
* **Language:** [TypeScript](https://www.typescriptlang.org/).
* **Styling:** [Tailwind CSS 4](https://tailwindcss.com/).
* **UI Components:** [PrimeVue 4](https://primevue.org/) with **Aura** theme.
* **Documentation:** [Storybook 10](https://storybook.js.org/).

## 📦 Key Components

Components are logically organized and exported via `src/index.ts`:

### UI (Atomic)
* **Button**: A highly customizable button supporting multiple variants: `primary`, `outlined`, `icon`, `danger`, and `tab`.
* **Input**: Comprehensive input fields including text and password types with built-in validation states and icon support.
* **SidebarItem**: Navigation components designed for dashboard sidebars.

### Layout & Auth
* **Header**: Main dashboard header featuring user profile information and logout functionality.
* **DashboardTabs**: A navigation bar for switching between different dashboard views (e.g., Calendar, History).
* **OrBlockAuth**: A stylized separator for authentication forms.

## 🛠 Development Commands

This project uses `pnpm` as the package manager.

### Install Dependencies
```bash
pnpm install