import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from './utils/colors';
import AppContainer from './utils/router';

import {useKeepAwake} from '@sayem314/react-native-keep-awake';


const App = () => {
  if(__DEV__)
    useKeepAwake();

  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  }
});

export default App