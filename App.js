import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, StatusBar } from 'react-native';

// importing components from other files
import Timer from './timer.js'

export default class App extends Component {
  render() {
      return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
            <StatusBar barStyle='dark-content' />
            <Text style={[styles.text, styles.boxShadow]}>Work Timer</Text>
            <Timer/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f1f1f1',
    },
    text: {
        fontSize: 50,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#1d2124',
        width: 300,
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
