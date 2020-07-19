import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default class Timer extends Component {

    constructor() {
        super()
        this.state = {
            m0: 5,
            m1: 2,
            s0: 0,
            s1: 0,
            M0: 5,
            M1: 0,
            S0: 0,
            S1: 0,
        }
    }

    render() {
        return(
        <View style={styles.center}>
            <Text style={{ marginTop: 20, fontWeight: 'bold', }}> Set Working Time </Text>
            <View style={styles.inputContainer}>

                <Text>Min: </Text>
                {/* state of the work timer minutes */}
                <TextInput style={styles.input} value={`${this.state.m1}${this.state.m0}`} keyboardType='number-pad' />

                <Text style={{ marginLeft: 50 }}> Sec: </Text>
                {/* state of the work timer minutes */}
                <TextInput style={styles.input} value={`${this.state.s1}${this.state.s0}`} keyboardType='number-pad'/>

            </View>
            <Text style={{ marginTop: 20, fontWeight: 'bold', }}>Set Rest Time</Text>
            <View style={styles.inputContainer}>

                <Text>Min: </Text>
                {/* state of the rest timer minutes */}
                <TextInput style={styles.input} value={`${this.state.M1}${this.state.M0}`} keyboardType='number-pad' />

                {/* state of rest timer seconds */}
                <Text style={{ marginLeft: 50 }}> Sec: </Text>
                <TextInput style={styles.input} value={`${this.state.S1}${this.state.S0}`} keyboardType='number-pad' />

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
