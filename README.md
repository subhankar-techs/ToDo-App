# ToDo-App

A modern ToDo application built with TypeScript, JavaScript, CSS, and HTML.

## Features

- Add, edit, and delete tasks
- Mark tasks as completed
- Persistent storage (local or backend)
- Responsive design

## Project Structure

```
ToDo-App/
├── public/               # Static files (images, favicon, etc.)
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── utils/            # Utility/helper functions
│   ├── styles/           # CSS/SCSS files
│   ├── App.tsx           # Main App component (if React)
│   └── index.tsx         # Entry point (if React)
├── dist/                 # Production build (auto-generated)
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
├── .gitignore            # Git ignored files
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/subhankar-techs/ToDo-App.git
   cd ToDo-App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app in development mode:**
   ```bash
   npm start
   ```
   The app will typically be available at `http://localhost:3000/`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready files will be in the `dist/` folder.

## Scripts

- `npm start` — Runs the app in development mode.
- `npm run build` — Builds the app for production.
- `npm test` — Runs tests (if configured).

## Requirements

- Node.js (v16+ recommended)
- npm or yarn

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

## License

[MIT](LICENSE)