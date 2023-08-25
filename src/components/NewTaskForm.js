function NewTaskForm({
  categories,
  onTaskFormSubmit,
  setTaskCategory,
  setTaskName,
  taskName,
  taskCategory,
}) {
  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
