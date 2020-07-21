import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';

// importing components from other files
import Timer from './timer.js'

export default class App extends React.Component {
  render() {
      return (
        <View style={styles.container}>
            <StatusBar backgroundColor='blue' barType='dark-content' visible/>
            <Text style={[styles.text, styles.boxShadow]}>Work Timer</Text>
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
        borderWidth: 2,
        borderColor: '#1d2124',
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: 'white',
    },
    boxShadow: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.50, //0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
  });
