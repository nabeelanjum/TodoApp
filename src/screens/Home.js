import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import { getTasks, removeTask, addTask } from '../utils/storage';
import { AddTaskModal, ListItemRightActionButton, Task, AppIcon } from '../components';
import { SwipeListView } from 'react-native-swipe-list-view';

const Home = () => {

  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState('');

  useEffect(() => {
    loadTasks();
  }, [])

  const loadTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  }

  const markTaskDone = async (data, rowMap) => {
    const { index } = data;
    const { tasks: existingTasks } = this.state;
    const resp = await removeTask(index, existingTasks);
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Task task={item} />}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBackSide}>
            <View />
            <ListItemRightActionButton onPress={() => markTaskDone(data, rowMap)} />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: colors.DIVIDER }} />}
      />
      <AppIcon raised name='plus' size={55} style={styles.plusButton} onPress={() => setModalVisible(true)} />
      <AddTaskModal isVisible={isModalVisible} task={currentTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  rowBackSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.GREEN,
  },
  doneButton: {
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  }
});

export default Home;