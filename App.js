import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Hello World!</Text>
      <View style={buttonsty.button}>
      <Button
      title="Greet"
      onPress={() => Alert.alert('Hi From App 👋')}
      color="blue"
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
    flexDirection:'column',
    padding:10,
    marginTop:140,
    fontSize:30,
  },
});
const buttonsty = StyleSheet.create({
  button: {
    backgroundColor:'red',
    width:100,
    marginTop:10,
    borderRadius:4,
  },
});

