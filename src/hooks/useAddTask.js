import { useState } from 'react';
import { addTask } from '../utils/storage';

export default useAddTask = (newTask, existingTasks) => {

  const [tasks, setTasks] = useState(existingTasks);

  const addTaskInStorage = async () => {
    const response = await addTask(newTask, existingTasks);
    setTasks(response);
  }

  return { addTaskInStorage, tasks };
}