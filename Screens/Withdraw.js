import React, {Component, useState} from 'react';
import {View, TextInput, StyleSheet, Picker} from 'react-native';
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

const WithdrawMoney = (props) => {

    const [selectedPolicy, setSelectedPolicy] = useState('');
    const [disableButton, setDisableButon] = useState(true);

    let valueChanged = (val) => {
        setSelectedPolicy(val)
        setDisableButon(false);
    }

    const policy_name = ['abcd', 'efgh', 'hijk']

    return (
        <View style={paymentStyle.container}>
            <Picker
            selectedValue={selectedPolicy}
            placeholder = 'premium type'
            onValueChange = {(e) => valueChanged('insurance_type')}>
            <Picker.Item value='' label='Premium type' />
            {
                policy_name.map((item, index) => {
                    return <Picker.Item label={item} value={item} />
                })
            }
        </Picker>
            <TextInput style={paymentStyle.inputStyle} maxLength={6}  placeholder='Withdraw Money' />
            <Button disabled = {disableButton} buttonStyle={{marginTop: 30, backgroundColor: 'green'}} title='Withdraw Money'></Button>
        </View>
    )
}

export default WithdrawMoney