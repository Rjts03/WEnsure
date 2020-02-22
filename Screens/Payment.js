import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

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

const Payment = (props) => {
    return (
        <View style={paymentStyle.container}>
            <TextInput style={paymentStyle.inputStyle} maxLength={6}  placeholder='Add Money' />
            <Button buttonStyle={{marginTop: 30, backgroundColor: 'green'}} title='pay money'></Button>
        </View>
    )
}

export default Payment