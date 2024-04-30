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

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTask(text)}>Add Todo</button>
    </div>
  );
};

export default TodoList;
