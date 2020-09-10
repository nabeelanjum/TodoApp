import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';

const ListItemRightActionButton = ({ name, color, size = 25, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.doneButton}>
        <Icon name={name} size={size} color={color} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  doneButton: {
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GREEN
  }
})

export default ListItemRightActionButton;