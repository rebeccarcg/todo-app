const TodoItem = ({ task, deleteTask }) => {
  return (
    <div className="todo-item">
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
};
export default TodoItem;
