import React,  {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button} from 'react-native-elements';

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

    const data = [{InsuranceProvider: 'abcd', amount_saved: 29},
    {InsuranceProvider: 'abcd', amount_saved: 29}]

    const total_saved = 350;

    return (
        <View style={summaryStyle.container}>
            {
                data.map((item, index) => {
                    return (
                        <View style={summaryStyle.savedMoney}>
                            <Text>{item.InsuranceProvider}</Text>
                            <Text>{item.amount_saved}</Text>
                        </View>
                    );
                })
            }
            <View style= {summaryStyle.horizontalLine}>
            </View>
            <View style={summaryStyle.savedMoney}>
                <Text>Total amount saved</Text>
                <Text>{total_saved}</Text>
            </View>
            <Button onPress={() => navigation.navigate('Withdraw Money')} buttonStyle={summaryStyle.button} title="Withdraw before time"/>
        </View>
    )
}

export default Summary
