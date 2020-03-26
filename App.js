import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleExample from './SimpleExample';


export default function App() {
  return (
    <SimpleExample/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
