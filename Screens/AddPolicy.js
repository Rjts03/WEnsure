import React, { Component, useEffect, useState } from 'react';
import { Button} from 'react-native-elements';
import {View, StyleSheet, TextInput, Picker} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { createPolicy } from '../utils/request';

const registerStyle = StyleSheet.create({
    inputStyle: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'lightgreen',
        width: '100%',
        padding: 7,
    }
})

const AddPolicy = ({navigation, route}) => {

    const [data, setData] = useState({});
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    let valueChanged = (type, e) => {
        setData({...data, [type]: e});
    }

    const addPolicy = () => {
      setIsLoading(true)
      const policyDetails = {
        policy_id: data.policy_number,
        uid: route.params.uid,
        insurance_type: data.insurance_type,
        premium_type: data.premium_type,
        premium_payment_date: data.premium_payment_date.toString()
      }
      createPolicy(policyDetails, setStatus, setError, setIsLoading)
    };

    useEffect(() => {
      if(status) {
        navigation.navigate('Home')
      }
    }, [status])

    return (
      <View style={{ flex: 1, width: '100%', alignItems: "center", paddingTop:140,  paddingLeft: 20, paddingRight: 20 }}>
      <TextInput onChangeText = {(e) => valueChanged('policy_number', e)} returnKeyType = { "next" } style={registerStyle.inputStyle} placeholder='Policy Number'/>
        <TextInput onChangeText = {(e) => valueChanged('insurance_type', e)} returnKeyType = { "next" } style={registerStyle.inputStyle} placeholder='Insurance Type'/>
        <TextInput onChangeText = {(e) => valueChanged('insurance_provider', e)} returnKeyType = { "next" }  style={registerStyle.inputStyle} placeholder='Insurance provider'/>
        <Picker
            selectedValue={data['premium_type']}
            style={registerStyle.inputStyle}
            placeholder = 'premium type'
            onValueChange = {(e) => valueChanged('premium_type', e)}>
            <Picker.Item value='' label='Premium type' />
            <Picker.Item label="Quaterly" value="quarterly" />
            <Picker.Item label="Yearly" value="yearly" />
        </Picker>
        <DatePicker
          style={{width: '100%'}}
          date={data['premium_pay_date']}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={ {
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderColor: 'lightgreen',
              borderRadius: 8
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => valueChanged('premium_payment_date', date)}
        />
        <TextInput onChangeText = {(e) => valueChanged('premium_amount', e)} returnKeyType = { "next" }  keyboardType='numeric' style={registerStyle.inputStyle} placeholder='Premium amount'/>
        <Button onPress={addPolicy} buttonStyle={{marginTop: 20, backgroundColor: 'green'}} title="Let's start saving"/>
    </View>
    );
}

export default AddPolicy;
