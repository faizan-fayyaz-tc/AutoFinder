/* eslint-disable prettier/prettier */
// ChatScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow', // Set your desired background color
  },
  text: {
    fontSize: 18,
  },
});

export default ChatScreen;

