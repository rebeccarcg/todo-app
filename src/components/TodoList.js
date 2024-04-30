import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "First Todo",
    },
    {
      id: 2,
      text: "Second Todo",
    },
  ]);

  const [text, setText] = useState("");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearAllTodoItems = () => {
    setTasks([]);
  };

  return (
    <div>
      <div className="todo-input">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTask(text)}>Add Todo</button>
        <button onClick={clearAllTodoItems}>Clear All</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
