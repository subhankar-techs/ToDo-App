import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button, ListGroup, InputGroup, Spinner } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const API_URL = "http://localhost:4000";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  // Fetch todos from backend
  useEffect(() => {
    fetch(`${API_URL}/todos`)
      .then(res => res.json())
      .then(setTodos)
      .catch(() => setError("Failed to fetch todos"))
      .finally(() => setLoading(false));
  }, []);

  // Add todo
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input.trim() }),
      });
      const newTodo = await res.json();
      setTodos(todos => [newTodo, ...todos]);
      setInput("");
    } catch {
      setError("Failed to add todo");
    }
  };

  // Toggle complete
  const toggleComplete = async (id: number, completed: boolean) => {
    try {
      await fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !completed }),
      });
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch {
      setError("Failed to update todo");
    }
  };

  // Delete
  const handleDelete = async (id: number) => {
    try {
      await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
      setTodos(todos => todos.filter(todo => todo.id !== id));
    } catch {
      setError("Failed to delete todo");
    }
  };

  // Editing
  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
    setTimeout(() => editInputRef.current?.focus(), 100);
  };

  const finishEditing = async (id: number) => {
    if (!editingText.trim()) {
      await handleDelete(id);
    } else {
      try {
        await fetch(`${API_URL}/todos/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: editingText.trim() }),
        });
        setTodos(todos =>
          todos.map(todo =>
            todo.id === id ? { ...todo, text: editingText.trim() } : todo
          )
        );
      } catch {
        setError("Failed to update todo");
      }
    }
    setEditingId(null);
    setEditingText("");
  };

  const handleEditKey = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if (e.key === "Enter") finishEditing(id);
    if (e.key === "Escape") {
      setEditingId(null);
      setEditingText("");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: 500 }}>
      <Row>
        <Col>
          <h2 className="text-center mb-4">📚 Study Todo List</h2>
          <Form onSubmit={handleAdd}>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter a new study task"
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                autoFocus
              />
              <Button type="submit" variant="primary">Add</Button>
            </InputGroup>
          </Form>
          {error && <div className="alert alert-danger">{error}</div>}
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" />
            </div>
          ) : (
            <ListGroup>
              {todos.length === 0 && (
                <ListGroup.Item className="text-center text-muted">
                  No tasks yet!
                </ListGroup.Item>
              )}
              {todos.map(todo => (
                <ListGroup.Item
                  key={todo.id}
                  className="d-flex justify-content-between align-items-center"
                  variant={todo.completed ? "success" : undefined}
                >
                  <div style={{ flex: 1 }}>
                    {editingId === todo.id ? (
                      <Form.Control
                        ref={editInputRef}
                        value={editingText}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditingText(e.target.value)}
                        onBlur={() => finishEditing(todo.id)}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleEditKey(e, todo.id)}
                        size="sm"
                      />
                    ) : (
                      <span
                        style={{
                          textDecoration: todo.completed ? "line-through" : "none",
                          cursor: "pointer",
                          userSelect: "none"
                        }}
                        onClick={() => toggleComplete(todo.id, todo.completed)}
                        title="Toggle complete"
                      >
                        {todo.text}
                      </span>
                    )}
                  </div>
                  <div>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => startEditing(todo.id, todo.text)}
                      className="me-2"
                      title="Edit"
                    >
                      ✏️
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(todo.id)}
                      title="Delete"
                    >
                      &times;
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;