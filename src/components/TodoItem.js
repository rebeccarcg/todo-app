const TodoItem = ({ task, deleteTask }) => {
  return (
    <li className="todo-item">
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>Done</button>
    </li>
  );
};
export default TodoItem;
