import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoList from './component/todo';
import AddTodo from './component/addtodo';
import { useState } from 'react';

const LIVE_DEMO_URL = 'https://todo-list-app.onrender.com';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Practice JavaScript', completed: true }
  ]);

  const addTodo = (newTodo) => {
    setTodos((previousTodos) => [...previousTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== id)
    );
  };

  const toggleTodo = (id) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '12px 20px'
          }}
        >
          <a
            href={LIVE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 18px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '600'
            }}
          >
            Live Demo
          </a>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            }
          />

          <Route
            path="/addtodo"
            element={<AddTodo addTodo={addTodo} />}
          />

          <Route
            path="*"
            element={
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <h2>404 - Page Not Found</h2>
                <Link to="/">Go to To-Do List</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;