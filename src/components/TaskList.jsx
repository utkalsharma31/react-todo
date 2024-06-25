import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../tasksSlice";
import {
  Button,
  List,
  ListItem,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editOpen, setEditOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setNewText(task.text);
    setEditOpen(true);
  };

  const handleEditSave = () => {
    if (currentTask) {
      dispatch(editTask({ id: currentTask.id, newText }));
      setEditOpen(false);
      setCurrentTask(null);
    }
  };

  return (
    <div className="task-list">
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  Delete
                </IconButton>
                <IconButton edge="end" onClick={() => handleEditClick(task)}>
                  Edit
                </IconButton>
              </>
            }
          >
            {task.text}
          </ListItem>
        ))}
      </List>

      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Modify the task description below:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Task Description"
            fullWidth
            variant="standard"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskList;
