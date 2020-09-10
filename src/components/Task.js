import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const Task = ({ task }) => {
  return (
    <View style={styles.taskContainer}>
      <Text>{task.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 12,
    paddingVertical: 15,
  }
})

export default Task;