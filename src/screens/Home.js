import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const Home = () => {
  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  }
});

export default Home;