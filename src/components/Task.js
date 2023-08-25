import React from "react";

function Task({ label, text, onDelete }) {
  return (
    <div className="task">
      <div className="label">{label}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
