import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function App() {
  const [c, setC] = React.useState(0)
  return (
    <View style={styles.container}>
    </View>
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
