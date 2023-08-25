import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [taskName, setTaskName] = useState("");
  console.log(taskName);

  const [taskCategory, setTaskCategory] = useState("All");
  console.log(taskCategory);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const onTaskFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const newTask = { text: taskName, category: taskCategory };
    addTask(newTask);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onSelectCategory={handleCategorySelect}
        tasks={tasks}
        setTasks={setTasks}
        addTask={addTask}
        onTaskFormSubmit={onTaskFormSubmit}
        setTaskCategory={setTaskCategory}
        setTaskName={setTaskName}
        taskName={taskName}
        taskCategory={taskCategory}
      />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
