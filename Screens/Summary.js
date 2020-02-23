import React,  {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button} from 'react-native-elements';
import { getUserBalance } from '../utils/request';
import config from '../config'
const {uid} = config

const summaryStyle = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height: '100%',
        paddingTop:100,
        paddingLeft: 20,
        paddingRight: 20,
        'alignItems': 'center'
    },
    savedMoney: {
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        'justifyContent': 'space-between'
    }, 
    horizontalLine: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#E8E7E7'
    },
    button: {marginTop: 40, alignContent: 'flex-end', backgroundColor: 'green'}
})

const Summary = (props) => {
    const {navigation} = props

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getUserBalance(uid, setData, setError, setIsLoading)
    }, [])

    const getTotalBalance = () => {
        const bal = Object.keys(data).map(item => data[item].balance)
        return bal.reduce((a, b) => a+b, 0)
    }

    if(isLoading) {
        return <Text>Loading...</Text>
    }else if(error) {
        return <Text>{error}</Text>
    }
    return (
        <View style={summaryStyle.container}>
            {
                Object.keys(data).map((item, index) => {
                    return (
                        <View style={summaryStyle.savedMoney}>
                            <Text>{item}</Text>
                            <Text>{data[item].balance}</Text>
                        </View>
                    );
                })
            }
            <View style= {summaryStyle.horizontalLine}>
            </View>
            <View style={summaryStyle.savedMoney}>
                <Text>Total amount saved</Text>
                <Text>{getTotalBalance()}</Text>
            </View>
            <Button onPress={() => navigation.navigate('Withdraw Money')} buttonStyle={summaryStyle.button} title="Withdraw before time"/>
        </View>
    )
}

export default Summary
