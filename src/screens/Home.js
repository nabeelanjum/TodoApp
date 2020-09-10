import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../utils/colors';
import { getTasks, removeTask, addTask } from '../utils/storage';
import { AddTaskModal, ListItemRightActionButton, Task, AppIcon } from '../components'
import { SwipeListView } from 'react-native-swipe-list-view';

const Home = () => {

  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadTasks();
  }, [])

  loadTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  }

  addTaskInStorage = async (newTask) => {
    if (newTask === '') return;
    const response = await addTask(newTask, tasks);
    setTasks(response);
  }

  markTaskDone = async (data, rowMap) => {
    const { index, item } = data;
    const resp = await removeTask(item, tasks);
    if (rowMap[index]) {
      rowMap[index].closeRow();
    }
    setTasks(resp);
  }

  return (
    <View style={styles.container}>
      <SwipeListView
        rightOpenValue={-60}
        closeOnRowPress
        closeOnRowBeginSwipe
        disableRightSwipe
        previewRowKey={'0'}
        previewDuration={300}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Task task={item} />}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBackSide}>
            <View />
            <ListItemRightActionButton name='done' color='white' onPress={() => markTaskDone(data, rowMap)} />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: colors.DIVIDER }} />}
      />
      <AppIcon raised name='plus' size={55} style={styles.plusButton} onPress={() => setModalVisible(true)} />
      <AddTaskModal hideModal={() => setModalVisible(false)} isVisible={isModalVisible} addTask={addTaskInStorage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.WHITE
  },
  rowBackSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.GREEN,
  },
  plusButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  }
});

export default Home;