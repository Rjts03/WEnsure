import React, {Component, useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';

const deathWillStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: 100,
        paddingRight: 30,
        paddingLeft: 30,
    },
    inputStyle: {
        width: '100%',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#E8E7E7',
        width: '100%',
        padding: 7,
    }

})

export function DeathWillScreen(props) {

    const [statement, setStatement] = useState('');

    let onValueChange = (val) => {
        setStatement(val);
    }
    return (
        <View style={deathWillStyle.container}>
            <Text style={{fontSize: 15}}>DEATH WILL</Text>
            <TextInput
                style={deathWillStyle.inputStyle}
                multiline={true}
                numberOfLines={4}
                onChangeText = {(val) => onValueChange(val)}
                value = {statement}
            ></TextInput>
            <Button buttonStyle={{marginTop: 20}} title='Ready to go'/>
        </View>
    )
}
