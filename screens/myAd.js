/* eslint-disable prettier/prettier */
// MyAdScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyAdScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Ad Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen', // Set your desired background color
  },
  text: {
    fontSize: 18,
  },
});

export default MyAdScreen;

