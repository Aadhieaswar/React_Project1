import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

// importing the timer part from another file
import Part from './part.js'

export default class Timer extends Component {

    constructor() {
        super()
        this.state = {
            mW: 25,
            sW: 0,
            mR: 5,
            sR: 0,
            workTime: true,
            timer: '25:00',
            condition: 'Start',
        }
    }

    formatNumber(num) {
        var str = String(num)
        if (str.length === 1) {
            str = '0' + str
        }
        return str
    }

    runTimer = () => {
        if (this.state.sW === 0) {
            this.setState(pre => ({mW: pre.mW - 1, sW: 59 }))
        } else if (this.state.sW >= 0) {
            this.setState(pre => ({sW: pre.sW - 1}))
        }
        this.setState({timer: this.formatNumber(this.state.mW) + ':' + this.formatNumber(this.state.sW)})
    }

    controlTimer = () => {
        clearInterval(this.clock)
        if (this.state.condition === 'Start') {
            this.setState({condition: 'Pause'})
            this.clock = setInterval(this.runTimer, 1000)
        } else {
            this.setState({condition: 'Start'})
            clearInterval(this.clock)
        }
    }

    render() {
        return(
        <View style={styles.center}>
            <Text style={styles.timer}>{this.state.timer}</Text>
            <View style={styles.btnContainer}>
                <Button title={this.state.condition} color='darkgreen' onPress={this.controlTimer} />
                <Button title='Reset' color='red' />
            </View>

            {/* Work timer inputs */}
            <Part title='Set Working Time' m={this.state.mW} s={this.state.sW} />

            {/* Rest timer inputs */}
            <Part title='Set Rest Time' m={this.state.mR} s={this.state.sR} />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    timer: {
        fontSize: 50,
        alignItems: 'center',
        padding: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})
