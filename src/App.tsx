
import { useState } from 'react';
// import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
  const addTodo = (value: string) => {
    const newTodo = new Todo(value);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo)
    })

  }
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
