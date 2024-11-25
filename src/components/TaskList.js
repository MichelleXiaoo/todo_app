import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h3>Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h4>{task.name}</h4>
            <p>
              <strong>name:</strong> {task.name}
            </p>
            <p>
              <strong>description:</strong> {task.description}
            </p>
            <p>
              <strong> assignedTo:</strong> {task.assignedTo}
            </p>
            <p>
              <strong> status:</strong> {task.status}
            </p>
            <p>
              <strong> due:</strong> {task.due}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;