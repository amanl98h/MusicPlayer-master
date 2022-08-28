import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListMusic from './components/Screens/ListMusic';


export default function App() {

  return (
    <View style={styles.container}>
      <ListMusic/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24282C",
  },
});