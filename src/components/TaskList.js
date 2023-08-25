import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const taskCards = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        label={task.category}
        text={task.text}
        onDelete={() => handleDelete(task.id)}
      />
    );
  });

  return <div className="tasks">{taskCards}</div>;
}

export default TaskList;
