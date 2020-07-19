import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

// import items from other files below
import Timer from './timer.js'

export default class App extends React.Component {
  render() {
      return (
        <View style={styles.container}>
            <Text style={styles.text}>Work Timer</Text>
            <Timer/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        color: '#1d2124',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#1d2124',
        padding: 10,
        borderRadius: 5,
    },
});
