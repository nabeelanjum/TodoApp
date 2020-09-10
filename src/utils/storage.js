import AsyncStorage from '@react-native-community/async-storage';

// Helper functions //

function getTaskId() {
  return Math.floor(Math.random() * (90000 - 1 + 1)) + 1;
}

export const set = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    alert('Unable to store value in storage: ', key);
    console.log(e);
  }
}

export const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    alert('Unable to get value from storage: ', key);
    console.log(e);
  }
}

export const addTask = async (newTask, existingTasks) => {
  try {
    const taskObj = {
      name: newTask,
      id: getTaskId()
    };
    existingTasks.push(taskObj);
    await AsyncStorage.setItem('tasks', JSON.stringify(existingTasks));
    return existingTasks;
  } catch (e) {
    console.log(e);
    alert('There was some error in adding task');
  }
}

export const removeTask = async (task, existingTasks) => {
  try {
    const newMessages = existingTasks.filter(m => m.id !== task.id);
    await AsyncStorage.setItem('tasks', JSON.stringify(newMessages));
    return newMessages;
  } catch (e) {
    console.log(e);
    alert('There was some error in marking task as complete');
  }
}

export const getTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(tasks);
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    alert('There was some error in getting tasks');
    return [];
  }
}