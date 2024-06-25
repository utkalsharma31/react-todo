import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@mui/material";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ id: uuidv4(), text: taskText.trim() }));
      setTaskText("");
    }
  };

  return (
    <div className="task-input">
      <TextField
        label="New Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
      />
      <Button variant="contained" onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;
