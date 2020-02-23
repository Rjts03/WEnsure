import React, {Component, useState, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import { makePayment } from '../utils/request';

const paymentStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: 100,
        paddingRight: 30,
        paddingLeft: 30
    },
    inputStyle: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#E8E7E7',
        width: '100%',
        padding: 7,
    }
})

const Payment = ({navigation, route}) => {

    const [money, setMoney] = useState(0);
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const addMoney = () => {
        setIsLoading(true)
        const date = new Date()
        const body = {
            uid: route.params.uid,
            policy_id: route.params.pid,
            amount: money,
            type: 'CREDIT',
            date: date.toString()
        }
        makePayment(body, setStatus, setError, setIsLoading)
    }

    useEffect(() => {
        if(status)
            navigation.navigate('Home')
    }, [status])

    return (
        <View style={paymentStyle.container}>
            <TextInput value={money} onChangeText={text => setMoney(parseInt(text))} style={paymentStyle.inputStyle} maxLength={6}  placeholder='Add Money' />
            <Button onPress={addMoney} buttonStyle={{marginTop: 30, backgroundColor: 'green'}} title='pay money'></Button>
        </View>
    )
}

export default Payment