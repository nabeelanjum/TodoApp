import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';
// import useAddTask from '../hooks/useAddTask';

const AddTaskModal = ({ isVisible, hideModal, addTask }) => {

  const [newTask, setTask] = useState('');

  const addNewTask = () => {
    addTask(newTask);
    setTask('');
    hideModal();
  }

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={hideModal} style={{ flex: .4 }} />
        <View style={styles.addTaskView}>
          <TextInput value={newTask} autoFocus={true} placeholder='Add New Task' returnKeyType='done' style={styles.addInputField} onChangeText={(t) => setTask(t)} />
          <TouchableOpacity style={styles.addBtn} onPress={addNewTask}>
            <Text style={{ color: 'white' }}>Add</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={hideModal} style={{ flex: .6 }} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 15,
  },
  addTaskView: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: colors.BACKGROUND,
  },
  addInputField: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.DIVIDER,
    minHeight: 36,
  },
  addBtn: {
    height: 40,
    width: 120,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: colors.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})

export default AddTaskModal;