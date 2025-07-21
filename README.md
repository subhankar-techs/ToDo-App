# ToDo App

A modern, full-stack todo application built with React TypeScript frontend and Node.js Express backend. This application allows users to create, read, update, and delete todo items with a clean, responsive user interface.

## 🚀 Features

- ✅ **Create Todos**: Add new tasks with a simple input form
- ✏️ **Edit Todos**: Inline editing of existing tasks
- ✔️ **Mark Complete**: Toggle completion status of tasks
- 🗑️ **Delete Todos**: Remove tasks that are no longer needed
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Updates**: Instant updates without page refresh
- 🎨 **Modern UI**: Clean interface built with React Bootstrap

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **React Bootstrap** - Bootstrap components for React
- **Bootstrap 5** - CSS framework for responsive design
- **ESLint** - Code linting and formatting

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **CORS** - Cross-Origin Resource Sharing middleware
- **Nodemon** - Development utility for auto-restarting server

## 📁 Folder Structure

```
ToDo-App/
├── backend/                 # Backend API server
│   ├── node_modules/       # Backend dependencies
│   ├── package.json        # Backend package configuration
│   ├── package-lock.json   # Backend dependency lock file
│   └── server.js           # Express server implementation
├── todo-app/               # Frontend React application
│   ├── public/             # Static public assets
│   ├── src/                # Source code
│   │   ├── assets/         # Application assets
│   │   ├── App.tsx         # Main application component
│   │   ├── App.css         # Application styles
│   │   ├── main.tsx        # Application entry point
│   │   ├── index.css       # Global styles
│   │   └── vite-env.d.ts   # Vite type definitions
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend package configuration
│   ├── package-lock.json   # Frontend dependency lock file
│   ├── tsconfig.json       # TypeScript configuration
│   ├── tsconfig.app.json   # TypeScript app configuration
│   ├── tsconfig.node.json  # TypeScript Node.js configuration
│   ├── vite.config.ts      # Vite configuration
│   └── eslint.config.js    # ESLint configuration
└── README.md               # Project documentation
```

## 📦 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   
   Or for production:
   ```bash
   npm start
   ```

The backend server will start on `http://localhost:4000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend application will start on `http://localhost:5173`.

### Full Application Setup

To run both backend and frontend simultaneously:

1. **Terminal 1** (Backend):
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Terminal 2** (Frontend):
   ```bash
   cd todo-app
   npm install
   npm run dev
   ```

## 🚀 Usage

1. **Access the Application**: Open your browser and navigate to `http://localhost:5173`

2. **Add a Todo**: 
   - Type your task in the input field
   - Press Enter or click the "Add Todo" button

3. **Edit a Todo**:
   - Click on any todo text to edit it inline
   - Press Enter to save changes

4. **Mark Complete**:
   - Click the checkbox next to a todo to mark it as complete/incomplete

5. **Delete a Todo**:
   - Click the "Delete" button next to any todo to remove it

## ⚙️ Configuration

### Backend Configuration

The backend server can be configured through the following:

- **Port**: Default is `4000` (can be modified in `backend/server.js`)
- **CORS**: Enabled for all origins (can be restricted in production)
- **Data Storage**: Currently uses in-memory storage (todos are lost on server restart)

### Frontend Configuration

The frontend connects to the backend via:

- **API URL**: `http://localhost:4000` (defined in `todo-app/src/App.tsx`)
- **Build Output**: `dist/` directory
- **Development Server**: Vite dev server on port `5173`

## 📝 Available Scripts

### Backend Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Start | `npm start` | Start the server in production mode |
| Development | `npm run dev` | Start the server with nodemon for development |

### Frontend Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Development | `npm run dev` | Start Vite development server |
| Build | `npm run build` | Build the application for production |
| Lint | `npm run lint` | Run ESLint to check code quality |
| Preview | `npm run preview` | Preview the production build locally |

## 📡 API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/todos` | Retrieve all todos | None |
| POST | `/todos` | Create a new todo | `{ "text": "Todo text" }` |
| PUT | `/todos/:id` | Update a todo | `{ "text": "Updated text", "completed": true/false }` |
| DELETE | `/todos/:id` | Delete a todo | None |

### Example API Usage

```javascript
// Get all todos
fetch('http://localhost:4000/todos')

// Add a new todo
fetch('http://localhost:4000/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'New todo item' })
})

// Update a todo
fetch('http://localhost:4000/todos/123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'Updated todo', completed: true })
})

// Delete a todo
fetch('http://localhost:4000/todos/123', {
  method: 'DELETE'
})
```

## 🤝 Contributing

We welcome contributions to improve the ToDo App! Here's how you can contribute:

### Getting Started

1. **Fork the Repository**: Click the "Fork" button on the GitHub repository page

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/your-username/ToDo-App.git
   cd ToDo-App
   ```

3. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Development Workflow

1. **Setup Development Environment**:
   - Follow the installation instructions above
   - Ensure both backend and frontend are running properly

2. **Make Changes**:
   - Follow the existing code style and conventions
   - Add comments for complex logic
   - Update documentation if needed

3. **Test Your Changes**:
   - Run linting: `npm run lint` (in todo-app directory)
   - Build the project: `npm run build` (in todo-app directory)
   - Test functionality manually

4. **Commit and Push**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**:
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Provide a clear description of your changes

### Contribution Guidelines

- **Code Style**: Follow the existing TypeScript and JavaScript conventions
- **Commit Messages**: Use conventional commit format (feat:, fix:, docs:, etc.)
- **Testing**: Ensure your changes don't break existing functionality
- **Documentation**: Update README.md if you add new features or change functionality

### Areas for Contribution

- 🔐 Add user authentication and authorization
- 💾 Implement persistent data storage (database integration)
- 📊 Add todo categories and filtering
- 🎨 Improve UI/UX design
- ✅ Add comprehensive testing (unit and integration tests)
- 🚀 Add deployment configurations
- 📱 Enhance mobile responsiveness
- 🔍 Add search functionality
- 📅 Add due dates and reminders

## 📄 License

This project is licensed under the **ISC License**.

```
ISC License

Copyright (c) 2024 ToDo-App Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

## 📞 Contact Information

### Project Maintainer
- **GitHub**: [@subhankar-techs](https://github.com/subhankar-techs)
- **Repository**: [ToDo-App](https://github.com/subhankar-techs/ToDo-App)

### Support
- **Issues**: Please report bugs and feature requests through [GitHub Issues](https://github.com/subhankar-techs/ToDo-App/issues)
- **Discussions**: Join conversations in [GitHub Discussions](https://github.com/subhankar-techs/ToDo-App/discussions)

### Getting Help

If you need help with the project:

1. **Check the Documentation**: Review this README and the code comments
2. **Search Issues**: Look through existing GitHub issues for similar problems
3. **Create an Issue**: If you can't find a solution, create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - System information (OS, Node.js version, etc.)

---

**Happy coding! 🎉**

Made with ❤️ by the ToDo-App team