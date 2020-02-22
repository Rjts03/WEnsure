import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function App() {
  const [c, setC] = React.useState(0)
  return (
    <View style={styles.container}>
      <Text>RNEXPOWEB {c}</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <TouchableHighlight onPress={() => setC(c+1)}><Text>INC</Text></TouchableHighlight>
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
