import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default class Timer extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0,
        }
    }

    render() {
        return(
        <View style={styles.center}>
            <Text style={{ marginTop: 20, fontWeight: 'bold', }}> Set Working Time </Text>
            <View style={styles.inputContainer}>
                <Text>Min: </Text>
                <TextInput style={styles.input} value={'00'} keyboardType='number-pad' />
                <Text style={{ marginLeft: 50 }}> Sec: </Text>
                <TextInput style={styles.input} value={'00'} keyboardType='number-pad'/>
            </View>
            <Text style={{ marginTop: 20, fontWeight: 'bold', }}>Set Rest Time</Text>
            <View style={styles.inputContainer}>
                <Text>Min: </Text>
                <TextInput style={styles.input} value={'00'} keyboardType='number-pad' />
                <Text style={{ marginLeft: 50 }}> Sec: </Text>
                <TextInput style={styles.input} value={'00'} keyboardType='number-pad' />
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#1d2124',
        height: 25,
        width: 50,
        textAlign: 'center',
    },
    inputContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
})
