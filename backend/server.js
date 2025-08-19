const express = require('express');
const cors    = require('cors');

const app = express();
const PORT = 4000;

// In-memory todos array
let todos = [];

// Middleware
app.use(cors());
app.use(express.json());

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a todo
app.post("/todos", (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: "Task text is required" });
  }
  const todo = { id: Date.now(), text: text.trim(), completed: false };
  todos.unshift(todo);
  res.status(201).json(todo);
});

// Update a todo (edit or toggle complete)
app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { text, completed } = req.body;
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  if (typeof text === "string") todos[idx].text = text.trim();
  if (typeof completed === "boolean") todos[idx].completed = completed;
  res.json(todos[idx]);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(204).end();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Todo API");
});

// Start server
app.listen(PORT, () => {
  console.log(`Todo backend running at http://localhost:${PORT}`);
});